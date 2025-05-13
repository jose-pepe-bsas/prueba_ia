
    import React, { useState, useEffect, useCallback } from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
    import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
    import { Label } from '@/components/ui/label';
    import { motion, AnimatePresence } from 'framer-motion';
    import { CheckCircle, XCircle, RefreshCw, Lightbulb } from 'lucide-react';
    import { getTopicWords, getNumberWordsByLevel, kidsVocabulary } from '@/data/kids';

    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      };

    const generateMcqQuestions = (topicId, level, count = 10) => {
        let wordPool = [];
        if (topicId === 'vocabulary-numbers') {
            wordPool = getNumberWordsByLevel(level || 'easy');
        } else {
            wordPool = getTopicWords(topicId, level || 'easy');
        }

        if (!wordPool || wordPool.length === 0) {
             wordPool = kidsVocabulary['vocabulary-colors'].words; 
        }
        
        const actualCount = Math.min(count, wordPool.length);
        const selectedWords = shuffleArray(wordPool).slice(0, actualCount);
        
        return selectedWords.map(wordData => {
            const correctAnswer = wordData.es;
            let options = [correctAnswer];
            
            let distractors = shuffleArray(wordPool.filter(w => w.es !== correctAnswer))
                                .slice(0, 2)
                                .map(w => w.es);
            options.push(...distractors);

            while (options.length < 3 && wordPool.length >=3) {
                const randomWordFromPool = wordPool[Math.floor(Math.random() * wordPool.length)];
                if (!options.includes(randomWordFromPool.es)) {
                    options.push(randomWordFromPool.es);
                }
            }
             while (options.length < 3) {
                options.push(`Opción Falsa ${options.length}`);
            }
            
            return {
                question: `¿Qué significa "${wordData.en}"?`,
                options: shuffleArray(options.slice(0,3)),
                answer: correctAnswer,
                originalEn: wordData.en,
                originalEs: wordData.es
            };
        });
    };


    const MultipleChoiceGame = ({ topicId, level }) => {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [isCorrect, setIsCorrect] = useState(null);
      const [score, setScore] = useState(0);
      const [questions, setQuestions] = useState([]);
      const [showSummary, setShowSummary] = useState(false);
      const [feedbackMessage, setFeedbackMessage] = useState('');

      const loadQuestions = useCallback(() => {
        const newQuestions = generateMcqQuestions(topicId, level, 10);
        setQuestions(newQuestions);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsCorrect(null);
        setScore(0);
        setShowSummary(false);
        setFeedbackMessage('');
      }, [topicId, level]);

      useEffect(() => {
        loadQuestions();
      }, [loadQuestions]);

      const currentQuestion = questions[currentQuestionIndex];

      const handleOptionSelect = (option) => {
        if (isCorrect !== null) return; 
        setSelectedOption(option);
      };

      const checkAnswer = () => {
        if (!selectedOption || !currentQuestion) return;
        const correct = selectedOption === currentQuestion.answer;
        setIsCorrect(correct);
        if (correct) {
          setScore(prevScore => prevScore + 1);
          setFeedbackMessage(`¡Correcto! "${currentQuestion.originalEn}" significa "${currentQuestion.originalEs}".`);
        } else {
          setFeedbackMessage(`Incorrecto. "${currentQuestion.originalEn}" significa "${currentQuestion.originalEs}".`);
        }
      };

      const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
          setSelectedOption(null);
          setIsCorrect(null);
          setFeedbackMessage('');
        } else {
          setShowSummary(true);
        }
      };
      
      if (questions.length === 0 || !currentQuestion) {
        return <p className="text-center mt-8">Cargando preguntas...</p>;
      }

      if (showSummary) {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-6 border rounded-lg glass-effect dark:glass-effect shadow-md max-w-lg mx-auto text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">¡Juego Terminado!</h3>
            <p className="text-xl mb-2">Tu puntuación: <span className="font-bold text-accent">{score}</span> de <span className="font-bold">{questions.length}</span></p>
            {score === questions.length ? (
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto my-4" />
            ) : (
                <Lightbulb className="h-16 w-16 text-yellow-500 mx-auto my-4" />
            )}
            <Button onClick={loadQuestions} className="mt-6">
              <RefreshCw className="mr-2 h-4 w-4" /> Jugar de Nuevo
            </Button>
          </motion.div>
        );
      }


      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mt-8 p-6 border rounded-lg glass-effect dark:glass-effect shadow-md max-w-lg mx-auto"
        >
          <h3 className="text-xl font-semibold mb-2 text-center text-primary">Elige la Correcta</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedOption || ''} onValueChange={handleOptionSelect} className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Label
                      htmlFor={`mc-option-${index}`}
                      className={`flex items-center space-x-3 p-3 rounded-md border cursor-pointer transition-all
                        ${selectedOption === option ? (isCorrect === null ? 'bg-accent/20 border-primary' : (isCorrect ? 'bg-green-100 dark:bg-green-800 border-green-500' : 'bg-red-100 dark:bg-red-800 border-red-500')) : 'hover:bg-accent/10'}
                        ${isCorrect !== null && option === currentQuestion.answer && 'bg-green-100 dark:bg-green-800 border-green-500'}
                        ${isCorrect !== null && selectedOption === option && !isCorrect && 'bg-red-100 dark:bg-red-800 border-red-500'}
                      `}
                    >
                      <RadioGroupItem value={option} id={`mc-option-${index}`} className="border-muted-foreground data-[state=checked]:border-primary" disabled={isCorrect !== null} />
                      <span className="flex-1">{option}</span>
                      {isCorrect !== null && selectedOption === option && (
                        isCorrect ? <CheckCircle className="h-5 w-5 text-green-600" /> : <XCircle className="h-5 w-5 text-red-600" />
                      )}
                       {isCorrect !== null && option === currentQuestion.answer && selectedOption !== option && (
                         <CheckCircle className="h-5 w-5 text-green-600 opacity-70" />
                       )}
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
              {feedbackMessage && (
                <motion.p 
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity:1, y: 0}}
                    className={`mt-4 text-sm font-semibold text-center ${isCorrect ? 'text-green-600' : 'text-red-600'}`}
                >
                    {feedbackMessage}
                </motion.p>
              )}
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">Puntuación: {score}</p>
              {isCorrect === null ? (
                <Button onClick={checkAnswer} disabled={!selectedOption}>Comprobar</Button>
              ) : (
                <Button onClick={nextQuestion}>
                  {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Ver Resultados'}
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default MultipleChoiceGame;
  