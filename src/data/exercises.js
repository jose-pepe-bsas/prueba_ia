
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
    import { reportedSpeechExercises } from '@/data/exercise-content/reportedSpeech';
    import { comparisonsExercises } from '@/data/exercise-content/comparisons';
    import { modalsExercises } from '@/data/exercise-content/modals';
    import { otherStructuresExercises } from '@/data/exercise-content/otherStructures';
    import { vocabularyExercises } from '@/data/exercise-content/vocabulary';
    import { kidsExercises } from '@/data/exercise-content/kids';
    import { generateDefaultTopicExercises } from '@/data/exercise-helpers';

    export const exercises = {
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
      ...reportedSpeechExercises,
      ...comparisonsExercises,
      ...modalsExercises,
      ...otherStructuresExercises,
      ...vocabularyExercises,
      ...kidsExercises,

      // Fallbacks for topics that might not have specific files yet
      'modals-mixed': modalsExercises['modals-mixed'] || generateDefaultTopicExercises('modals-mixed'),
      'phrasal-verbs-advanced': otherStructuresExercises['phrasal-verbs-advanced'] || generateDefaultTopicExercises('phrasal-verbs-advanced'),
      'mixed-infinitives': otherStructuresExercises['mixed-infinitives'] || generateDefaultTopicExercises('mixed-infinitives'),
      'quantifiers-how-much-many': otherStructuresExercises['quantifiers-how-much-many'] || generateDefaultTopicExercises('quantifiers-how-much-many'),
      'comparatives-as-as': comparisonsExercises['comparatives-as-as'] || generateDefaultTopicExercises('comparatives-as-as'),
      'comparatives-the-the': comparisonsExercises['comparatives-the-the'] || generateDefaultTopicExercises('comparatives-the-the'),
      'comparatives-and-comparative': comparisonsExercises['comparatives-and-comparative'] || generateDefaultTopicExercises('comparatives-and-comparative'),
      'tenses-comparison-ps-vs-pc': comparisonsExercises['tenses-comparison-ps-vs-pc'] || generateDefaultTopicExercises('tenses-comparison-ps-vs-pc'),
      'tenses-comparison-past-s-vs-pc': comparisonsExercises['tenses-comparison-past-s-vs-pc'] || generateDefaultTopicExercises('tenses-comparison-past-s-vs-pc'),
      'tenses-comparison-past-s-vs-pp': comparisonsExercises['tenses-comparison-past-s-vs-pp'] || generateDefaultTopicExercises('tenses-comparison-past-s-vs-pp'),
      'tenses-comparison-past-s-vs-pres-p': comparisonsExercises['tenses-comparison-past-s-vs-pres-p'] || generateDefaultTopicExercises('tenses-comparison-past-s-vs-pres-p'),
    };
  