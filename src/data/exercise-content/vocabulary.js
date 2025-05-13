
    import { generateDefaultLevel, generateDefaultTopicExercises } from '@/data/exercise-helpers';
    import { shuffleArray, distributeCorrectAnswers } from '@/lib/utils';
    import { irregularVerbs, verbLists } from '@/data/exercise-content/irregular-verbs-data';
    import { newVocabularyData } from '@/data/exercise-content/new-vocabulary-data';

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

    const generateIrregularVerbExercises = (verbList, type, topicId) => {
      const exercises = {};
      for (const levelKey in verbList) {
        const levelNum = parseInt(levelKey.replace('level', ''));
        exercises[levelKey] = verbList[levelKey].map((verb, index) => {
          const verbData = irregularVerbs[verb];
          if (!verbData) {
            console.warn(`Verb data not found for: ${verb}`);
            return {
              id: `${topicId}-l${levelNum}-${index + 1}`,
              sentence: `Infinitive: ${verb}. Choose the correct ${type} form.`,
              options: ['Error', 'Data', 'Missing'],
              correct: 'Error',
            };
          }
          const correctAnswer = type === 'past simple' ? verbData.pastSimple.split('/')[0] : verbData.pastParticiple.split('/')[0];
          const wrongOption1 = type === 'past simple' ? verbData.wrongPast1 : verbData.wrongPart1;
          const wrongOption2 = type === 'past simple' ? verbData.wrongPast2 : verbData.wrongPart2;
          
          return {
            id: `${topicId}-l${levelNum}-${index + 1}`,
            sentence: `Infinitive: ${verb}. Choose the correct ${type} form.`,
            options: [correctAnswer, wrongOption1, wrongOption2],
            correct: correctAnswer,
          };
        });
      }
      return exercises;
    };

    const generateNewVocabularyExercises = (vocabSet, topicIdPrefix) => {
        const exercises = {};
        for (const levelKey in vocabSet) { 
            const levelNum = parseInt(levelKey.replace('level', ''));
            exercises[levelKey] = vocabSet[levelKey].map((item, index) => {
                const correctAnswer = item.es;
                
                let currentOptions = item.options.filter(opt => opt !== correctAnswer);
                
                currentOptions = shuffleArray(currentOptions).slice(0, 2);
                
                currentOptions.push(correctAnswer);
                
                currentOptions = shuffleArray(currentOptions);

                return {
                    id: `${topicIdPrefix}-l${levelNum}-${index + 1}`,
                    sentence: `What is "${item.en}" in Spanish?`,
                    options: currentOptions,
                    correct: correctAnswer,
                };
            });
        }
        return exercises;
    };
    

    const originalVocabularyExercises = {
      'vocabulary-paronyms': {
        level1: [
          { id: 'par-l1-1', sentence: 'I will ____ the letter tomorrow; I can´t do it ___ today because I’m tired.', options: ['write/right', 'right/write', 'rite/right'], correct: 'write/right' },
          { id: 'par-l1-2', sentence: 'She gave me some good ____ on how to ____ for the exam.', options: ['advice/advise', 'advise/advice', 'advize/advice'], correct: 'advice/advise' },
          { id: 'par-l1-3', sentence: 'The hot ____ had a strange ____ on the plants.', options: ['weather/effect', 'effect/weather', 'affect/whether'], correct: 'weather/effect' },
          { id: 'par-l1-4', sentence: 'He decided to ____ the challenge, ____ for the prize.', options: ['accept/except', 'except/accept', 'aksept/eksept'], correct: 'accept/except' },
          { id: 'par-l1-5', sentence: 'The ____ of the school is a man of high ____.', options: ['principal/principle', 'principle/principal', 'principel/principel'], correct: 'principal/principle' },
          { id: 'par-l1-6', sentence: 'It\'s important to be ____ when crossing a ____ street.', options: ['careful/busy', 'carefull/buzy', 'carful/bisy'], correct: 'careful/busy' },
          { id: 'par-l1-7', sentence: 'She wanted to ____ her dress because it didn\'t fit her ____.', options: ['alter/properly', 'altar/properly', 'alter/propperly'], correct: 'alter/properly' },
          { id: 'par-l1-8', sentence: 'The ____ was beautiful, but the ____ was too strong.', options: ['scent/wind', 'cent/wind', 'sent/windy'], correct: 'scent/wind' },
          { id: 'par-l1-9', sentence: 'I need to ____ my diet to ____ some weight.', options: ['change/lose', 'chance/loose', 'change/loose'], correct: 'change/lose' },
          { id: 'par-l1-10', sentence: 'The runner had to ____ his ____ to win the race.', options: ['pace/speed', 'peace/speed', 'pace/spede'], correct: 'pace/speed' },
        ],
        level2: [
          { id: 'par-l2-1', sentence: 'The desert is vast and ____. It\'s easy to ____ your way.', options: ['arid / lose', 'arid / loose', 'barren / loose'], correct: 'arid / lose' },
          { id: 'par-l2-2', sentence: 'She had to ____ her speech because of the ____ noise.', options: ['alter / constant', 'altar / constant', 'alter / consistent'], correct: 'alter / constant' },
          { id: 'par-l2-3', sentence: 'He received a ____ for his bravery, a true ____ of honor.', options: ['medal / symbol', 'meddle / symbol', 'medal / cymbal'], correct: 'medal / symbol' },
          { id: 'par-l2-4', sentence: 'The artist used a ____ to paint the ____ of the old city.', options: ['palette / scene', 'pallet / scene', 'palette / seen'], correct: 'palette / scene' },
          { id: 'par-l2-5', sentence: 'It is not ____ to ____ in other people\'s private conversations.', options: ['moral / meddle', 'morale / medal', 'moral / medal'], correct: 'moral / meddle' },
          { id: 'par-l2-6', sentence: 'The ____ of the story is to always be ____ to others.', options: ['moral / kind', 'morale / kind', 'moral / kine'], correct: 'moral / kind' },
          { id: 'par-l2-7', sentence: 'The lawyer tried to ____ a response from the ____ witness.', options: ['elicit / reticent', 'illicit / reticent', 'elicit / reluctant'], correct: 'elicit / reticent' },
          { id: 'par-l2-8', sentence: 'The new ____ will ____ the company\'s performance.', options: ['policy / affect', 'policy / effect', 'police / affect'], correct: 'policy / affect' },
          { id: 'par-l2-9', sentence: 'She found a ____ of old letters in the ____ of the house.', options: ['cache / attic', 'cash / attic', 'cache / attick'], correct: 'cache / attic' },
          { id: 'par-l2-10', sentence: 'The ____ was too heavy to ____ up the stairs.', options: ['burden / bear', 'burden / bare', 'berden / bear'], correct: 'burden / bear' },
        ],
        level3: [
          { id: 'par-l3-1', sentence: 'The politician\'s speech was full of ____, designed to ____ the audience.', options: ['rhetoric / persuade', 'rhetoric / dissuade', 'rethoric / persuade'], correct: 'rhetoric / persuade' },
          { id: 'par-l3-2', sentence: 'He made an ____ to the classic novel in his latest ____.', options: ['allusion / essay', 'illusion / essay', 'allusion / esay'], correct: 'allusion / essay' },
          { id: 'par-l3-3', sentence: 'The ____ of the new law is to ____ crime in the city.', options: ['intent / curb', 'intent / curve', 'intense / curb'], correct: 'intent / curb' },
          { id: 'par-l3-4', sentence: 'She had to ____ her principles to ____ to the new environment.', options: ['compromise / adapt', 'comprise / adapt', 'compromise / adopt'], correct: 'compromise / adapt' },
          { id: 'par-l3-5', sentence: 'The ____ evidence was enough to ____ the suspect.', options: ['conclusive / convict', 'inclusive / convict', 'conclusive / convinct'], correct: 'conclusive / convict' },
          { id: 'par-l3-6', sentence: 'His ____ remarks were not ____ to the serious discussion.', options: ['facetious / pertinent', 'factious / pertinent', 'facetious / pertenent'], correct: 'facetious / pertinent' },
          { id: 'par-l3-7', sentence: 'The ____ of the painting was its ____ use of color.', options: ['highlight / striking', 'highlite / striking', 'highlight / strikeing'], correct: 'highlight / striking' },
          { id: 'par-l3-8', sentence: 'It is ____ that you ____ all the safety regulations.', options: ['imperative / observe', 'imperitive / observe', 'imperative / obzerve'], correct: 'imperative / observe' },
          { id: 'par-l3-9', sentence: 'The ____ sound of the waves had a ____ effect on her.', options: ['rhythmic / calming', 'rythmic / calming', 'rhythmic / calmin'], correct: 'rhythmic / calming' },
          { id: 'par-l3-10', sentence: 'She tried to ____ a sense of ____ among her team members.', options: ['instill / camaraderie', 'install / camaraderie', 'instill / comraderie'], correct: 'instill / camaraderie' },
        ],
      },
      'vocabulary-synonyms': {
        level1: [
          { id: 'syn-l1-1', sentence: 'She is very ____ (happy).', options: ['glad', 'sad', 'angry'], correct: 'glad' },
          { id: 'syn-l1-2', sentence: 'This is a ____ (big) house.', options: ['tiny', 'large', 'small'], correct: 'large' },
          { id: 'syn-l1-3', sentence: 'He runs ____ (fast).', options: ['quick', 'slow', 'steady'], correct: 'quick' },
          { id: 'syn-l1-4', sentence: 'It\'s a ____ (beautiful) day.', options: ['ugly', 'horrible', 'lovely'], correct: 'lovely' },
          { id: 'syn-l1-5', sentence: 'She is very ____ (intelligent).', options: ['smart', 'stupid', 'dumb'], correct: 'smart' },
          { id: 'syn-l1-6', sentence: 'This food is ____ (delicious).', options: ['tasty', 'awful', 'bland'], correct: 'tasty' },
          { id: 'syn-l1-7', sentence: 'He was ____ (afraid) of the dark.', options: ['bold', 'scared', 'brave'], correct: 'scared' },
          { id: 'syn-l1-8', sentence: 'The movie was ____ (funny).', options: ['amusing', 'boring', 'sad'], correct: 'amusing' },
          { id: 'syn-l1-9', sentence: 'It\'s an ____ (old) story.', options: ['new', 'ancient', 'modern'], correct: 'ancient' },
          { id: 'syn-l1-10', sentence: 'She is a ____ (kind) person.', options: ['nice', 'mean', 'cruel'], correct: 'nice' },
        ],
        level2: [
          { id: 'syn-l2-1', sentence: 'The weather is ____ (pleasant).', options: ['agreeable', 'nasty', 'foul'], correct: 'agreeable' },
          { id: 'syn-l2-2', sentence: 'He felt ____ (exhausted) after the long run.', options: ['weary', 'energetic', 'refreshed'], correct: 'weary' },
          { id: 'syn-l2-3', sentence: 'The problem was ____ (difficult) to solve.', options: ['challenging', 'simple', 'easy'], correct: 'challenging' },
          { id: 'syn-l2-4', sentence: 'She gave a ____ (brief) explanation.', options: ['concise', 'lengthy', 'detailed'], correct: 'concise' },
          { id: 'syn-l2-5', sentence: 'The view from the mountain was ____ (amazing).', options: ['breathtaking', 'ordinary', 'dull'], correct: 'breathtaking' },
          { id: 'syn-l2-6', sentence: 'He is known for his ____ (generous) nature.', options: ['magnanimous', 'selfish', 'stingy'], correct: 'magnanimous' },
          { id: 'syn-l2-7', sentence: 'The room was ____ (tidy).', options: ['neat', 'messy', 'cluttered'], correct: 'neat' },
          { id: 'syn-l2-8', sentence: 'She has a ____ (strong) desire to succeed.', options: ['potent', 'feeble', 'weak'], correct: 'potent' },
          { id: 'syn-l2-9', sentence: 'The task was ____ (simple).', options: ['uncomplicated', 'complex', 'intricate'], correct: 'uncomplicated' },
          { id: 'syn-l2-10', sentence: 'He is a ____ (reliable) friend.', options: ['dependable', 'untrustworthy', 'fickle'], correct: 'dependable' },
        ],
        level3: [
          { id: 'syn-l3-1', sentence: 'The evidence was ____ (abundant).', options: ['plentiful', 'scarce', 'meager'], correct: 'plentiful' },
          { id: 'syn-l3-2', sentence: 'Her comments were rather ____ (ambiguous).', options: ['equivocal', 'clear', 'explicit'], correct: 'equivocal' },
          { id: 'syn-l3-3', sentence: 'He showed ____ (bravery) in the face of danger.', options: ['valor', 'cowardice', 'timidity'], correct: 'valor' },
          { id: 'syn-l3-4', sentence: 'The judge\'s decision was ____ (impartial).', options: ['unbiased', 'prejudiced', 'partisan'], correct: 'unbiased' },
          { id: 'syn-l3-5', sentence: 'She has a ____ (keen) interest in art.', options: ['fervent', 'apathetic', 'indifferent'], correct: 'fervent' },
          { id: 'syn-l3-6', sentence: 'His explanation was ____ (lucid).', options: ['coherent', 'obscure', 'confusing'], correct: 'coherent' },
          { id: 'syn-l3-7', sentence: 'The politician gave an ____ (evasive) answer.', options: ['elusive', 'direct', 'straightforward'], correct: 'elusive' },
          { id: 'syn-l3-8', sentence: 'She is known for her ____ (meticulous) attention to detail.', options: ['scrupulous', 'careless', 'sloppy'], correct: 'scrupulous' },
          { id: 'syn-l3-9', sentence: 'He has a ____ (superficial) understanding of the topic.', options: ['cursory', 'profound', 'thorough'], correct: 'cursory' },
          { id: 'syn-l3-10', sentence: 'The atmosphere in the room was ____ (tense).', options: ['strained', 'relaxed', 'calm'], correct: 'strained' },
        ],
      },
      'vocabulary-antonyms': {
        level1: [
          { id: 'ant-l1-1', sentence: 'The opposite of hot is ____.', options: ['warm', 'cold', 'cool'], correct: 'cold' },
          { id: 'ant-l1-2', sentence: 'The opposite of big is ____.', options: ['small', 'large', 'huge'], correct: 'small' },
          { id: 'ant-l1-3', sentence: 'The opposite of fast is ____.', options: ['quick', 'rapid', 'slow'], correct: 'slow' },
          { id: 'ant-l1-4', sentence: 'The opposite of happy is ____.', options: ['sad', 'glad', 'joyful'], correct: 'sad' },
          { id: 'ant-l1-5', sentence: 'The opposite of old is ____.', options: ['ancient', 'aged', 'new'], correct: 'new' },
          { id: 'ant-l1-6', sentence: 'The opposite of light is ____.', options: ['dark', 'bright', 'shiny'], correct: 'dark' },
          { id: 'ant-l1-7', sentence: 'The opposite of easy is ____.', options: ['simple', 'difficult', 'hard'], correct: 'difficult' },
          { id: 'ant-l1-8', sentence: 'The opposite of good is ____.', options: ['bad', 'nice', 'fine'], correct: 'bad' },
          { id: 'ant-l1-9', sentence: 'The opposite of rich is ____.', options: ['wealthy', 'affluent', 'poor'], correct: 'poor' },
          { id: 'ant-l1-10', sentence: 'The opposite of empty is ____.', options: ['full', 'vacant', 'bare'], correct: 'full' },
        ],
        level2: [
          { id: 'ant-l2-1', sentence: 'The opposite of brave is ____.', options: ['courageous', 'fearless', 'cowardly'], correct: 'cowardly' },
          { id: 'ant-l2-2', sentence: 'The opposite of generous is ____.', options: ['selfish', 'kind', 'giving'], correct: 'selfish' },
          { id: 'ant-l2-3', sentence: 'The opposite of polite is ____.', options: ['rude', 'courteous', 'respectful'], correct: 'rude' },
          { id: 'ant-l2-4', sentence: 'The opposite of beautiful is ____.', options: ['pretty', 'lovely', 'ugly'], correct: 'ugly' },
          { id: 'ant-l2-5', sentence: 'The opposite of strong is ____.', options: ['powerful', 'mighty', 'weak'], correct: 'weak' },
          { id: 'ant-l2-6', sentence: 'The opposite of wise is ____.', options: ['foolish', 'intelligent', 'smart'], correct: 'foolish' },
          { id: 'ant-l2-7', sentence: 'The opposite of patient is ____.', options: ['calm', 'tolerant', 'impatient'], correct: 'impatient' },
          { id: 'ant-l2-8', sentence: 'The opposite of honest is ____.', options: ['truthful', 'sincere', 'dishonest'], correct: 'dishonest' },
          { id: 'ant-l2-9', sentence: 'The opposite of simple is ____.', options: ['easy', 'uncomplicated', 'complex'], correct: 'complex' },
          { id: 'ant-l2-10', sentence: 'The opposite of quiet is ____.', options: ['silent', 'peaceful', 'noisy'], correct: 'noisy' },
        ],
        level3: [
          { id: 'ant-l3-1', sentence: 'The opposite of abundant is ____.', options: ['plentiful', 'ample', 'scarce'], correct: 'scarce' },
          { id: 'ant-l3-2', sentence: 'The opposite of temporary is ____.', options: ['permanent', 'brief', 'short-term'], correct: 'permanent' },
          { id: 'ant-l3-3', sentence: 'The opposite of voluntary is ____.', options: ['compulsory', 'optional', 'willing'], correct: 'compulsory' },
          { id: 'ant-l3-4', sentence: 'The opposite of transparent is ____.', options: ['clear', 'see-through', 'opaque'], correct: 'opaque' },
          { id: 'ant-l3-5', sentence: 'The opposite of optimistic is ____.', options: ['pessimistic', 'hopeful', 'positive'], correct: 'pessimistic' },
          { id: 'ant-l3-6', sentence: 'The opposite of ancient is ____.', options: ['old', 'aged', 'modern'], correct: 'modern' },
          { id: 'ant-l3-7', sentence: 'The opposite of expand is ____.', options: ['contract', 'enlarge', 'grow'], correct: 'contract' },
          { id: 'ant-l3-8', sentence: 'The opposite of success is ____.', options: ['failure', 'achievement', 'triumph'], correct: 'failure' },
          { id: 'ant-l3-9', sentence: 'The opposite of superior is ____.', options: ['inferior', 'better', 'higher'], correct: 'inferior' },
          { id: 'ant-l3-10', sentence: 'The opposite of cautious is ____.', options: ['reckless', 'careful', 'prudent'], correct: 'reckless' },
        ],
      },
      'vocabulary-irregular-verbs-1-past': generateIrregularVerbExercises(verbLists.past1, 'past simple', 'viv1p'),
      'vocabulary-irregular-verbs-2-past': generateIrregularVerbExercises(verbLists.past2, 'past simple', 'viv2p'),
      'vocabulary-irregular-verbs-3-past': generateIrregularVerbExercises(verbLists.past3, 'past simple', 'viv3p'),
      'vocabulary-irregular-verbs-4-participle': generateIrregularVerbExercises(verbLists.participle1, 'participle', 'viv4pp'),
      'vocabulary-irregular-verbs-5-participle': generateIrregularVerbExercises(verbLists.participle2, 'participle', 'viv5pp'),
      'vocabulary-irregular-verbs-6-participle': generateIrregularVerbExercises(verbLists.participle3, 'participle', 'viv6pp'),
      'vocabulary-nouns-1': generateNewVocabularyExercises(newVocabularyData.nouns1, 'vnoun1'),
      'vocabulary-nouns-2': generateNewVocabularyExercises(newVocabularyData.nouns2, 'vnoun2'),
      'vocabulary-nouns-3': generateNewVocabularyExercises(newVocabularyData.nouns3, 'vnoun3'),
      'vocabulary-adjectives-1': generateNewVocabularyExercises(newVocabularyData.adjectives1, 'vadj1'),
      'vocabulary-adjectives-2': generateNewVocabularyExercises(newVocabularyData.adjectives2, 'vadj2'),
      'vocabulary-adjectives-3': generateNewVocabularyExercises(newVocabularyData.adjectives3, 'vadj3'),
      'vocabulary-verbs-1': generateNewVocabularyExercises(newVocabularyData.verbs1, 'vverb1'),
      'vocabulary-verbs-2': generateNewVocabularyExercises(newVocabularyData.verbs2, 'vverb2'),
      'vocabulary-verbs-3': generateNewVocabularyExercises(newVocabularyData.verbs3, 'vverb3'),
    };

    export const vocabularyExercises = {};
    for (const topic in originalVocabularyExercises) {
      vocabularyExercises[topic] = processTopic(originalVocabularyExercises[topic]);
    }
  