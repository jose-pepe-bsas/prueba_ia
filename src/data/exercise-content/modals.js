
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

    const originalModalsExercises = {
       'modals-can-could': { 
        level1: [
          { id: 'mcc-l1-1', sentence: 'She ___ speak three languages fluently.', options: ['can', 'could', 'may'], correct: 'can' },
          { id: 'mcc-l1-2', sentence: 'When I was young, I ___ run very fast.', options: ['can', 'could', 'might'], correct: 'could' },
          { id: 'mcc-l1-3', sentence: '___ you help me with this bag, please?', options: ['Can', 'Could', 'May'], correct: 'Can' }, 
          { id: 'mcc-l1-4', sentence: 'He looked everywhere, but he ___ not find his keys.', options: ['can', 'could', 'may'], correct: 'could' },
          { id: 'mcc-l1-5', sentence: 'I ___ hear the music from my neighbour\'s house last night.', options: ['can', 'could', 'might'], correct: 'could' },
          { id: 'mcc-l1-6', sentence: 'Sorry, I ___ not come to the party tomorrow.', options: ['can', 'could', 'may'], correct: 'can' },
          { id: 'mcc-l1-7', sentence: '___ I borrow your pen for a moment?', options: ['Can', 'Could', 'Might'], correct: 'Can' }, 
          { id: 'mcc-l1-8', sentence: 'Birds ___ fly, but fish ___ not.', options: ['can / can', 'could / could', 'can / can'], correct: 'can / can' },
          { id: 'mcc-l1-9', sentence: 'She ___ play the piano beautifully when she was a child.', options: ['can', 'could', 'may'], correct: 'could' },
          { id: 'mcc-l1-10', sentence: 'It\'s too noisy here. I ___ not concentrate.', options: ['can', 'could', 'might'], correct: 'can' },
        ],
        level2: [
          { id: 'mcc-l2-1', sentence: '___ you possibly lend me your car for the weekend?', options: ['Can', 'Could', 'May'], correct: 'Could' },
          { id: 'mcc-l2-2', sentence: 'Even though he tried his best, he ___ not solve the complex puzzle.', options: ['can', 'could', 'may'], correct: 'could' },
          { id: 'mcc-l2-3', sentence: 'I ___ see the mountains clearly from my window this morning.', options: ['can', 'could', 'might'], correct: 'can' },
          { id: 'mcc-l2-4', sentence: 'She ___ already swim when she was only five years old.', options: ['can', 'could', 'may'], correct: 'could' },
          { id: 'mcc-l2-5', sentence: 'We ___ not afford to go on holiday last year, but this year we ___ .', options: ['could / can', 'can / could', 'could / could'], correct: 'could / can' },
          { id: 'mcc-l2-6', sentence: '___ I ask you a personal question, if you don\'t mind?', options: ['Can', 'Could', 'Might'], correct: 'Could' },
          { id: 'mcc-l2-7', sentence: 'He ___ speak English fluently now after living in London for a year.', options: ['can', 'could', 'may'], correct: 'can' },
          { id: 'mcc-l2-8', sentence: 'They ___ not believe their eyes when they saw the UFO.', options: ['can', 'could', 'might'], correct: 'could' },
          { id: 'mcc-l2-9', sentence: 'You ___ use my computer if yours is not working.', options: ['can', 'could', 'may'], correct: 'can' },
          { id: 'mcc-l2-10', sentence: 'It was so dark that I ___ barely see anything in front of me.', options: ['can', 'could', 'might'], correct: 'could' },
        ],
        level3: [
          { id: 'mcc-l3-1', sentence: 'Despite the storm, the pilot ___ land the plane safely.', options: ['can', 'could', 'was able to'], correct: 'was able to' },
          { id: 'mcc-l3-2', sentence: '___ you tell me if this train goes to Oxford, please?', options: ['Can', 'Could', 'May'], correct: 'Could' },
          { id: 'mcc-l3-3', sentence: 'She ___ not have known about the surprise party; her reaction was genuine.', options: ['can', 'could', 'must'], correct: 'could' },
          { id: 'mcc-l3-4', sentence: 'I ___ just about reach the top shelf if I stand on my toes.', options: ['can', 'could', 'may'], correct: 'can' },
          { id: 'mcc-l3-5', sentence: 'He ___ have forgotten his keys; he often does that.', options: ['can', 'could', 'might'], correct: 'could' },
          { id: 'mcc-l3-6', sentence: 'We ___ not get tickets for the concert because they sold out too quickly.', options: ['can', 'could', 'were able to'], correct: 'could' },
          { id: 'mcc-l3-7', sentence: '___ I possibly interrupt for a moment? It\'s quite urgent.', options: ['Can', 'Could', 'Might'], correct: 'Could' },
          { id: 'mcc-l3-8', sentence: 'With enough practice, anyone ___ learn to play a musical instrument.', options: ['can', 'could', 'may'], correct: 'can' },
          { id: 'mcc-l3-9', sentence: 'She ___ have been a professional athlete if she hadn\'t injured her knee.', options: ['can', 'could', 'might'], correct: 'could' },
          { id: 'mcc-l3-10', sentence: 'It\'s amazing what modern technology ___ achieve these days.', options: ['can', 'could', 'may'], correct: 'can' },
        ]
      },
      'modals-may-might': {
        level1: [
          { id: 'mmm-l1-1', sentence: 'It ____ rain later, take an umbrella.', options: ['might', 'should', 'must'], correct: 'might' },
          { id: 'mmm-l1-2', sentence: '___ I use your phone for a minute?', options: ['May', 'Might', 'Should'], correct: 'May' },
          { id: 'mmm-l1-3', sentence: 'She is not answering her phone. She ___ be busy.', options: ['may', 'must', 'should'], correct: 'may' },
          { id: 'mmm-l1-4', sentence: 'He ___ come to the party, he is not sure yet.', options: ['might', 'must', 'will'], correct: 'might' },
          { id: 'mmm-l1-5', sentence: 'You ___ leave now if you wish.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l1-6', sentence: 'Take a jacket. It ___ get cold later.', options: ['might', 'can', 'should'], correct: 'might' },
          { id: 'mmm-l1-7', sentence: 'The road is closed. There ___ have been an accident.', options: ['may', 'must', 'should'], correct: 'may' },
          { id: 'mmm-l1-8', sentence: 'He ___ not agree with our proposal, but it\'s worth trying.', options: ['might', 'may', 'must'], correct: 'might' },
          { id: 'mmm-l1-9', sentence: 'Students ___ ask questions at the end of the lecture.', options: ['may', 'might', 'should'], correct: 'may' },
          { id: 'mmm-l1-10', sentence: 'I ___ go to the cinema tonight, I haven\'t decided.', options: ['might', 'must', 'will'], correct: 'might' },
        ],
        level2: [
          { id: 'mmm-l2-1', sentence: 'The sky is very dark. It ___ storm soon.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l2-2', sentence: '___ we suggest an alternative solution to this problem?', options: ['May', 'Might', 'Should'], correct: 'May' },
          { id: 'mmm-l2-3', sentence: 'He\'s not in his office. He ___ have gone for lunch.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l2-4', sentence: 'She ___ not remember me; it\'s been a long time.', options: ['might', 'may', 'must'], correct: 'might' },
          { id: 'mmm-l2-5', sentence: 'Visitors ___ take photographs, but without flash.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l2-6', sentence: 'Be careful with that vase. It ___ break easily.', options: ['might', 'can', 'should'], correct: 'might' },
          { id: 'mmm-l2-7', sentence: 'I\'m not sure where she is. She ___ be at the library.', options: ['may', 'might', 'must'], correct: 'might' },
          { id: 'mmm-l2-8', sentence: 'This ___ be the best option, but we should explore others too.', options: ['might', 'may', 'must'], correct: 'may' },
          { id: 'mmm-l2-9', sentence: 'You ___ find this book interesting if you like history.', options: ['may', 'might', 'should'], correct: 'might' },
          { id: 'mmm-l2-10', sentence: 'He ___ have misunderstood the instructions; his work is incorrect.', options: ['might', 'must', 'should'], correct: 'might' },
        ],
        level3: [
          { id: 'mmm-l3-1', sentence: 'Given the current economic climate, the company ___ face some challenges next year.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l3-2', sentence: '___ I be excused from the meeting a little early today?', options: ['May', 'Might', 'Should'], correct: 'May' },
          { id: 'mmm-l3-3', sentence: 'The old castle ___ look spooky at night, but it\'s perfectly safe.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l3-4', sentence: 'She ___ not have received your email yet; her internet connection is unreliable.', options: ['might', 'may', 'must'], correct: 'might' },
          { id: 'mmm-l3-5', sentence: 'Passengers ___ experience some turbulence during the flight.', options: ['may', 'might', 'must'], correct: 'may' },
          { id: 'mmm-l3-6', sentence: 'Although it seems unlikely, there ___ still be a chance of success.', options: ['might', 'can', 'should'], correct: 'might' },
          { id: 'mmm-l3-7', sentence: 'He ___ appear confident, but he ___ be quite nervous underneath.', options: ['may / might', 'might / may', 'must / may'], correct: 'may / might' },
          { id: 'mmm-l3-8', sentence: 'This ancient artifact ___ hold the key to understanding their civilization.', options: ['might', 'may', 'must'], correct: 'might' },
          { id: 'mmm-l3-9', sentence: 'You ___ proceed with caution, as the situation is still developing.', options: ['may', 'might', 'should'], correct: 'may' },
          { id: 'mmm-l3-10', sentence: 'I ___ have left my wallet at home, or it ___ have fallen out of my pocket.', options: ['might / might', 'must / may', 'should / might'], correct: 'might / might' },
        ]
      },
      'modals-must-have-to': {
        level1: [
          { id: 'mmht-l1-1', sentence: 'You ____ wear a uniform at school.', options: ['may', 'must', 'might'], correct: 'must' },
          { id: 'mmht-l1-2', sentence: 'I ___ finish this report by 5 PM.', options: ['have to', 'may', 'should'], correct: 'have to' },
          { id: 'mmht-l1-3', sentence: 'She ___ go to the doctor, she feels very ill.', options: ['must', 'might', 'can'], correct: 'must' },
          { id: 'mmht-l1-4', sentence: 'In many countries, you ___ drive on the left.', options: ['have to', 'must', 'should'], correct: 'have to' },
          { id: 'mmht-l1-5', sentence: 'You ___ not smoke in here. It\'s forbidden.', options: ['must', 'may', 'should'], correct: 'must' },
          { id: 'mmht-l1-6', sentence: 'He ___ get up early for his flight tomorrow.', options: ['has to', 'must', 'might'], correct: 'has to' },
          { id: 'mmht-l1-7', sentence: 'We ___ be quiet in the library.', options: ['must', 'can', 'may'], correct: 'must' },
          { id: 'mmht-l1-8', sentence: 'Do I ___ bring my passport?', options: ['have to', 'must', 'should'], correct: 'have to' },
          { id: 'mmht-l1-9', sentence: 'You ___ see this movie! It\'s amazing.', options: ['must', 'have to', 'may'], correct: 'must' },
          { id: 'mmht-l1-10', sentence: 'She ___ work late tonight to meet the deadline.', options: ['has to', 'must', 'might'], correct: 'has to' },
        ],
        level2: [
          { id: 'mmht-l2-1', sentence: 'You ___ be 18 to vote in this country.', options: ['must', 'have to', 'should'], correct: 'must' },
          { id: 'mmht-l2-2', sentence: 'I ___ wear glasses for reading; I can\'t see without them.', options: ['have to', 'must', 'may'], correct: 'have to' },
          { id: 'mmht-l2-3', sentence: 'He ___ take his medication every day as prescribed by the doctor.', options: ['must', 'has to', 'might'], correct: 'must' },
          { id: 'mmht-l2-4', sentence: 'We ___ buy a ticket before getting on the train.', options: ['have to', 'must', 'should'], correct: 'have to' },
          { id: 'mmht-l2-5', sentence: 'You ___ not enter this area without permission.', options: ['must', 'may', 'should'], correct: 'must' },
          { id: 'mmht-l2-6', sentence: 'She ___ attend the meeting; it\'s compulsory for all staff.', options: ['has to', 'must', 'might'], correct: 'has to' },
          { id: 'mmht-l2-7', sentence: 'All visitors ___ report to reception upon arrival.', options: ['must', 'can', 'may'], correct: 'must' },
          { id: 'mmht-l2-8', sentence: 'Does she ___ work on Saturdays in her new job?', options: ['have to', 'must', 'should'], correct: 'have to' },
          { id: 'mmht-l2-9', sentence: 'I ___ remember to call my mother on her birthday.', options: ['must', 'have to', 'may'], correct: 'must' },
          { id: 'mmht-l2-10', sentence: 'He ___ pay a fine for parking illegally.', options: ['has to', 'must', 'might'], correct: 'has to' },
        ],
        level3: [
          { id: 'mmht-l3-1', sentence: 'To get a driver\'s license, you ___ pass both a written and a practical test.', options: ['must', 'have to', 'should'], correct: 'have to' },
          { id: 'mmht-l3-2', sentence: 'I ___ admit, this is the best cake I\'ve ever tasted!', options: ['have to', 'must', 'may'], correct: 'must' },
          { id: 'mmht-l3-3', sentence: 'She ___ make a difficult choice between her career and her family.', options: ['must', 'has to', 'might'], correct: 'has to' },
          { id: 'mmht-l3-4', sentence: 'We ___ follow the safety procedures strictly to avoid accidents.', options: ['have to', 'must', 'should'], correct: 'must' },
          { id: 'mmht-l3-5', sentence: 'You ___ not reveal this information to anyone; it\'s highly confidential.', options: ['must', 'may', 'should'], correct: 'must' },
          { id: 'mmht-l3-6', sentence: 'He ___ take a connecting flight as there are no direct flights to his destination.', options: ['has to', 'must', 'might'], correct: 'has to' },
          { id: 'mmht-l3-7', 'sentence': 'One ___ be prepared for unexpected challenges in life.', options: ['must', 'can', 'may'], correct: 'must' },
          { id: 'mmht-l3-8', sentence: 'Do we really ___ complete all these forms by tomorrow?', options: ['have to', 'must', 'should'], correct: 'have to' },
          { id: 'mmht-l3-9', sentence: 'You absolutely ___ try the local cuisine when you visit this region.', options: ['must', 'have to', 'may'], correct: 'must' },
          { id: 'mmht-l3-10', sentence: 'She ___ find a new apartment soon as her current lease is expiring.', options: ['has to', 'must', 'might'], correct: 'has to' },
        ]
      },
      'modals-should-ought-to': {
        level1: [
          { id: 'msot-l1-1', sentence: 'You ____ see a doctor about that cough.', options: ['should', 'can', 'must'], correct: 'should' },
          { id: 'msot-l1-2', sentence: 'He ___ apologize for his mistake.', options: ['ought to', 'can', 'must'], correct: 'ought to' },
          { id: 'msot-l1-3', sentence: 'We ___ leave soon, or we\'ll be late.', options: ['should', 'must', 'may'], correct: 'should' },
          { id: 'msot-l1-4', sentence: 'You ___ not spend so much money on clothes.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l1-5', sentence: 'They ___ be more careful next time.', options: ['ought to', 'can', 'must'], correct: 'ought to' },
          { id: 'msot-l1-6', sentence: 'I think you ___ tell him the truth.', options: ['should', 'must', 'may'], correct: 'should' },
          { id: 'msot-l1-7', sentence: 'She ___ study harder if she wants to pass.', options: ['ought to', 'can', 'must'], correct: 'ought to' },
          { id: 'msot-l1-8', sentence: 'What ___ I do in this situation?', options: ['should', 'must', 'can'], correct: 'should' },
          { id: 'msot-l1-9', sentence: 'You ___ eat more fruits and vegetables.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l1-10', sentence: 'He ___ call his parents more often.', options: ['ought to', 'can', 'must'], correct: 'ought to' },
        ],
        level2: [
          { id: 'msot-l2-1', sentence: 'You ___ be more respectful to your elders.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l2-2', sentence: 'She ___ to save some money for a rainy day.', options: ['ought', 'should', 'must'], correct: 'ought' },
          { id: 'msot-l2-3', sentence: 'They ___ not make so much noise late at night.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l2-4', sentence: 'I believe we ___ invest more in renewable energy.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l2-5', sentence: 'He ___ to consider other people\'s feelings more often.', options: ['ought', 'should', 'can'], correct: 'ought' },
          { id: 'msot-l2-6', sentence: 'What ___ we bring to the potluck dinner?', options: ['should', 'must', 'can'], correct: 'should' },
          { id: 'msot-l2-7', sentence: 'You ___ check the weather forecast before going hiking.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l2-8', sentence: 'The government ___ to address the issue of unemployment.', options: ['ought', 'should', 'must'], correct: 'ought' },
          { id: 'msot-l2-9', sentence: 'She ___ not have said those hurtful things.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l2-10', sentence: 'We ___ to be grateful for what we have.', options: ['ought', 'should', 'can'], correct: 'ought' },
        ],
        level3: [
          { id: 'msot-l3-1', sentence: 'Given the circumstances, you ___ to reconsider your decision.', options: ['ought', 'should', 'must'], correct: 'ought' },
          { id: 'msot-l3-2', sentence: 'One ___ always try to be honest, even when it\'s difficult.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l3-3', sentence: 'They ___ not have ignored the warning signs; now they are in trouble.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l3-4', sentence: 'I feel we ___ to do more to help those in need in our community.', options: ['ought', 'should', 'can'], correct: 'ought' },
          { id: 'msot-l3-5', sentence: 'He ___ be more patient with his children when they make mistakes.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l3-6', sentence: 'What steps ___ the authorities take to prevent such incidents in the future?', options: ['should', 'must', 'can'], correct: 'should' },
          { id: 'msot-l3-7', sentence: 'You ___ to have consulted a professional before making such a significant investment.', options: ['ought', 'should', 'must'], correct: 'ought' },
          { id: 'msot-l3-8', sentence: 'The company ___ prioritize employee well-being over profits.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l3-9', sentence: 'She ___ not have been so quick to judge without knowing all the facts.', options: ['should', 'ought to', 'must'], correct: 'should' },
          { id: 'msot-l3-10', sentence: 'We ___ to appreciate the sacrifices our parents made for us.', options: ['ought', 'should', 'can'], correct: 'ought' },
        ]
      },
      'modals-will-would': {
        level1: [
          { id: 'mww-l1-1', sentence: 'I ____ love to travel around Europe one day.', options: ['might', 'will', 'would'], correct: 'would' },
          { id: 'mww-l1-2', sentence: 'She said she ___ help us with the project.', options: ['will', 'would', 'can'], correct: 'would' },
          { id: 'mww-l1-3', sentence: '___ you please pass the salt?', options: ['Will', 'Would', 'Can'], correct: 'Would' },
          { id: 'mww-l1-4', sentence: 'I think it ___ rain tomorrow.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l1-5', sentence: 'He promised he ___ call later.', options: ['will', 'would', 'might'], correct: 'will' },
          { id: 'mww-l1-6', sentence: 'If I had more time, I ___ learn another language.', options: ['will', 'would', 'can'], correct: 'would' },
          { id: 'mww-l1-7', sentence: 'The concert ___ start at 8 PM.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l1-8', sentence: '___ you like a cup of tea?', options: ['Will', 'Would', 'Can'], correct: 'Would' },
          { id: 'mww-l1-9', sentence: 'She knew that he ___ be late.', options: ['will', 'would', 'should'], correct: 'would' },
          { id: 'mww-l1-10', sentence: 'I\'m sure you ___ pass the exam.', options: ['will', 'would', 'might'], correct: 'will' },
        ],
        level2: [
          { id: 'mww-l2-1', sentence: '___ you mind opening the window? It\'s a bit stuffy in here.', options: ['Will', 'Would', 'Can'], correct: 'Would' },
          { id: 'mww-l2-2', sentence: 'He ___ probably be tired after such a long journey.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l2-3', sentence: 'If I were you, I ___ apologize to her.', options: ['will', 'would', 'can'], correct: 'would' },
          { id: 'mww-l2-4', sentence: 'I expect she ___ arrive around noon.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l2-5', sentence: 'They said they ___ join us for dinner if they finished work early.', options: ['will', 'would', 'might'], correct: 'would' },
          { id: 'mww-l2-6', sentence: 'It ___ be great if you could help us organize the event.', options: ['will', 'would', 'can'], correct: 'would' },
          { id: 'mww-l2-7', sentence: 'The weather forecast says it ___ be sunny all weekend.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l2-8', sentence: '___ it be alright if I borrowed your car tomorrow?', options: ['Will', 'Would', 'Can'], correct: 'Would' },
          { id: 'mww-l2-9', sentence: 'She hoped he ___ understand her reasons for leaving.', options: ['will', 'would', 'should'], correct: 'would' },
          { id: 'mww-l2-10', sentence: 'I\'m afraid the shop ___ be closed by the time we get there.', options: ['will', 'would', 'might'], correct: 'will' },
        ],
        level3: [
          { id: 'mww-l3-1', sentence: '___ you be so kind as to show me the way to the nearest post office?', options: ['Will', 'Would', 'Can'], correct: 'Would' },
          { id: 'mww-l3-2', sentence: 'I predict that technology ___ continue to advance at an incredible pace.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l3-3', sentence: 'If she had known about the problem, she ___ certainly have done something about it.', options: ['will', 'would', 'could'], correct: 'would' },
          { id: 'mww-l3-4', sentence: 'It is anticipated that the new policy ___ lead to significant improvements.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l3-5', sentence: 'He assured me that he ___ do everything in his power to resolve the issue.', options: ['will', 'would', 'might'], correct: 'would' },
          { id: 'mww-l3-6', sentence: 'One ___ imagine that living on a desert island ___ be quite challenging.', options: ['will / will', 'would / would', 'can / would'], correct: 'would / would' },
          { id: 'mww-l3-7', sentence: 'The company announced that it ___ be launching a new product line next quarter.', options: ['will', 'would', 'should'], correct: 'will' },
          { id: 'mww-l3-8', sentence: '___ you rather go to the mountains or the beach for our holiday?', options: ['Will', 'Would', 'Can'], correct: 'Would' },
          { id: 'mww-l3-9', sentence: 'She was confident that her team ___ win the championship.', options: ['will', 'would', 'should'], correct: 'would' },
          { id: 'mww-l3-10', sentence: 'I have no doubt that you ___ succeed if you put your mind to it.', options: ['will', 'would', 'might'], correct: 'will' },
        ]
      },
      'modals-perfect': {
        level1: [
          { id: 'mp-l1-1', sentence: 'She ____ gone home, I saw her leave.', options: ['must have', 'can have', 'could have'], correct: 'must have' },
          { id: 'mp-l1-2', sentence: 'He ___ (not study) for the exam. He failed it.', options: ['can\'t have studied', 'must not have studied', 'shouldn\'t have studied'], correct: 'can\'t have studied' },
          { id: 'mp-l1-3', sentence: 'They ___ (miss) the train. They are not here yet.', options: ['might have missed', 'must have missed', 'should have missed'], correct: 'might have missed' },
          { id: 'mp-l1-4', sentence: 'You ___ (tell) me you were coming! I would have prepared something.', options: ['should have told', 'must have told', 'could have told'], correct: 'should have told' },
          { id: 'mp-l1-5', sentence: 'It ___ (be) a difficult decision to make.', options: ['must have been', 'can\'t have been', 'should have been'], correct: 'must have been' },
          { id: 'mp-l1-6', sentence: 'I ___ (leave) my umbrella at the restaurant. It\'s not here.', options: ['could have left', 'must have left', 'should have left'], correct: 'could have left' },
          { id: 'mp-l1-7', sentence: 'She looks upset. She ___ (receive) some bad news.', options: ['may have received', 'must have received', 'should have received'], correct: 'may have received' },
          { id: 'mp-l1-8', sentence: 'He ___ (see) us. He walked right past.', options: ['can\'t have seen', 'must not have seen', 'shouldn\'t have seen'], correct: 'can\'t have seen' },
          { id: 'mp-l1-9', sentence: 'You ___ (be) more careful. Now you are injured.', options: ['should have been', 'must have been', 'could have been'], correct: 'should have been' },
          { id: 'mp-l1-10', sentence: 'The lights are off. They ___ (go) to bed.', options: ['must have gone', 'can\'t have gone', 'should have gone'], correct: 'must have gone' },
        ],
        level2: [
          { id: 'mp-l2-1', sentence: 'The ground is wet. It ___ (rain) during the night.', options: ['must have rained', 'can\'t have rained', 'should have rained'], correct: 'must have rained' },
          { id: 'mp-l2-2', sentence: 'He looks exhausted. He ___ (sleep) well last night.', options: ['can\'t have slept', 'must not have slept', 'shouldn\'t have slept'], correct: 'can\'t have slept' },
          { id: 'mp-l2-3', sentence: 'She\'s not answering her phone. She ___ (turn) it off or it ___ (be) out of battery.', options: ['might have turned / might be', 'must have turned / must be', 'should have turned / should be'], correct: 'might have turned / might be' },
          { id: 'mp-l2-4', sentence: 'I ___ (bring) a jacket. It\'s colder than I expected.', options: ['should have brought', 'must have brought', 'could have brought'], correct: 'should have brought' },
          { id: 'mp-l2-5', sentence: 'That ___ (be) a very expensive meal. The restaurant is famous for its prices.', options: ['must have been', 'can\'t have been', 'should have been'], correct: 'must have been' },
          { id: 'mp-l2-6', sentence: 'He ___ (forget) about our meeting; he\'s usually very punctual.', options: ['could have forgotten', 'must have forgotten', 'should have forgotten'], correct: 'could have forgotten' },
          { id: 'mp-l2-7', sentence: 'They arrived very late. They ___ (get) stuck in traffic.', options: ['may have gotten', 'must have gotten', 'should have gotten'], correct: 'may have gotten' },
          { id: 'mp-l2-8', sentence: 'You ___ (see) that movie. It was released just yesterday.', options: ['can\'t have seen', 'must not have seen', 'shouldn\'t have seen'], correct: 'can\'t have seen' },
          { id: 'mp-l2-9', sentence: 'She ___ (study) harder for the exam if she wanted to get a better grade.', options: ['should have studied', 'must have studied', 'could have studied'], correct: 'should have studied' },
          { id: 'mp-l2-10', sentence: 'The window is broken. Someone ___ (break) it.', options: ['must have broken', 'can\'t have broken', 'should have broken'], correct: 'must have broken' },
        ],
        level3: [
          { id: 'mp-l3-1', sentence: 'The project failed. We ___ (plan) it more carefully from the beginning.', options: ['should have planned', 'must have planned', 'could have planned'], correct: 'should have planned' },
          { id: 'mp-l3-2', sentence: 'He ___ (know) about the changes; he was in the meeting where they were discussed.', options: ['must have known', 'can\'t have known', 'might have known'], correct: 'must have known' },
          { id: 'mp-l3-3', sentence: 'She ___ (take) a different route; this one is completely blocked due to an accident.', options: ['should have taken', 'could have taken', 'must have taken'], correct: 'should have taken' },
          { id: 'mp-l3-4', sentence: 'They ___ (misunderstand) the instructions; the results are not what we expected.', options: ['must have misunderstood', 'can\'t have misunderstood', 'might have misunderstood'], correct: 'must have misunderstood' },
          { id: 'mp-l3-5', sentence: 'You ___ (be) so rude to him. He was only trying to help.', options: ['shouldn\'t have been', 'mustn\'t have been', 'couldn\'t have been'], correct: 'shouldn\'t have been' },
          { id: 'mp-l3-6', sentence: 'I ___ (lose) my keys on the way home, or I ___ (leave) them at the office.', options: ['might have lost / might have left', 'must have lost / must have left', 'should have lost / should have left'], correct: 'might have lost / might have left' },
          { id: 'mp-l3-7', sentence: 'It ___ (be) a ghost you saw; ghosts don\'t exist!', options: ['can\'t have been', 'must not have been', 'shouldn\'t have been'], correct: 'can\'t have been' },
          { id: 'mp-l3-8', sentence: 'He ___ (finish) the race if he hadn\'t injured his ankle.', options: ['could have finished', 'must have finished', 'should have finished'], correct: 'could have finished' },
          { id: 'mp-l3-9', sentence: 'She ___ (realize) the danger she was in.', options: ['may not have realized', 'must not have realized', 'cannot have realized'], correct: 'may not have realized' },
          { id: 'mp-l3-10', sentence: 'The ancient civilization ___ (possess) advanced astronomical knowledge, given the alignment of their temples.', options: ['must have possessed', 'can\'t have possessed', 'should have possessed'], correct: 'must have possessed' },
        ]
      },
      'modals-mixed': {
        level1: [
          { id: 'mmix-l1-1', sentence: 'You ___ (should / not eat) so much cake if you want to lose weight.', options: ['shouldn\'t eat', 'mustn\'t eat', 'can\'t eat'], correct: 'shouldn\'t eat' },
          { id: 'mmix-l1-2', sentence: '___ (Can / I) borrow your pen? I ___ (seem / to lose) mine.', options: ['Can I / seem to have lost', 'May I / am seeming to lose', 'Could I / was seeming to lose'], correct: 'Can I / seem to have lost' },
          { id: 'mmix-l1-3', sentence: 'She ___ (must / be) very tired; she ___ (work) all day.', options: ['must be / has been working', 'can be / worked', 'should be / is working'], correct: 'must be / has been working' },
          { id: 'mmix-l1-4', sentence: 'It ___ (might / rain) later, so you ___ (should / take) an umbrella.', options: ['might rain / should take', 'may rain / must take', 'could rain / can take'], correct: 'might rain / should take' },
          { id: 'mmix-l1-5', sentence: 'He ___ (have to / go) to the dentist because he ___ (have) a toothache.', options: ['has to go / has', 'must go / is having', 'should go / had'], correct: 'has to go / has' },
          { id: 'mmix-l1-6', sentence: 'You ___ (not need to / hurry); we ___ (have) plenty of time.', options: ['don\'t need to hurry / have', 'mustn\'t hurry / are having', 'shouldn\'t hurry / will have'], correct: 'don\'t need to hurry / have' },
          { id: 'mmix-l1-7', sentence: '___ (May / I) ask what you ___ (do) this evening?', options: ['May I / are doing', 'Can I / will do', 'Might I / do'], correct: 'May I / are doing' },
          { id: 'mmix-l1-8', sentence: 'She ___ (can / not find) her keys anywhere. She ___ (might / leave) them at work.', options: ['can\'t find / might have left', 'mustn\'t find / may leave', 'shouldn\'t find / could leave'], correct: 'can\'t find / might have left' },
          { id: 'mmix-l1-9', sentence: 'We ___ (ought to / visit) our grandparents more often. They ___ (get) lonely.', options: ['ought to visit / get', 'should visit / are getting', 'must visit / will get'], correct: 'ought to visit / get' },
          { id: 'mmix-l1-10', sentence: 'You ___ (must / not touch) that wire! It ___ (be) dangerous.', options: ['mustn\'t touch / could be', 'don\'t have to touch / may be', 'shouldn\'t touch / will be'], correct: 'mustn\'t touch / could be' },
        ],
        level2: [
          { id: 'mmix-l2-1', sentence: 'He ___ (must / have forgotten) about the meeting; he ___ (usually / be) very punctual.', options: ['must have forgotten / is usually', 'should have forgotten / usually is', 'can\'t have forgotten / will usually be'], correct: 'must have forgotten / is usually' },
          { id: 'mmix-l2-2', sentence: 'You ___ (needn\'t / have bought) so much food. We ___ (not be able to) eat it all.', options: ['needn\'t have bought / won\'t be able to', 'mustn\'t have bought / can\'t', 'shouldn\'t have bought / might not'], correct: 'needn\'t have bought / won\'t be able to' },
          { id: 'mmix-l2-3', sentence: 'She ___ (may / not come) to the party because she ___ (say) she ___ (feel) unwell.', options: ['may not come / said / was feeling', 'might not come / says / feels', 'can\'t come / told / felt'], correct: 'may not come / said / was feeling' },
          { id: 'mmix-l2-4', sentence: 'If you ___ (want) to improve your English, you ___ (should / practice) speaking every day.', options: ['want / should practice', 'will want / must practice', 'are wanting / can practice'], correct: 'want / should practice' },
          { id: 'mmix-l2-5', sentence: 'I ___ (can / not believe) he ___ (say) that! He ___ (ought to / know) better.', options: ['can\'t believe / said / ought to have known', 'mustn\'t believe / says / should know', 'may not believe / told / could know'], correct: 'can\'t believe / said / ought to have known' },
          { id: 'mmix-l2-6', sentence: 'You ___ (don\'t have to / whisper). Nobody else ___ (be) here.', options: ['don\'t have to whisper / is', 'mustn\'t whisper / will be', 'shouldn\'t whisper / can be'], correct: 'don\'t have to whisper / is' },
          { id: 'mmix-l2-7', sentence: 'It ___ (could / be) John who called; he ___ (mention) he ___ (might / call) today.', options: ['could have been / mentioned / might call', 'can be / mentions / may call', 'should be / was mentioning / will call'], correct: 'could have been / mentioned / might call' },
          { id: 'mmix-l2-8', sentence: 'We ___ (must / finish) this project by Friday, otherwise we ___ (not get) the bonus.', options: ['must finish / won\'t get', 'have to finish / don\'t get', 'should finish / might not get'], correct: 'must finish / won\'t get' },
          { id: 'mmix-l2-9', sentence: 'She ___ (should / have listened) to my advice. Now she ___ (be) in trouble.', options: ['should have listened / is', 'must have listened / will be', 'could have listened / might be'], correct: 'should have listened / is' },
          { id: 'mmix-l2-10', sentence: 'You ___ (may / leave) early today, but you ___ (have to / complete) your tasks first.', options: ['may leave / have to complete', 'can leave / must complete', 'might leave / should complete'], correct: 'may leave / have to complete' },
        ],
        level3: [
          { id: 'mmix-l3-1', sentence: 'He ___ (can\'t / have understood) the instructions properly, as the report he ___ (submit) ___ (be) full of errors.', options: ['can\'t have understood / submitted / was', 'mustn\'t have understood / submits / is', 'shouldn\'t have understood / will submit / will be'], correct: 'can\'t have understood / submitted / was' },
          { id: 'mmix-l3-2', sentence: 'You ___ (ought to / have checked) the weather forecast before you ___ (set off); now you ___ (be) caught in this storm.', options: ['ought to have checked / set off / are', 'should have checked / were setting off / will be', 'must have checked / had set off / might be'], correct: 'ought to have checked / set off / are' },
          { id: 'mmix-l3-3', sentence: 'She ___ (might / not have received) the invitation, or she ___ (could / simply be) too busy to reply yet.', options: ['might not have received / could simply be', 'may not receive / can simply be', 'must not have received / should simply be'], correct: 'might not have received / could simply be' },
          { id: 'mmix-l3-4', sentence: 'If the company ___ (want) to remain competitive, it ___ (must / invest) in new technology; it ___ (cannot / afford) to fall behind.', options: ['wants / must invest / cannot afford', 'will want / should invest / may not afford', 'is wanting / has to invest / might not afford'], correct: 'wants / must invest / cannot afford' },
          { id: 'mmix-l3-5', sentence: 'I ___ (would / have helped) you if I ___ (know) you ___ (be) in difficulty, but you ___ (not say) anything.', options: ['would have helped / had known / were / didn\'t say', 'will help / know / are / don\'t say', 'could help / knew / would be / wouldn\'t say'], correct: 'would have helped / had known / were / didn\'t say' },
          { id: 'mmix-l3-6', sentence: 'You ___ (needn\'t / have worried) so much; everything ___ (turn out) fine in the end, as I ___ (say) it ___ .', options: ['needn\'t have worried / turned out / said / would', 'mustn\'t have worried / will turn out / say / will', 'shouldn\'t have worried / has turned out / am saying / does'], correct: 'needn\'t have worried / turned out / said / would' },
          { id: 'mmix-l3-7', sentence: 'It ___ (must / be) a challenging experience for them, but they ___ (seem / to cope) remarkably well under the circumstances.', options: ['must have been / seem to be coping', 'should be / are seeming to cope', 'can be / will seem to cope'], correct: 'must have been / seem to be coping' },
          { id: 'mmix-l3-8', sentence: 'We ___ (should / probably leave) earlier to avoid the traffic, but we ___ (not realize) how bad it ___ (be).', options: ['should probably have left / didn\'t realize / would be', 'must probably leave / don\'t realize / will be', 'could probably leave / won\'t realize / is'], correct: 'should probably have left / didn\'t realize / would be' },
          { id: 'mmix-l3-9', sentence: 'She ___ (may / decide) to change her plans at the last minute; you ___ (never / can) be sure with her.', options: ['may decide / can never', 'might decide / could never', 'must decide / should never'], correct: 'may decide / can never' },
          { id: 'mmix-l3-10', sentence: 'You ___ (don\'t have to / agree) with his opinion, but you ___ (ought to / respect) his right to express it.', options: ['don\'t have to agree / ought to respect', 'mustn\'t agree / should respect', 'shouldn\'t agree / must respect'], correct: 'don\'t have to agree / ought to respect' },
        ]
      }
    };

    export const modalsExercises = {};
    for (const topic in originalModalsExercises) {
      modalsExercises[topic] = processTopic(originalModalsExercises[topic]);
    }
  