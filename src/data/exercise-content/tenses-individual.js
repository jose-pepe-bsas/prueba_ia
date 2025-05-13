
    import { shuffleArray, distributeCorrectAnswers } from '@/lib/utils';

    import { originalPresentSimpleExercises } from '@/data/exercise-content/tenses-data/present-simple';
    import { originalPresentContinuousExercises } from '@/data/exercise-content/tenses-data/present-continuous';
    import { originalPastSimpleExercises } from '@/data/exercise-content/tenses-data/past-simple';
    import { originalPastContinuousExercises } from '@/data/exercise-content/tenses-data/past-continuous';
    import { originalPresentPerfectSimpleExercises } from '@/data/exercise-content/tenses-data/present-perfect-simple';
    import { originalPresentPerfectContinuousExercises } from '@/data/exercise-content/tenses-data/present-perfect-continuous';
    import { originalPastPerfectSimpleExercises } from '@/data/exercise-content/tenses-data/past-perfect-simple';
    import { originalPastPerfectContinuousExercises } from '@/data/exercise-content/tenses-data/past-perfect-continuous';
    import { originalFutureSimpleExercises } from '@/data/exercise-content/tenses-data/future-simple';
    import { originalFutureGoingToExercises } from '@/data/exercise-content/tenses-data/future-going-to';
    import { originalFutureContinuousExercises } from '@/data/exercise-content/tenses-data/future-continuous';
    import { originalFuturePerfectSimpleExercises } from '@/data/exercise-content/tenses-data/future-perfect-simple';
    import { originalFuturePerfectContinuousExercises } from '@/data/exercise-content/tenses-data/future-perfect-continuous';
    import { originalVerbToBeExercises } from '@/data/exercise-content/tenses-data/verb-to-be';

    const processLevel = (levelExercisesArray) => {
      if (!Array.isArray(levelExercisesArray)) {
        console.error('Invalid levelExercisesArray:', levelExercisesArray);
        return []; 
      }
      return levelExercisesArray.map(exercise => {
        const options = [...exercise.options];
        const correctAnswer = exercise.correct;
        
        let newOptions = options.filter(opt => opt !== correctAnswer);
        newOptions = shuffleArray(newOptions).slice(0, 2);
        newOptions.push(correctAnswer);
        newOptions = shuffleArray(newOptions);

        return { ...exercise, options: newOptions, correct: correctAnswer };
      });
    };
    
    const processTopic = (topicData) => {
      const processed = {};
      if (topicData && typeof topicData === 'object') {
        for (const levelKey in topicData) {
          if (Object.prototype.hasOwnProperty.call(topicData, levelKey) && Array.isArray(topicData[levelKey])) {
            let processedLevel = processLevel(topicData[levelKey]);
            processed[levelKey] = distributeCorrectAnswers(processedLevel);
          } else {
            console.warn(`Level data for ${levelKey} is not an array or is missing.`);
            processed[levelKey] = [];
          }
        }
      } else {
        console.error('Invalid topicData:', topicData);
      }
      return processed;
    };

    export const presentSimpleExercises = processTopic(originalPresentSimpleExercises['tenses-present-simple']);
    export const presentContinuousExercises = processTopic(originalPresentContinuousExercises['tenses-present-continuous']);
    export const pastSimpleExercises = processTopic(originalPastSimpleExercises['tenses-past-simple']);
    export const pastContinuousExercises = processTopic(originalPastContinuousExercises['tenses-past-continuous']);
    export const presentPerfectSimpleExercises = processTopic(originalPresentPerfectSimpleExercises['tenses-present-perfect-simple']);
    export const presentPerfectContinuousExercises = processTopic(originalPresentPerfectContinuousExercises['tenses-present-perfect-continuous']);
    export const pastPerfectSimpleExercises = processTopic(originalPastPerfectSimpleExercises['tenses-past-perfect-simple']);
    export const pastPerfectContinuousExercises = processTopic(originalPastPerfectContinuousExercises['tenses-past-perfect-continuous']);
    export const futureSimpleExercises = processTopic(originalFutureSimpleExercises['tenses-future-simple']);
    export const futureGoingToExercises = processTopic(originalFutureGoingToExercises['tenses-going-to']);
    export const futureContinuousExercises = processTopic(originalFutureContinuousExercises['tenses-future-continuous']);
    export const futurePerfectSimpleExercises = processTopic(originalFuturePerfectSimpleExercises['tenses-future-perfect-simple']);
    export const futurePerfectContinuousExercises = processTopic(originalFuturePerfectContinuousExercises['tenses-future-perfect-continuous']);
    export const verbToBeExercises = processTopic(originalVerbToBeExercises['verb-to-be']);

  