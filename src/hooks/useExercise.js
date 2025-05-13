
    import { useState, useEffect, useCallback } from 'react';
    import { exercises } from '@/data/exercises';
    import { useToast } from '@/components/ui/use-toast';

    const useExercise = (topicId, initialLevel = 1) => {
      const [currentExercises, setCurrentExercises] = useState([]);
      const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
      const [score, setScore] = useState(0);
      const [selectedOption, setSelectedOption] = useState(null);
      const [isCorrect, setIsCorrect] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [isLevelComplete, setIsLevelComplete] = useState(false);
      const [isTopicComplete, setIsTopicComplete] = useState(false); 
      const [currentLevel, setCurrentLevel] = useState(initialLevel);
      
      const { toast } = useToast();

      const loadExercisesForLevel = useCallback((level) => {
        setIsLoading(true);
        setCurrentExerciseIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsCorrect(null);
        setIsLevelComplete(false);
        
        const topicExercises = exercises[topicId];
        if (topicExercises && topicExercises[`level${level}`]) {
          const shuffledExercises = [...topicExercises[`level${level}`]].sort(() => Math.random() - 0.5);
          setCurrentExercises(shuffledExercises.slice(0, 10)); 
        } else {
          setCurrentExercises([]);
          toast({
            title: "Error",
            description: `No se encontraron ejercicios para el nivel ${level} de este tema.`,
            variant: "destructive",
          });
        }
        setCurrentLevel(level);
        setIsLoading(false);
      }, [topicId, toast]);

      useEffect(() => {
        loadExercisesForLevel(initialLevel);
      }, [loadExercisesForLevel, initialLevel]);

      const setExercisesForLevel = useCallback((level) => {
        loadExercisesForLevel(level);
      }, [loadExercisesForLevel]);


      const handleOptionChange = (option) => {
        if (isCorrect === null) {
          setSelectedOption(option);
        }
      };

      const checkAnswer = () => {
        if (selectedOption === null) {
          toast({
            title: "Atención",
            description: "Por favor, selecciona una opción.",
            variant: "default",
          });
          return;
        }
        const correct = selectedOption === currentExercises[currentExerciseIndex].correct;
        setIsCorrect(correct);
        if (correct) {
          setScore(prevScore => prevScore + 1);
          toast({
            title: "¡Correcto!",
            description: "¡Muy bien!",
            className: "bg-green-500 text-white",
          });
        } else {
          toast({
            title: "Incorrecto",
            description: `La respuesta correcta era: ${currentExercises[currentExerciseIndex].correct}`,
            variant: "destructive",
          });
        }
      };

      const nextStep = () => {
        if (currentExerciseIndex < currentExercises.length - 1) {
          setCurrentExerciseIndex(prevIndex => prevIndex + 1);
          setSelectedOption(null);
          setIsCorrect(null);
        } else {
          setIsLevelComplete(true);
          // Check if all levels are complete (e.g., up to level 3)
          if (currentLevel >= 3) { // Assuming max 3 levels
             setIsTopicComplete(true);
             toast({
                title: "¡Tema Completado!",
                description: "¡Felicidades! Has completado todos los niveles de este tema.",
                className: "bg-blue-500 text-white",
             });
          } else {
             toast({
                title: `¡Nivel ${currentLevel} Completado!`,
                description: "¡Buen trabajo! Puedes pasar al siguiente nivel o reiniciar.",
                className: "bg-green-600 text-white",
             });
          }
        }
      };
      
      const resetLevel = (level = currentLevel) => {
        setIsLoading(true);
        setCurrentLevel(level);
        loadExercisesForLevel(level);
      };


      const currentExercise = currentExercises[currentExerciseIndex];
      const totalExercisesInLevel = currentExercises.length;
      const progress = totalExercisesInLevel > 0 ? ((currentExerciseIndex + (isCorrect !== null ? 1: 0) ) / totalExercisesInLevel) * 100 : 0;


      return {
        currentExercise,
        currentExerciseIndex,
        score,
        isCorrect,
        selectedOption,
        isLoading,
        isTopicComplete,
        isLevelComplete,
        totalExercisesInLevel,
        progress,
        handleOptionChange,
        checkAnswer,
        nextStep,
        resetLevel,
        setExercisesForLevel,
      };
    };

    export default useExercise;
  