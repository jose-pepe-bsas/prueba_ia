
    import React from 'react';
    import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
    import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
    import { Label } from '@/components/ui/label';
    import { Button } from '@/components/ui/button';
    import { Progress } from "@/components/ui/progress";
    import { motion } from 'framer-motion';
    import { CheckCircle, XCircle } from 'lucide-react';

    const QuizCard = ({
      exercise,
      currentIndex,
      totalInLevel,
      score,
      progressValue,
      selectedOption,
      isCorrect,
      onOptionChange,
      onCheckAnswer,
      onNextStep,
      levelComplete,
      topicComplete
    }) => {

      if (!exercise) {
        return (
          <Card className="overflow-hidden glass-effect dark:glass-effect shadow-lg p-6">
            <CardHeader>
              <CardTitle>Cargando ejercicio...</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Por favor espera.</p>
            </CardContent>
          </Card>
        );
      }

      const isFinished = levelComplete || topicComplete;
      const canInteract = isCorrect === null && !isFinished;

      return (
        <Card className="overflow-hidden glass-effect dark:glass-effect shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex justify-between items-center">
              <span>Ejercicio {currentIndex + 1} de {totalInLevel}</span>
              <span className="text-sm font-medium text-primary">Puntuación: {score}/{currentIndex + (isCorrect !== null ? 1 : 0)}</span>
            </CardTitle>
            <Progress value={progressValue} className="w-full h-2 mt-2" />
            <p className="text-muted-foreground pt-4 text-base md:text-lg">{exercise.sentence.replace('___', '_______')}</p>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedOption} onValueChange={onOptionChange} className="space-y-3">
              {exercise.options.map((option, index) => (
                <motion.div
                  key={`${exercise.id}-${index}`}
                  className={`flex items-center space-x-3 p-3 rounded-md border-2 transition-all duration-300 ${
                    isCorrect !== null && option === exercise.correct ? 'border-green-500 bg-green-50 dark:bg-green-900/30 scale-105 shadow-md' :
                    isCorrect === false && option === selectedOption ? 'border-red-500 bg-red-50 dark:bg-red-900/30' :
                    !canInteract ? 'opacity-60 cursor-not-allowed border-border' :
                    'hover:bg-accent/10 hover:border-primary/50 cursor-pointer border-border'
                  }`}
                  whileTap={canInteract ? { scale: 0.98 } : {}}
                  onClick={() => canInteract && onOptionChange(option)}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} disabled={!canInteract} />
                  <Label htmlFor={`option-${index}`} className={`flex-1 ${canInteract ? 'cursor-pointer' : 'cursor-default'}`}>{option}</Label>
                  {isCorrect !== null && option === exercise.correct && <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />}
                  {isCorrect === false && option === selectedOption && <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />}
                </motion.div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-end items-center bg-muted/30 p-4">
            {isCorrect === null ? (
              <Button onClick={onCheckAnswer} disabled={!selectedOption || isFinished} size="lg">
                Comprobar
              </Button>
            ) : (
              <Button onClick={onNextStep} size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md">
                {levelComplete ? 'Siguiente Nivel →' : (currentIndex < totalInLevel - 1 ? 'Siguiente →' : 'Ver Resultados')}
              </Button>
            )}
          </CardFooter>
        </Card>
      );
    };

    export default QuizCard;
  