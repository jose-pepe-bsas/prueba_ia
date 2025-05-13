
    import { shuffleArray, distributeCorrectAnswers } from '@/lib/utils';
    import { 
      gossipStatementsLevel1, gossipStatementsLevel2, gossipStatementsLevel3,
      gossipRequestsLevel1, gossipRequestsLevel2, gossipRequestsLevel3,
      gossipQuestionsLevel1, gossipQuestionsLevel2, gossipQuestionsLevel3
    } from '@/data/exercise-content/gossip-data';

    const processLevelGossip = (levelExercises) => {
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
    
    const processTopicGossip = (topicExercises) => {
      const processed = {};
      for (const level in topicExercises) {
        processed[level] = processLevelGossip(topicExercises[level]);
        processed[level] = distributeCorrectAnswers(processed[level]);
      }
      return processed;
    };

    const originalGossipExercises = {
      'gossip-statements': {
        level1: gossipStatementsLevel1,
        level2: gossipStatementsLevel2,
        level3: gossipStatementsLevel3
      },
      'gossip-requests': {
        level1: gossipRequestsLevel1,
        level2: gossipRequestsLevel2,
        level3: gossipRequestsLevel3
      },
      'gossip-questions': {
        level1: gossipQuestionsLevel1,
        level2: gossipQuestionsLevel2,
        level3: gossipQuestionsLevel3
      }
    };

    export const gossipExercises = {};
    for (const topic in originalGossipExercises) {
      gossipExercises[topic] = processTopicGossip(originalGossipExercises[topic]);
    }
  