
    import { shuffleArray, distributeCorrectAnswers } from '@/lib/utils';
    import { 
      statementsLevel1, statementsLevel2, statementsLevel3,
      questionsLevel1, questionsLevel2, questionsLevel3,
      requestsCommandsLevel1, requestsCommandsLevel2, requestsCommandsLevel3,
      reportingVerbsLevel1, reportingVerbsLevel2, reportingVerbsLevel3
    } from '@/data/exercise-content/reported-speech/exercise-data';

    const processLevel = (levelExercises) => {
      return levelExercises.map(exercise => {
        const options = [...exercise.options];
        const correctAnswer = exercise.correct;
        
        let newOptions = options.filter(opt => opt !== correctAnswer);
        newOptions = shuffleArray(newOptions).slice(0, 2);
        newOptions.push(correctAnswer);
        newOptions = shuffleArray(newOptions);

        return { ...exercise, options: newOptions, correct: correctAnswer };
      });
    };
    
    const processTopic = (topicExercises) => {
      const processed = {};
      for (const level in topicExercises) {
        processed[level] = processLevel(topicExercises[level]);
        processed[level] = distributeCorrectAnswers(processed[level]);
      }
      return processed;
    };

    const originalReportedSpeechExercises = {
      'reported-statements': {
        level1: statementsLevel1,
        level2: statementsLevel2,
        level3: statementsLevel3
      },
      'reported-questions': {
        level1: questionsLevel1,
        level2: questionsLevel2,
        level3: questionsLevel3
      },
      'reported-speech-requests-commands': {
        level1: requestsCommandsLevel1,
        level2: requestsCommandsLevel2,
        level3: requestsCommandsLevel3
      },
      'reporting-verbs': {
        level1: reportingVerbsLevel1,
        level2: reportingVerbsLevel2,
        level3: reportingVerbsLevel3
      }
    };

    export const reportedSpeechExercises = {};
    for (const topic in originalReportedSpeechExercises) {
      reportedSpeechExercises[topic] = processTopic(originalReportedSpeechExercises[topic]);
    }
  