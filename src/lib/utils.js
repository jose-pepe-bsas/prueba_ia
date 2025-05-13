
    import { clsx } from 'clsx';
    import { twMerge } from 'tailwind-merge';

    export function cn(...inputs) {
    	return twMerge(clsx(inputs));
    }

    export const shuffleArray = (array) => {
      if (!Array.isArray(array)) {
        console.error('shuffleArray expects an array');
        return [];
      }
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    export const distributeCorrectAnswers = (exercises) => {
      if (!Array.isArray(exercises) || exercises.length === 0) {
        return exercises;
      }
      
      const correctIndexPattern = [0, 2, 1, 0, 1, 2, 1, 2, 0, 2, 0, 1];

      return exercises.map((exercise, index) => {
        if (!exercise || !Array.isArray(exercise.options) || typeof exercise.correct === 'undefined') {
          console.error('Invalid exercise structure:', exercise);
          return exercise;
        }

        const targetIndex = correctIndexPattern[index % correctIndexPattern.length];
        const { options, correct } = exercise;

        const currentCorrectIndex = options.indexOf(correct);

        if (currentCorrectIndex === -1) {
          console.error("Correct answer not found in options for exercise:", exercise);
          return { ...exercise, options: shuffleArray(options) }; 
        }

        if (currentCorrectIndex === targetIndex) {
          return exercise; 
        }

        const newOptions = [...options];
        const temp = newOptions[targetIndex];
        newOptions[targetIndex] = newOptions[currentCorrectIndex];
        newOptions[currentCorrectIndex] = temp;
        
        return { ...exercise, options: newOptions };
      });
    };
  