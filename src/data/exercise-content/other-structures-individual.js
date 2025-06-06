
    import { generateDefaultLevel, generateDefaultTopicExercises } from '@/data/exercise-helpers';
    import { shuffleArray, distributeCorrectAnswers } from '@/lib/utils';

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
    
    const phrasalVerbsBasicData = {
      level1: [
        { id: 'pvb-l1-1', sentence: 'Please ____ your shoes before entering.', options: ['take off', 'take on', 'take in'], correct: 'take off' },
        { id: 'pvb-l1-2', sentence: 'Can you ____ the music a bit? It\'s too loud.', options: ['turn down', 'turn up', 'turn off'], correct: 'turn down' },
        { id: 'pvb-l1-3', sentence: 'She needs to ____ her alarm for 6 AM.', options: ['set up', 'set off', 'set on'], correct: 'set up' },
        { id: 'pvb-l1-4', sentence: 'I need to ____ some information online.', options: ['look for', 'look up', 'look at'], correct: 'look up' },
        { id: 'pvb-l1-5', sentence: 'Don\'t ____ trying, you can do it!', options: ['give away', 'give in', 'give up'], correct: 'give up' },
        { id: 'pvb-l1-6', sentence: 'We decided to ____ the party until next week.', options: ['put on', 'put off', 'put up'], correct: 'put off' },
        { id: 'pvb-l1-7', sentence: 'He had to ____ his old car because it was too expensive to repair.', options: ['get rid of', 'get on with', 'get over'], correct: 'get rid of' },
        { id: 'pvb-l1-8', sentence: 'Could you ____ this form, please?', options: ['fill up', 'fill out', 'fill in'], correct: 'fill in' }, 
        { id: 'pvb-l1-9', sentence: 'I always ____ my grandparents on Sundays.', options: ['call on', 'call off', 'call for'], correct: 'call on' },
        { id: 'pvb-l1-10', sentence: 'It\'s cold. You should ____ a jacket.', options: ['put off', 'put on', 'put in'], correct: 'put on' },
      ],
      level2: [
        { id: 'pvb-l2-1', sentence: 'My car ____ on the way to work this morning.', options: ['broke down', 'broke up', 'broke into'], correct: 'broke down' },
        { id: 'pvb-l2-2', sentence: 'You should ____ smoking; it\'s bad for your health.', options: ['give up', 'give in', 'give away'], correct: 'give up' },
        { id: 'pvb-l2-3', sentence: 'We need to ____ early tomorrow for our flight.', options: ['set off', 'set up', 'set back'], correct: 'set off' },
        { id: 'pvb-l2-4', sentence: 'I can\'t ____ what he\'s saying with all this noise.', options: ['make out', 'make up', 'make for'], correct: 'make out' },
        { id: 'pvb-l2-5', sentence: 'She ____ her sister; they are very similar.', options: ['takes after', 'takes off', 'takes on'], correct: 'takes after' },
        { id: 'pvb-l2-6', sentence: 'He decided to ____ a new hobby.', options: ['take up', 'take in', 'take over'], correct: 'take up' },
        { id: 'pvb-l2-7', sentence: 'I\'ll ____ you ____ at the station at 7 PM.', options: ['pick / up', 'drop / off', 'let / down'], correct: 'pick / up' },
        { id: 'pvb-l2-8', sentence: 'Can you ____ the volume? I can\'t hear it.', options: ['turn up', 'turn down', 'turn off'], correct: 'turn up' },
        { id: 'pvb-l2-9', sentence: 'Don\'t forget to ____ the lights when you leave.', options: ['turn off', 'turn on', 'turn down'], correct: 'turn off' },
        { id: 'pvb-l2-10', sentence: 'We need to ____ before we run out of petrol.', options: ['fill up', 'fill in', 'fill out'], correct: 'fill up' },
      ],
      level3: [
        { id: 'pvb-l3-1', sentence: 'She had to ____ the meeting because she was ill.', options: ['call off', 'call on', 'call for'], correct: 'call off' },
        { id: 'pvb-l3-2', sentence: 'It\'s important to ____ your colleagues.', options: ['get along with', 'get away with', 'get by with'], correct: 'get along with' },
        { id: 'pvb-l3-3', sentence: 'He needs to ____ his spending if he wants to save money.', options: ['cut down on', 'cut off', 'cut out'], correct: 'cut down on' },
        { id: 'pvb-l3-4', sentence: 'I ____ an old photo of my grandparents yesterday.', options: ['came across', 'came into', 'came up with'], correct: 'came across' },
        { id: 'pvb-l3-5', sentence: 'She ____ a brilliant idea for the project.', options: ['came up with', 'came over', 'came about'], correct: 'came up with' },
        { id: 'pvb-l3-6', sentence: 'They decided to ____ their wedding until next year.', options: ['put off', 'put on', 'put up with'], correct: 'put off' },
        { id: 'pvb-l3-7', sentence: 'He couldn\'t ____ the courage to ask her out.', options: ['work up', 'work out', 'work on'], correct: 'work up' },
        { id: 'pvb-l3-8', sentence: 'We ____ of milk, so I need to go to the shop.', options: ['ran out', 'ran into', 'ran over'], correct: 'ran out' },
        { id: 'pvb-l3-9', sentence: 'Can you help me ____ these boxes?', options: ['sort out', 'sort through', 'sort by'], correct: 'sort out' },
        { id: 'pvb-l3-10', sentence: 'I promise I won\'t ____ you ____.', options: ['let / down', 'let / in', 'let / off'], correct: 'let / down' },
      ],
    };
    export const phrasalVerbsBasicExercises = processTopic(phrasalVerbsBasicData);

    const phrasalVerbsIntermediateData = {
      level1: [
        { id: 'pvi-l1-1', sentence: 'She ____ the meeting until next week.', options: ['put off', 'put on', 'put up'], correct: 'put off' },
        { id: 'pvi-l1-2', sentence: 'It took him a long time to ____ the flu.', options: ['get on', 'get over', 'get through'], correct: 'get over' },
        { id: 'pvi-l1-3', sentence: 'We need to ____ a solution to this problem.', options: ['come up with', 'come across', 'come into'], correct: 'come up with' },
        { id: 'pvi-l1-4', sentence: 'I accidentally ____ an old friend at the supermarket.', options: ['ran over', 'ran into', 'ran out of'], correct: 'ran into' },
        { id: 'pvi-l1-5', sentence: 'He promised to ____ the matter immediately.', options: ['look into', 'look up to', 'look down on'], correct: 'look into' },
        { id: 'pvi-l1-6', sentence: 'She had to ____ her children by herself.', options: ['bring up', 'bring about', 'bring back'], correct: 'bring up' },
        { id: 'pvi-l1-7', sentence: 'The company decided to ____ a new product.', options: ['bring out', 'bring in', 'bring down'], correct: 'bring out' },
        { id: 'pvi-l1-8', sentence: 'Can you ____ me ____ at the airport tomorrow morning?', options: ['drop / off', 'pick / up', 'see / off'], correct: 'pick / up' },
        { id: 'pvi-l1-9', sentence: 'I can\'t ____ this noise anymore!', options: ['put up with', 'put down to', 'put forward'], correct: 'put up with' },
        { id: 'pvi-l1-10', sentence: 'The new law will ____ next month.', options: ['come into force', 'come about', 'come round'], correct: 'come into force' },
      ],
      level2: [
        { id: 'pvi-l2-1', sentence: 'He tried to ____ his responsibilities, but he couldn\'t.', options: ['shirk off', 'get out of', 'bail out on'], correct: 'get out of' },
        { id: 'pvi-l2-2', sentence: 'The argument ____ a misunderstanding.', options: ['stemmed from', 'led to', 'resulted in'], correct: 'stemmed from' },
        { id: 'pvi-l2-3', sentence: 'She needs to ____ her ideas more clearly.', options: ['get across', 'put forward', 'convey to'], correct: 'get across' },
        { id: 'pvi-l2-4', sentence: 'They had to ____ the old building to make way for a new one.', options: ['tear down', 'knock over', 'pull apart'], correct: 'tear down' },
        { id: 'pvi-l2-5', sentence: 'I need to ____ on my sugar intake.', options: ['cut back', 'reduce down', 'lessen up'], correct: 'cut back' },
        { id: 'pvi-l2-6', sentence: 'He couldn\'t ____ the temptation to eat the cake.', options: ['fight off', 'resist against', 'ward off'], correct: 'fight off' },
        { id: 'pvi-l2-7', sentence: 'The project ____ because of a lack of funding.', options: ['fell through', 'dropped out', 'came apart'], correct: 'fell through' },
        { id: 'pvi-l2-8', sentence: 'She managed to ____ the difficult situation.', options: ['pull through', 'get by', 'scrape through'], correct: 'pull through' },
        { id: 'pvi-l2-9', sentence: 'We should ____ for dinner sometime.', options: ['get together', 'meet up', 'convene at'], correct: 'get together' },
        { id: 'pvi-l2-10', sentence: 'He always ____ his older brother for advice.', options: ['looks up to', 'admires at', 'respects towards'], correct: 'looks up to' },
      ],
      level3: [
        { id: 'pvi-l3-1', sentence: 'The government plans to ____ new legislation to tackle climate change.', options: ['bring in', 'introduce about', 'put forth'], correct: 'bring in' },
        { id: 'pvi-l3-2', sentence: 'It\'s difficult to ____ the exact meaning of this ancient text.', options: ['make out', 'decipher from', 'figure from'], correct: 'make out' },
        { id: 'pvi-l3-3', sentence: 'She had to ____ a lot of opposition to achieve her goals.', options: ['contend with', 'face up against', 'struggle towards'], correct: 'contend with' },
        { id: 'pvi-l3-4', sentence: 'He tried to ____ as an expert, but we knew he wasn\'t.', options: ['pass himself off', 'pretend himself for', 'masquerade for'], correct: 'pass himself off' },
        { id: 'pvi-l3-5', sentence: 'The company is trying to ____ its losses from last year.', options: ['make up for', 'compensate towards', 'rectify against'], correct: 'make up for' },
        { id: 'pvi-l3-6', sentence: 'We need to ____ all the details before we make a decision.', options: ['iron out', 'smooth over', 'resolve through'], correct: 'iron out' },
        { id: 'pvi-l3-7', sentence: 'She decided to ____ her own business after years of working for others.', options: ['set up', 'establish for', 'found towards'], correct: 'set up' },
        { id: 'pvi-l3-8', sentence: 'He tends to ____ when he\'s nervous.', options: ['clam up', 'quiet down', 'hush about'], correct: 'clam up' },
        { id: 'pvi-l3-9', sentence: 'The negotiations ____ due to irreconcilable differences.', options: ['broke down', 'fell apart', 'collapsed in'], correct: 'broke down' },
        { id: 'pvi-l3-10', sentence: 'I need to ____ my notes before the exam.', options: ['go over', 'review through', 'check upon'], correct: 'go over' },
      ],
    };
    export const phrasalVerbsIntermediateExercises = processTopic(phrasalVerbsIntermediateData);

    const phrasalVerbsAdvancedData = {
      level1: [
        { id: 'pva-l1-1', sentence: 'The new manager needs to ____ the team quickly.', options: ['win over', 'convince to', 'persuade towards'], correct: 'win over' },
        { id: 'pva-l1-2', sentence: 'He tried to ____ the blame onto his colleagues.', options: ['shift onto', 'pass to', 'deflect towards'], correct: 'shift onto' },
        { id: 'pva-l1-3', sentence: 'The company had to ____ its operations due to the recession.', options: ['scale down', 'reduce from', 'lessen towards'], correct: 'scale down' },
        { id: 'pva-l1-4', sentence: 'She ____ a small fortune when her aunt passed away.', options: ['came into', 'inherited from', 'received by'], correct: 'came into' },
        { id: 'pva-l1-5', sentence: 'They decided to ____ their differences and work together.', options: ['put aside', 'ignore from', 'disregard towards'], correct: 'put aside' },
        { id: 'pva-l1-6', sentence: 'He couldn\'t ____ the feeling that something was wrong.', options: ['shake off', 'get rid from', 'dispel towards'], correct: 'shake off' },
        { id: 'pva-l1-7', sentence: 'The government is trying to ____ tax evasion.', options: ['crack down on', 'suppress from', 'repress towards'], correct: 'crack down on' },
        { id: 'pva-l1-8', sentence: 'She had to ____ her pride and apologize.', options: ['swallow down', 'suppress from', 'hold back by'], correct: 'swallow down' },
        { id: 'pva-l1-9', sentence: 'We need to ____ the pros and cons before making a decision.', options: ['weigh up', 'consider from', 'evaluate towards'], correct: 'weigh up' },
        { id: 'pva-l1-10', sentence: 'The rebels tried to ____ the government.', options: ['overthrow from', 'topple by', 'bring down'], correct: 'bring down' },
      ],
      level2: [
        { id: 'pva-l2-1', sentence: 'The detective tried to ____ the truth from the suspect.', options: ['elicit from', 'extract by', 'draw out of'], correct: 'elicit from' },
        { id: 'pva-l2-2', sentence: 'She decided to ____ her studies after a long break.', options: ['take up again', 'resume from', 'recommence by'], correct: 'take up again' },
        { id: 'pva-l2-3', sentence: 'The company is planning to ____ into new markets.', options: ['branch out', 'expand from', 'diversify by'], correct: 'branch out' },
        { id: 'pva-l2-4', sentence: 'He had to ____ his anger and remain calm.', options: ['bottle up', 'contain from', 'restrain by'], correct: 'bottle up' },
        { id: 'pva-l2-5', sentence: 'They ____ a plan to escape from the prison.', options: ['hatched up', 'concocted from', 'devised by'], correct: 'hatched up' },
        { id: 'pva-l2-6', sentence: 'She tried to ____ favor with her boss by complimenting him.', options: ['curry with', 'ingratiate by', 'flatter towards'], correct: 'curry with' },
        { id: 'pva-l2-7', sentence: 'The old traditions are beginning to ____ as society changes.', options: ['die out', 'fade from', 'disappear by'], correct: 'die out' },
        { id: 'pva-l2-8', sentence: 'He couldn\'t ____ the urge to check his phone.', options: ['fend off', 'resist from', 'repel by'], correct: 'fend off' },
        { id: 'pva-l2-9', sentence: 'The politician had to ____ his controversial remarks.', options: ['backtrack on', 'retract from', 'withdraw by'], correct: 'backtrack on' },
        { id: 'pva-l2-10', sentence: 'We need to ____ our efforts if we want to succeed.', options: ['step up', 'increase from', 'amplify by'], correct: 'step up' },
      ],
      level3: [
        { id: 'pva-l3-1', sentence: 'The company had to ____ a significant amount of money for the new project.', options: ['fork out', 'shell over', 'disburse to'], correct: 'fork out' },
        { id: 'pva-l3-2', sentence: 'She tried to ____ her shyness and speak in public.', options: ['cast off', 'shed from', 'discard by'], correct: 'cast off' },
        { id: 'pva-l3-3', sentence: 'He managed to ____ a deal with the rival company.', options: ['hammer out', 'negotiate from', 'broker by'], correct: 'hammer out' },
        { id: 'pva-l3-4', sentence: 'The rebels were urged to ____ their arms and surrender.', options: ['lay down', 'relinquish from', 'yield by'], correct: 'lay down' },
        { id: 'pva-l3-5', sentence: 'They ____ against the unfair treatment they received.', options: ['lashed out', 'retaliated from', 'struck by'], correct: 'lashed out' },
        { id: 'pva-l3-6', sentence: 'She had to ____ her knowledge of history for the quiz.', options: ['draw upon', 'utilize from', 'access by'], correct: 'draw upon' },
        { id: 'pva-l3-7', sentence: 'The government is trying to ____ the economic crisis.', options: ['paper over', 'conceal from', 'mask by'], correct: 'paper over' },
        { id: 'pva-l3-8', sentence: 'He decided to ____ his own path instead of following his parents\' wishes.', options: ['strike out on', 'venture from', 'embark by'], correct: 'strike out on' },
        { id: 'pva-l3-9', sentence: 'We need to ____ the problem from all angles before finding a solution.', options: ['thrash out', 'discuss from', 'debate by'], correct: 'thrash out' },
        { id: 'pva-l3-10', sentence: 'The company plans to ____ its new product next month with a big marketing campaign.', options: ['roll out', 'launch from', 'introduce by'], correct: 'roll out' },
      ],
    };
    export const phrasalVerbsAdvancedExercises = processTopic(phrasalVerbsAdvancedData);

    const relativeClausesData = {
      level1: [
        { id: 'rc-l1-1', sentence: 'This is the house ____ I was born.', options: ['when', 'where', 'who'], correct: 'where' },
        { id: 'rc-l1-2', sentence: 'The woman ____ lives next door is a doctor.', options: ['which', 'who', 'whose'], correct: 'who' },
        { id: 'rc-l1-3', sentence: 'I remember the day ____ we first met.', options: ['when', 'where', 'that'], correct: 'when' },
        { id: 'rc-l1-4', sentence: 'The book ____ I am reading is very interesting.', options: ['who', 'which', 'whose'], correct: 'which' },
        { id: 'rc-l1-5', sentence: 'He is the man ____ car was stolen.', options: ['whose', 'who', 'which'], correct: 'whose' },
        { id: 'rc-l1-6', sentence: 'That\'s the restaurant ____ we had dinner last night.', options: ['which', 'where', 'when'], correct: 'where' },
        { id: 'rc-l1-7', sentence: 'She showed me the photos ____ she took on holiday.', options: ['who', 'which', 'whose'], correct: 'which' },
        { id: 'rc-l1-8', sentence: 'Do you know the reason ____ he is late?', options: ['why', 'when', 'where'], correct: 'why' },
        { id: 'rc-l1-9', sentence: 'The students ____ passed the exam were very happy.', options: ['who', 'which', 'whose'], correct: 'who' },
        { id: 'rc-l1-10', sentence: 'This is the key ____ opens the front door.', options: ['that', 'who', 'which'], correct: 'that' }, 
      ],
      level2: [
        { id: 'rc-l2-1', sentence: 'The movie, ____ was directed by Spielberg, won several awards.', options: ['which', 'who', 'that'], correct: 'which' },
        { id: 'rc-l2-2', sentence: 'My friend, ____ father is a lawyer, gave me some advice.', options: ['whose', 'who', 'which'], correct: 'whose' },
        { id: 'rc-l2-3', sentence: 'I visited the town ____ my grandparents used to live.', options: ['where', 'when', 'which'], correct: 'where' },
        { id: 'rc-l2-4', sentence: 'The reason ____ I called you is to invite you to my party.', options: ['why', 'that', 'which'], correct: 'why' },
        { id: 'rc-l2-5', sentence: 'The cake ____ she baked was delicious.', options: ['that', 'who', 'whose'], correct: 'that' },
        { id: 'rc-l2-6', sentence: 'This is the park ____ we often play football.', options: ['where', 'which', 'when'], correct: 'where' },
        { id: 'rc-l2-7', sentence: 'The people ____ work in this company are very friendly.', options: ['who', 'which', 'whose'], correct: 'who' },
        { id: 'rc-l2-8', sentence: 'I\'ll never forget the moment ____ I first saw her.', options: ['when', 'where', 'that'], correct: 'when' },
        { id: 'rc-l2-9', sentence: 'The car, ____ was very expensive, broke down after a week.', options: ['which', 'that', 'who'], correct: 'which' },
        { id: 'rc-l2-10', sentence: 'The man ____ I was talking to is my boss.', options: ['who', 'whom', 'whose'], correct: 'whom' },
      ],
      level3: [
        { id: 'rc-l3-1', sentence: 'The project, ____ we have been working on for months, is finally complete.', options: ['which', 'that', 'who'], correct: 'which' },
        { id: 'rc-l3-2', sentence: 'The author, ____ books have sold millions, is giving a talk tonight.', options: ['whose', 'who', 'whom'], correct: 'whose' },
        { id: 'rc-l3-3', sentence: 'The city ____ I spent my childhood has changed a lot.', options: ['where', 'in which', 'which'], correct: 'in which' },
        { id: 'rc-l3-4', sentence: 'The only reason ____ she left early was because she felt unwell.', options: ['why', 'that', 'for which'], correct: 'why' },
        { id: 'rc-l3-5', sentence: 'The employees ____ the company relies heavily are demanding a pay raise.', options: ['on whom', 'who', 'whose'], correct: 'on whom' },
        { id: 'rc-l3-6', sentence: 'This is the museum ____ Picasso\'s Guernica is exhibited.', options: ['where', 'which', 'that'], correct: 'where' },
        { id: 'rc-l3-7', sentence: 'The problem, ____ solution is not immediately obvious, requires careful consideration.', options: ['whose', 'which', 'that'], correct: 'whose' },
        { id: 'rc-l3-8', sentence: 'He remembers the time ____ he first learned to ride a bike as if it were yesterday.', options: ['when', 'at which', 'that'], correct: 'when' },
        { id: 'rc-l3-9', sentence: 'The documentary, ____ explores the effects of climate change, was very thought-provoking.', options: ['which', 'that', 'who'], correct: 'which' },
        { id: 'rc-l3-10', sentence: 'The person to ____ I addressed the letter no longer lives there.', options: ['whom', 'who', 'that'], correct: 'whom' },
      ],
    };
    export const relativeClausesExercises = processTopic(relativeClausesData);

    const gerundsInfinitivesData = {
      level1: [
        { id: 'gi-l1-1', sentence: 'I enjoy ____ basketball.', options: ['playing', 'to play', 'played'], correct: 'playing' },
        { id: 'gi-l1-2', sentence: 'She decided ____ a new car.', options: ['buy', 'to buy', 'buying'], correct: 'to buy' },
        { id: 'gi-l1-3', sentence: 'He is good at ____ languages.', options: ['learning', 'to learn', 'learn'], correct: 'learning' },
        { id: 'gi-l1-4', sentence: 'They promised ____ us.', options: ['help', 'helping', 'to help'], correct: 'to help' },
        { id: 'gi-l1-5', sentence: '____ (swim) is a good exercise.', options: ['Swimming', 'To swim', 'Swim'], correct: 'Swimming' },
        { id: 'gi-l1-6', sentence: 'I want ____ abroad next year.', options: ['to travel', 'travelling', 'travel'], correct: 'to travel' },
        { id: 'gi-l1-7', sentence: 'She avoided ____ to him about the problem.', options: ['talking', 'to talk', 'talk'], correct: 'talking' },
        { id: 'gi-l1-8', sentence: 'He offered ____ me with my homework.', options: ['help', 'to help', 'helping'], correct: 'to help' },
        { id: 'gi-l1-9', sentence: 'We are looking forward to ____ you soon.', options: ['seeing', 'see', 'to see'], correct: 'seeing' },
        { id: 'gi-l1-10', sentence: 'It\'s important ____ your best.', options: ['to do', 'doing', 'do'], correct: 'to do' },
      ],
      level2: [
        { id: 'gi-l2-1', sentence: 'He suggested ____ to the cinema tonight.', options: ['going', 'to go', 'go'], correct: 'going' },
        { id: 'gi-l2-2', sentence: 'I can\'t stand ____ in long queues.', options: ['to wait', 'waiting', 'wait'], correct: 'waiting' },
        { id: 'gi-l2-3', sentence: 'She managed ____ the difficult exam.', options: ['to pass', 'passing', 'pass'], correct: 'to pass' },
        { id: 'gi-l2-4', sentence: 'They are considering ____ to a new city.', options: ['to move', 'moving', 'move'], correct: 'moving' },
        { id: 'gi-l2-5', sentence: 'It\'s no use ____ about the past.', options: ['to worry', 'worrying', 'worry'], correct: 'worrying' },
        { id: 'gi-l2-6', sentence: 'He refused ____ her apology.', options: ['to accept', 'accepting', 'accept'], correct: 'to accept' },
        { id: 'gi-l2-7', sentence: 'I don\'t mind ____ you with your project.', options: ['to help', 'helping', 'help'], correct: 'helping' },
        { id: 'gi-l2-8', sentence: 'She is planning ____ her own business.', options: ['to start', 'starting', 'start'], correct: 'to start' },
        { id: 'gi-l2-9', sentence: 'He keeps ____ the same mistake.', options: ['to make', 'making', 'make'], correct: 'making' },
        { id: 'gi-l2-10', sentence: 'It was difficult ____ a decision.', options: ['to make', 'making', 'make'], correct: 'to make' },
      ],
      level3: [
        { id: 'gi-l3-1', sentence: 'He admitted ____ the money from the safe.', options: ['to steal', 'stealing', 'stole'], correct: 'stealing' },
        { id: 'gi-l3-2', sentence: 'I regret ____ you that your application was unsuccessful.', options: ['to inform', 'informing', 'inform'], correct: 'to inform' },
        { id: 'gi-l3-3', sentence: 'She couldn\'t help ____ when she saw him trip.', options: ['laughing', 'to laugh', 'laugh'], correct: 'laughing' },
        { id: 'gi-l3-4', sentence: 'They went on ____ even after the teacher told them to stop.', options: ['talking', 'to talk', 'talk'], correct: 'talking' },
        { id: 'gi-l3-5', sentence: 'Remember ____ the door when you leave.', options: ['to lock', 'locking', 'lock'], correct: 'to lock' },
        { id: 'gi-l3-6', sentence: 'I remember ____ him for the first time at a conference.', options: ['meeting', 'to meet', 'met'], correct: 'meeting' },
        { id: 'gi-l3-7', sentence: 'He tried ____ the window, but it was stuck.', options: ['to open', 'opening', 'open'], correct: 'to open' },
        { id: 'gi-l3-8', sentence: 'Try ____ less sugar in your coffee; it\'s healthier.', options: ['using', 'to use', 'use'], correct: 'using' },
        { id: 'gi-l3-9', sentence: 'She stopped ____ a coffee on her way to work.', options: ['to get', 'getting', 'get'], correct: 'to get' },
        { id: 'gi-l3-10', sentence: 'He stopped ____ when the doctor advised him to.', options: ['smoking', 'to smoke', 'smoke'], correct: 'smoking' },
      ],
    };
    export const gerundsInfinitivesExercises = processTopic(gerundsInfinitivesData);

    const mixedInfinitivesData = {
      level1: [
        { id: 'mi-l1-1', sentence: 'I want ____ a new language.', options: ['to learn', 'learning', 'learn'], correct: 'to learn' },
        { id: 'mi-l1-2', sentence: 'She enjoys ____ books in her free time.', options: ['reading', 'to read', 'read'], correct: 'reading' },
        { id: 'mi-l1-3', sentence: 'He promised ____ me with my homework.', options: ['helping', 'to help', 'help'], correct: 'to help' },
        { id: 'mi-l1-4', sentence: 'They decided ____ to the beach for the weekend.', options: ['to go', 'going', 'go'], correct: 'to go' },
        { id: 'mi-l1-5', sentence: '____ (exercise) regularly is good for your health.', options: ['Exercising', 'To exercise', 'Exercise'], correct: 'Exercising' },
        { id: 'mi-l1-6', sentence: 'She is good at ____ the piano.', options: ['playing', 'to play', 'play'], correct: 'playing' },
        { id: 'mi-l1-7', sentence: 'He needs ____ some groceries from the store.', options: ['to buy', 'buying', 'buy'], correct: 'to buy' },
        { id: 'mi-l1-8', sentence: 'We are looking forward to ____ you again.', options: ['seeing', 'to see', 'see'], correct: 'seeing' },
        { id: 'mi-l1-9', sentence: 'It is important ____ polite to others.', options: ['to be', 'being', 'be'], correct: 'to be' },
        { id: 'mi-l1-10', sentence: 'He avoided ____ any questions about his past.', options: ['answering', 'to answer', 'answer'], correct: 'answering' },
      ],
      level2: [
        { id: 'mi-l2-1', sentence: 'She can\'t help ____ when she watches a sad movie.', options: ['crying', 'to cry', 'cry'], correct: 'crying' },
        { id: 'mi-l2-2', sentence: 'He managed ____ the problem on his own.', options: ['to solve', 'solving', 'solve'], correct: 'to solve' },
        { id: 'mi-l2-3', sentence: 'They are considering ____ to a different country.', options: ['moving', 'to move', 'move'], correct: 'moving' },
        { id: 'mi-l2-4', sentence: 'I regret ____ you that your flight has been cancelled.', options: ['to inform', 'informing', 'inform'], correct: 'to inform' },
        { id: 'mi-l2-5', sentence: 'It\'s no use ____ over spilled milk.', options: ['crying', 'to cry', 'cry'], correct: 'crying' },
        { id: 'mi-l2-6', sentence: 'He suggested ____ a break for a few minutes.', options: ['taking', 'to take', 'take'], correct: 'taking' },
        { id: 'mi-l2-7', sentence: 'She is planning ____ a surprise party for her friend.', options: ['to organize', 'organizing', 'organize'], correct: 'to organize' },
        { id: 'mi-l2-8', sentence: 'I don\'t mind ____ if you want to stay longer.', options: ['waiting', 'to wait', 'wait'], correct: 'waiting' },
        { id: 'mi-l2-9', sentence: 'He keeps ____ the same mistake over and over again.', options: ['making', 'to make', 'make'], correct: 'making' },
        { id: 'mi-l2-10', sentence: 'It was difficult ____ them to agree on a solution.', options: ['to get', 'getting', 'get'], correct: 'to get' },
      ],
      level3: [
        { id: 'mi-l3-1', sentence: 'She was made ____ the entire report again.', options: ['to write', 'writing', 'write'], correct: 'to write' },
        { id: 'mi-l3-2', sentence: 'I would rather ____ at home than go out tonight.', options: ['stay', 'to stay', 'staying'], correct: 'stay' },
        { id: 'mi-l3-3', sentence: 'He let his children ____ up late on weekends.', options: ['stay', 'to stay', 'staying'], correct: 'stay' },
        { id: 'mi-l3-4', sentence: 'It\'s worth ____ that museum if you have time.', options: ['visiting', 'to visit', 'visit'], correct: 'visiting' },
        { id: 'mi-l3-5', sentence: 'They were busy ____ for the upcoming exams.', options: ['studying', 'to study', 'study'], correct: 'studying' },
        { id: 'mi-l3-6', sentence: 'She has difficulty ____ new people.', options: ['meeting', 'to meet', 'meet'], correct: 'meeting' },
        { id: 'mi-l3-7', sentence: 'He was heard ____ about his boss.', options: ['complaining', 'to complain', 'complain'], correct: 'complaining' },
        { id: 'mi-l3-8', sentence: 'I saw him ____ the street a few minutes ago.', options: ['cross', 'to cross', 'crossing'], correct: 'crossing' },
        { id: 'mi-l3-9', sentence: 'There is no point ____ about things you cannot change.', options: ['worrying', 'to worry', 'worry'], correct: 'worrying' },
        { id: 'mi-l3-10', sentence: 'She helped her mother ____ the dinner.', options: ['prepare', 'to prepare', '(to) prepare'], correct: '(to) prepare' },
      ],
    };
    export const mixedInfinitivesExercises = processTopic(mixedInfinitivesData);

    const articlesData = {
      level1: [
        { id: 'art-l1-1', sentence: 'I saw ____ elephant at the zoo.', options: ['the', 'an', 'a'], correct: 'an' },
        { id: 'art-l1-2', sentence: 'She is ____ doctor.', options: ['a', 'an', 'the'], correct: 'a' },
        { id: 'art-l1-3', sentence: 'Can you pass me ____ salt, please?', options: ['a', 'an', 'the'], correct: 'the' },
        { id: 'art-l1-4', sentence: 'He lives in ____ old house.', options: ['an', 'a', 'the'], correct: 'an' },
        { id: 'art-l1-5', sentence: '____ sun rises in the east.', options: ['A', 'An', 'The'], correct: 'The' },
        { id: 'art-l1-6', sentence: 'I need ____ new pair of shoes.', options: ['a', 'an', 'the'], correct: 'a' },
        { id: 'art-l1-7', sentence: 'Is there ____ university in this town?', options: ['a', 'an', 'the'], correct: 'a' }, 
        { id: 'art-l1-8', sentence: 'She bought ____ beautiful dress.', options: ['an', 'a', 'the'], correct: 'a' },
        { id: 'art-l1-9', sentence: 'Mount Everest is ____ highest mountain in the world.', options: ['a', 'an', 'the'], correct: 'the' },
        { id: 'art-l1-10', sentence: 'He is ____ honest man.', options: ['an', 'a', 'the'], correct: 'an' }, 
      ],
      level2: [
        { id: 'art-l2-1', sentence: 'She plays ____ piano beautifully.', options: ['a', 'an', 'the'], correct: 'the' },
        { id: 'art-l2-2', sentence: 'I usually have ____ breakfast at 8 AM.', options: ['a', 'an', 'no article'], correct: 'no article' },
        { id: 'art-l2-3', sentence: '____ life can be challenging sometimes.', options: ['A', 'The', 'No article'], correct: 'No article' },
        { id: 'art-l2-4', sentence: 'He is studying to become ____ engineer.', options: ['a', 'an', 'the'], correct: 'an' },
        { id: 'art-l2-5', sentence: 'We went to ____ cinema last night.', options: ['a', 'an', 'the'], correct: 'the' },
        { id: 'art-l2-6', sentence: 'She is ____ best student in her class.', options: ['a', 'an', 'the'], correct: 'the' },
        { id: 'art-l2-7', sentence: '____ dogs are loyal animals.', options: ['A', 'The', 'No article'], correct: 'No article' },
        { id: 'art-l2-8', sentence: 'I need to buy ____ milk from the store.', options: ['a', 'an', 'some'], correct: 'some' },
        { id: 'art-l2-9', sentence: 'He lives in ____ United Kingdom.', options: ['a', 'an', 'the'], correct: 'the' },
        { id: 'art-l2-10', sentence: 'She speaks ____ French fluently.', options: ['a', 'an', 'no article'], correct: 'no article' },
      ],
      level3: [
        { id: 'art-l3-1', sentence: '____ happiness is something everyone seeks.', options: ['A', 'The', 'No article'], correct: 'No article' },
        { id: 'art-l3-2', sentence: 'He was elected ____ president of the company.', options: ['a', 'the', 'no article'], correct: 'no article' },
        { id: 'art-l3-3', sentence: 'I have ____ appointment with Dr. Smith tomorrow.', options: ['a', 'an', 'the'], correct: 'an' },
        { id: 'art-l3-4', sentence: 'She gave me ____ piece of advice that was very helpful.', options: ['a', 'an', 'the'], correct: 'a' },
        { id: 'art-l3-5', sentence: '____ rich should help ____ poor.', options: ['The / the', 'A / a', 'No article / No article'], correct: 'The / the' },
        { id: 'art-l3-6', sentence: 'He plays ____ guitar in ____ band.', options: ['the / a', 'a / the', 'the / the'], correct: 'the / a' },
        { id: 'art-l3-7', sentence: 'We visited ____ Lake Victoria on our trip to Africa.', options: ['a', 'the', 'no article'], correct: 'no article' },
        { id: 'art-l3-8', sentence: '____ Chinese language is very difficult to learn.', options: ['A', 'The', 'No article'], correct: 'The' },
        { id: 'art-l3-9', sentence: 'She is suffering from ____ terrible headache.', options: ['a', 'an', 'the'], correct: 'a' },
        { id: 'art-l3-10', sentence: 'What ____ beautiful day it is!', options: ['a', 'an', 'the'], correct: 'a' },
      ],
    };
    export const articlesExercises = processTopic(articlesData);

    const quantifiersData = {
      level1: [
        { id: 'qnt-l1-1', sentence: 'She has ____ books in her bag.', options: ['many', 'much', 'a little'], correct: 'many' },
        { id: 'qnt-l1-2', sentence: 'There isn\'t ____ sugar left.', options: ['much', 'many', 'a few'], correct: 'much' },
        { id: 'qnt-l1-3', sentence: 'I have ____ friends in this city.', options: ['a few', 'a little', 'much'], correct: 'a few' },
        { id: 'qnt-l1-4', sentence: 'We need ____ milk for the recipe.', options: ['a little', 'a few', 'many'], correct: 'a little' },
        { id: 'qnt-l1-5', sentence: 'How ____ money do you have?', options: ['much', 'many', 'a few'], correct: 'much' },
        { id: 'qnt-l1-6', sentence: 'There are ____ apples in the basket.', options: ['many', 'much', 'a little'], correct: 'many' },
        { id: 'qnt-l1-7', sentence: 'He doesn\'t have ____ time today.', options: ['much', 'many', 'a few'], correct: 'much' },
        { id: 'qnt-l1-8', sentence: 'Could I have ____ water, please?', options: ['some', 'any', 'many'], correct: 'some' },
        { id: 'qnt-l1-9', sentence: 'There aren\'t ____ chairs in the room.', options: ['any', 'much', 'a little'], correct: 'any' },
        { id: 'qnt-l1-10', sentence: 'She speaks ____ English, but not fluently.', options: ['a little', 'a few', 'many'], correct: 'a little' },
      ],
      level2: [
        { id: 'qnt-l2-1', sentence: 'There are too ____ people in this room.', options: ['many', 'much', 'a lot of'], correct: 'many' },
        { id: 'qnt-l2-2', sentence: 'I don\'t have ____ patience for this.', options: ['much', 'many', 'any'], correct: 'much' },
        { id: 'qnt-l2-3', sentence: 'She has ____ interesting ideas.', options: ['a lot of', 'much', 'a little'], correct: 'a lot of' },
        { id: 'qnt-l2-4', sentence: 'There is ____ hope left for them.', options: ['little', 'few', 'many'], correct: 'little' },
        { id: 'qnt-l2-5', sentence: 'He knows ____ people who can help.', options: ['few', 'little', 'much'], correct: 'few' },
        { id: 'qnt-l2-6', sentence: 'We have ____ time, so we need to hurry.', options: ['little', 'few', 'many'], correct: 'little' },
        { id: 'qnt-l2-7', sentence: 'Can I have ____ more coffee, please?', options: ['some', 'any', 'much'], correct: 'some' },
        { id: 'qnt-l2-8', sentence: 'There isn\'t ____ information available about this topic.', options: ['much', 'many', 'a lot of'], correct: 'much' },
        { id: 'qnt-l2-9', sentence: 'She ate ____ biscuits for breakfast.', options: ['a few', 'a little', 'much'], correct: 'a few' },
        { id: 'qnt-l2-10', sentence: 'Do you have ____ brothers or sisters?', options: ['any', 'some', 'much'], correct: 'any' },
      ],
      level3: [
        { id: 'qnt-l3-1', sentence: 'Very ____ students passed the difficult exam.', options: ['few', 'little', 'a few'], correct: 'few' },
        { id: 'qnt-l3-2', sentence: 'She has ____ interest in politics.', options: ['little', 'few', 'a little'], correct: 'little' },
        { id: 'qnt-l3-3', sentence: 'There are ____ opportunities for young people in this town.', options: ['few', 'little', 'a few'], correct: 'few' },
        { id: 'qnt-l3-4', sentence: 'He made ____ progress on the project last week.', options: ['little', 'few', 'a little'], correct: 'little' },
        { id: 'qnt-l3-5', sentence: 'I need ____ of your time to discuss this matter.', options: ['a little', 'a few', 'much'], correct: 'a little' },
        { id: 'qnt-l3-6', sentence: 'There is hardly ____ traffic on the roads today.', options: ['any', 'some', 'much'], correct: 'any' },
        { id: 'qnt-l3-7', sentence: 'She has ____ patience with people who are rude.', options: ['no', 'any', 'some'], correct: 'no' },
        { id: 'qnt-l3-8', sentence: 'We have ____ than enough food for everyone.', options: ['more', 'many', 'much'], correct: 'more' },
        { id: 'qnt-l3-9', sentence: 'He spends ____ his free time reading books.', options: ['most of', 'many of', 'much of'], correct: 'most of' },
        { id: 'qnt-l3-10', sentence: '____ of the students in my class are from other countries.', options: ['Several', 'Much', 'Little'], correct: 'Several' },
      ],
    };
    export const quantifiersExercises = processTopic(quantifiersData);

    const quantifiersHowMuchManyData = {
      level1: [
        { id: 'qhm-l1-1', sentence: '____ apples are there in the basket?', options: ['How many', 'How much', 'How few'], correct: 'How many' },
        { id: 'qhm-l1-2', sentence: '____ sugar do you want in your coffee?', options: ['How much', 'How many', 'How little'], correct: 'How much' },
        { id: 'qhm-l1-3', sentence: '____ people came to the party last night?', options: ['How many', 'How much', 'How some'], correct: 'How many' },
        { id: 'qhm-l1-4', sentence: '____ time do we have before the train leaves?', options: ['How much', 'How many', 'How any'], correct: 'How much' },
        { id: 'qhm-l1-5', sentence: '____ money did you spend on that new phone?', options: ['How much', 'How many', 'How a lot of'], correct: 'How much' },
        { id: 'qhm-l1-6', sentence: '____ books have you read this month?', options: ['How many', 'How much', 'How little'], correct: 'How many' },
        { id: 'qhm-l1-7', sentence: '____ milk is left in the carton?', options: ['How much', 'How many', 'How few'], correct: 'How much' },
        { id: 'qhm-l1-8', sentence: '____ brothers and sisters do you have?', options: ['How many', 'How much', 'How some'], correct: 'How many' },
        { id: 'qhm-l1-9', sentence: '____ water should I add to the mixture?', options: ['How much', 'How many', 'How any'], correct: 'How much' },
        { id: 'qhm-l1-10', sentence: '____ chairs do we need for the meeting?', options: ['How many', 'How much', 'How a lot of'], correct: 'How many' },
      ],
      level2: [
        { id: 'qhm-l2-1', sentence: '____ information did you find on the internet?', options: ['How much', 'How many', 'How a few'], correct: 'How much' },
        { id: 'qhm-l2-2', sentence: '____ students are in your English class?', options: ['How many', 'How much', 'How a little'], correct: 'How many' },
        { id: 'qhm-l2-3', sentence: '____ luggage are you planning to take on your trip?', options: ['How much', 'How many', 'How some'], correct: 'How much' },
        { id: 'qhm-l2-4', sentence: '____ slices of pizza did you eat?', options: ['How many', 'How much', 'How any'], correct: 'How many' },
        { id: 'qhm-l2-5', sentence: '____ experience do you have in this field?', options: ['How much', 'How many', 'How a lot of'], correct: 'How much' },
        { id: 'qhm-l2-6', sentence: '____ countries have you visited so far?', options: ['How many', 'How much', 'How little'], correct: 'How many' },
        { id: 'qhm-l2-7', sentence: '____ furniture do you need for your new apartment?', options: ['How much', 'How many', 'How few'], correct: 'How much' },
        { id: 'qhm-l2-8', sentence: '____ times have you seen that movie?', options: ['How many', 'How much', 'How some'], correct: 'How many' },
        { id: 'qhm-l2-9', sentence: '____ rice is there in the cupboard?', options: ['How much', 'How many', 'How any'], correct: 'How much' },
        { id: 'qhm-l2-10', sentence: '____ photos did you take on your holiday?', options: ['How many', 'How much', 'How a lot of'], correct: 'How many' },
      ],
      level3: [
        { id: 'qhm-l3-1', sentence: '____ progress have you made on the report?', options: ['How much', 'How many', 'How a few'], correct: 'How much' },
        { id: 'qhm-l3-2', sentence: '____ pairs of shoes does she own?', options: ['How many', 'How much', 'How a little'], correct: 'How many' },
        { id: 'qhm-l3-3', sentence: '____ advice can you give me on this matter?', options: ['How much', 'How many', 'How some'], correct: 'How much' },
        { id: 'qhm-l3-4', sentence: '____ cups of coffee do you drink a day?', options: ['How many', 'How much', 'How any'], correct: 'How many' },
        { id: 'qhm-l3-5', sentence: '____ effort will it take to complete this task?', options: ['How much', 'How many', 'How a lot of'], correct: 'How much' },
        { id: 'qhm-l3-6', sentence: '____ languages can you speak fluently?', options: ['How many', 'How much', 'How little'], correct: 'How many' },
        { id: 'qhm-l3-7', sentence: '____ sleep did you get last night?', options: ['How much', 'How many', 'How few'], correct: 'How much' },
        { id: 'qhm-l3-8', sentence: '____ people attended the online webinar?', options: ['How many', 'How much', 'How some'], correct: 'How many' },
        { id: 'qhm-l3-9', sentence: '____ enthusiasm did he show for the new project?', options: ['How much', 'How many', 'How any'], correct: 'How much' },
        { id: 'qhm-l3-10', sentence: '____ different types of cheese are produced in France?', options: ['How many', 'How much', 'How a lot of'], correct: 'How many' },
      ],
    };
    export const quantifiersHowMuchManyExercises = processTopic(quantifiersHowMuchManyData);

    export const otherStructuresExercises = {
        'phrasal-verbs-basic': phrasalVerbsBasicExercises,
        'phrasal-verbs-intermediate': phrasalVerbsIntermediateExercises,
        'phrasal-verbs-advanced': phrasalVerbsAdvancedExercises,
        'relative-clauses': relativeClausesExercises,
        'gerunds-infinitives': gerundsInfinitivesExercises,
        'mixed-infinitives': mixedInfinitivesExercises,
        'articles': articlesExercises,
        'quantifiers': quantifiersExercises,
        'quantifiers-how-much-many': quantifiersHowMuchManyExercises,
    };
  