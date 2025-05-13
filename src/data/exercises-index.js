
    import { 
      presentSimpleExercises, 
      presentContinuousExercises, 
      pastSimpleExercises, 
      pastContinuousExercises, 
      presentPerfectSimpleExercises, 
      presentPerfectContinuousExercises, 
      pastPerfectSimpleExercises, 
      pastPerfectContinuousExercises, 
      futureSimpleExercises, 
      futureContinuousExercises, 
      futurePerfectSimpleExercises, 
      futurePerfectContinuousExercises, 
      futureGoingToExercises, 
      verbToBeExercises 
    } from '@/data/exercise-content/tenses-individual';
    import { conditionalsExercises } from '@/data/exercise-content/conditionals';
    import { passiveVoiceExercises } from '@/data/exercise-content/passiveVoice';
    import { comparisonsExercises } from '@/data/exercise-content/comparisons-data/index';
    import { modalsExercises } from '@/data/exercise-content/modals';
    import { otherStructuresExercises, phrasalVerbsBasicExercises, phrasalVerbsIntermediateExercises, phrasalVerbsAdvancedExercises, relativeClausesExercises, gerundsInfinitivesExercises, mixedInfinitivesExercises, articlesExercises, quantifiersExercises, quantifiersHowMuchManyExercises } from '@/data/exercise-content/other-structures-individual';
    import { vocabularyExercises, paronymsExercises, synonymsExercises, antonymsExercises, irregularVerbs1PastExercises, irregularVerbs2PastExercises, irregularVerbs3PastExercises, irregularVerbs4ParticipleExercises, irregularVerbs5ParticipleExercises, irregularVerbs6ParticipleExercises, nouns1Exercises, nouns2Exercises, nouns3Exercises, adjectives1Exercises, adjectives2Exercises, adjectives3Exercises, verbs1Exercises, verbs2Exercises, verbs3Exercises } from '@/data/exercise-content/vocabulary-individual';
    import { kidsExercises } from '@/data/exercise-content/kids';
    import { generateDefaultTopicExercises } from '@/data/exercise-helpers';

    const allExercises = {
      'tenses-present-simple': presentSimpleExercises,
      'tenses-present-continuous': presentContinuousExercises,
      'tenses-past-simple': pastSimpleExercises,
      'tenses-past-continuous': pastContinuousExercises,
      'tenses-present-perfect-simple': presentPerfectSimpleExercises,
      'tenses-present-perfect-continuous': presentPerfectContinuousExercises,
      'tenses-past-perfect-simple': pastPerfectSimpleExercises,
      'tenses-past-perfect-continuous': pastPerfectContinuousExercises,
      'tenses-future-simple': futureSimpleExercises,
      'tenses-future-continuous': futureContinuousExercises,
      'tenses-future-perfect-simple': futurePerfectSimpleExercises,
      'tenses-future-perfect-continuous': futurePerfectContinuousExercises,
      'tenses-going-to': futureGoingToExercises,
      'verb-to-be': verbToBeExercises,
      ...conditionalsExercises,
      ...passiveVoiceExercises,
      ...comparisonsExercises,
      ...modalsExercises,
      'phrasal-verbs-basic': phrasalVerbsBasicExercises,
      'phrasal-verbs-intermediate': phrasalVerbsIntermediateExercises,
      'phrasal-verbs-advanced': phrasalVerbsAdvancedExercises,
      'relative-clauses': relativeClausesExercises,
      'gerunds-infinitives': gerundsInfinitivesExercises,
      'mixed-infinitives': mixedInfinitivesExercises,
      'articles': articlesExercises,
      'quantifiers': quantifiersExercises,
      'quantifiers-how-much-many': quantifiersHowMuchManyExercises,
      'vocabulary-paronyms': paronymsExercises,
      'vocabulary-synonyms': synonymsExercises,
      'vocabulary-antonyms': antonymsExercises,
      'vocabulary-irregular-verbs-1-past': irregularVerbs1PastExercises,
      'vocabulary-irregular-verbs-2-past': irregularVerbs2PastExercises,
      'vocabulary-irregular-verbs-3-past': irregularVerbs3PastExercises,
      'vocabulary-irregular-verbs-4-participle': irregularVerbs4ParticipleExercises,
      'vocabulary-irregular-verbs-5-participle': irregularVerbs5ParticipleExercises,
      'vocabulary-irregular-verbs-6-participle': irregularVerbs6ParticipleExercises,
      'vocabulary-nouns-1': nouns1Exercises,
      'vocabulary-nouns-2': nouns2Exercises,
      'vocabulary-nouns-3': nouns3Exercises,
      'vocabulary-adjectives-1': adjectives1Exercises,
      'vocabulary-adjectives-2': adjectives2Exercises,
      'vocabulary-adjectives-3': adjectives3Exercises,
      'vocabulary-verbs-1': verbs1Exercises,
      'vocabulary-verbs-2': verbs2Exercises,
      'vocabulary-verbs-3': verbs3Exercises,
      ...kidsExercises,
    };

    const topicSpecificDefaults = [
      'modals-mixed',
      'comparatives-as-as',
      'comparatives-the-the',
      'comparatives-and-comparative',
      'tenses-comparison-ps-vs-pc',
      'tenses-comparison-past-s-vs-pc',
      'tenses-comparison-past-s-vs-pp',
      'tenses-comparison-past-s-vs-pres-p',
      'vocabulary-colors',
      'vocabulary-numbers',
      'vocabulary-pronouns',
      'vocabulary-animals',
      'vocabulary-family',
    ];

    topicSpecificDefaults.forEach(topicId => {
      if (!allExercises[topicId]) {
        allExercises[topicId] = generateDefaultTopicExercises(topicId);
      } else if (typeof allExercises[topicId] === 'function') {
         allExercises[topicId] = allExercises[topicId]();
      } else {
        const defaultLevels = generateDefaultTopicExercises(topicId);
        allExercises[topicId] = {
          level1: allExercises[topicId]?.level1 || defaultLevels.level1,
          level2: allExercises[topicId]?.level2 || defaultLevels.level2,
          level3: allExercises[topicId]?.level3 || defaultLevels.level3,
        };
      }
    });
    
    export const exercises = allExercises;
  