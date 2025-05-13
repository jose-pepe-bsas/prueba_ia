
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

    const originalConditionalsExercises = {
      'conditionals-zero': {
        level1: [
          { id: 'cond0-l1-1', sentence: 'If you heat ice, it _____.', options: ['melt', 'melts', 'melting'], correct: 'melts' },
          { id: 'cond0-l1-2', sentence: 'Water _____ (boil) if you heat it to 100°C.', options: ['boil', 'boils', 'is boiling'], correct: 'boils' },
          { id: 'cond0-l1-3', sentence: 'If babies _____ (be) hungry, they cry.', options: ['is', 'are', 'am'], correct: 'are' },
          { id: 'cond0-l1-4', sentence: 'Plants die if they _____ (not get) enough water.', options: ['don\'t get', 'doesn\'t get', 'aren\'t getting'], correct: 'don\'t get' },
          { id: 'cond0-l1-5', sentence: 'If you mix red and blue, you _____ purple.', options: ['get', 'gets', 'are getting'], correct: 'get' },
          { id: 'cond0-l1-6', sentence: 'Metal expands if it _____ (heat).', options: ['heat', 'heats', 'is heated'], correct: 'is heated' },
          { id: 'cond0-l1-7', sentence: 'If you _____ (not eat), you become weak.', options: ['don\'t eat', 'doesn\'t eat', 'not eating'], correct: 'don\'t eat' },
          { id: 'cond0-l1-8', sentence: 'The ground gets wet if it _____ (rain).', options: ['rain', 'rains', 'is raining'], correct: 'rains' },
          { id: 'cond0-l1-9', sentence: 'If you touch fire, you _____ burned.', options: ['get', 'gets', 'are getting'], correct: 'get' },
          { id: 'cond0-l1-10', sentence: 'Snakes bite if they _____ (be) scared.', options: ['is', 'are', 'am'], correct: 'are' },
        ],
        level2: [
          { id: 'cond0-l2-1', sentence: 'If you ____ (press) this button, the machine ____ (start).', options: ['press / starts', 'presses / start', 'pressing / starting'], correct: 'press / starts' },
          { id: 'cond0-l2-2', sentence: 'When the sun ____ (go) down, it ____ (get) dark.', options: ['goes / gets', 'go / get', 'going / getting'], correct: 'goes / gets' },
          { id: 'cond0-l2-3', sentence: 'People ____ (get) thirsty if they ____ (not drink) enough.', options: ['get / don\'t drink', 'gets / doesn\'t drink', 'getting / not drinking'], correct: 'get / don\'t drink' },
          { id: 'cond0-l2-4', sentence: 'If you ____ (not water) plants, they ____ (die).', options: ['don\'t water / die', 'doesn\'t water / dies', 'not watering / dying'], correct: 'don\'t water / die' },
          { id: 'cond0-l2-5', sentence: 'When I ____ (be) late for work, my boss ____ (get) angry.', options: ['am / gets', 'is / get', 'are / getting'], correct: 'am / gets' },
          { id: 'cond0-l2-6', sentence: 'If you ____ (freeze) water, it ____ (turn) into ice.', options: ['freeze / turns', 'freezes / turn', 'freezing / turning'], correct: 'freeze / turns' },
          { id: 'cond0-l2-7', sentence: 'Does ice ____ (melt) if you ____ (heat) it?', options: ['melt / heat', 'melts / heats', 'melting / heating'], correct: 'melt / heat' },
          { id: 'cond0-l2-8', sentence: 'If you ____ (drop) glass, it usually ____ (break).', options: ['drop / breaks', 'drops / break', 'dropping / breaking'], correct: 'drop / breaks' },
          { id: 'cond0-l2-9', sentence: 'When you ____ (mix) yellow and blue, you ____ (make) green.', options: ['mix / make', 'mixes / makes', 'mixing / making'], correct: 'mix / make' },
          { id: 'cond0-l2-10', sentence: 'If cats ____ (feel) threatened, they ____ (hiss).', options: ['feel / hiss', 'feels / hisses', 'feeling / hissing'], correct: 'feel / hiss' },
        ],
        level3: generateDefaultLevel('conditionals-zero', 10, 3),
      },
      'conditionals-first': {
        level1: [
          { id: 'cond1-l1-1', sentence: 'If it ___ (rain), we ___ (stay) home.', options: ['rains / will stay', 'will rain / stay', 'rains / stay'], correct: 'rains / will stay' },
          { id: 'cond1-l1-2', sentence: 'You ___ (pass) the exam if you ___ (study).', options: ['will pass / study', 'pass / will study', 'will pass / studies'], correct: 'will pass / study' },
          { id: 'cond1-l1-3', sentence: 'If she ___ (hurry), she ___ (catch) the bus.', options: ['hurries / will catch', 'hurry / catches', 'will hurry / catch'], correct: 'hurries / will catch' },
          { id: 'cond1-l1-4', sentence: 'I ___ (call) you if I ___ (need) help.', options: ['will call / need', 'call / will need', 'will call / needs'], correct: 'will call / need' },
          { id: 'cond1-l1-5', sentence: 'If I ___ (see) him, I ___ (tell) him.', options: ['see / will tell', 'will see / tell', 'see / tell'], correct: 'see / will tell' },
          { id: 'cond1-l1-6', sentence: 'They ___ (be) happy if we ___ (come).', options: ['will be / come', 'are / will come', 'will be / comes'], correct: 'will be / come' },
          { id: 'cond1-l1-7', sentence: 'If the weather ___ (be) nice, we ___ (go) to the park.', options: ['is / will go', 'will be / go', 'is / go'], correct: 'is / will go' },
          { id: 'cond1-l1-8', sentence: 'He ___ (help) you if he ___ (have) time.', options: ['will help / has', 'helps / will have', 'will help / have'], correct: 'will help / has' },
          { id: 'cond1-l1-9', sentence: 'If you ___ (eat) too much, you ___ (feel) sick.', options: ['eat / will feel', 'will eat / feel', 'eats / will feel'], correct: 'eat / will feel' },
          { id: 'cond1-l1-10', sentence: 'She ___ (buy) the dress if it ___ (fit) her.', options: ['will buy / fits', 'buys / will fit', 'will buy / fit'], correct: 'will buy / fits' },
        ],
        level2: [
          { id: 'cond1-l2-1', sentence: 'If we ___ (miss) the train, we ___ (take) the next one.', options: ['miss / will take', 'will miss / take', 'miss / take'], correct: 'miss / will take' },
          { id: 'cond1-l2-2', sentence: 'She ___ (be) angry if you ___ (break) her favorite mug.', options: ['will be / break', 'is / will break', 'will be / breaks'], correct: 'will be / break' },
          { id: 'cond1-l2-3', sentence: 'If they ___ (not arrive) soon, we ___ (start) without them.', options: ['don\'t arrive / will start', 'won\'t arrive / start', 'doesn\'t arrive / will start'], correct: 'don\'t arrive / will start' },
          { id: 'cond1-l2-4', sentence: 'What ___ you ___ (do) if the computer ___ (crash)?', options: ['will / do / crashes', 'do / do / will crash', 'will / do / crash'], correct: 'will / do / crashes' },
          { id: 'cond1-l2-5', sentence: 'If I ___ (find) your keys, I ___ (let) you know.', options: ['find / will let', 'will find / let', 'find / let'], correct: 'find / will let' },
          { id: 'cond1-l2-6', sentence: 'He ___ (not pass) the driving test unless he ___ (practice) more.', options: ['won\'t pass / practices', 'doesn\'t pass / will practice', 'won\'t pass / practice'], correct: 'won\'t pass / practices' },
          { id: 'cond1-l2-7', sentence: 'If the tickets ___ (be) too expensive, we ___ (not go) to the concert.', options: ['are / won\'t go', 'will be / don\'t go', 'are / don\'t go'], correct: 'are / won\'t go' },
          { id: 'cond1-l2-8', sentence: 'You ___ (get) a discount if you ___ (book) in advance.', options: ['will get / book', 'get / will book', 'will get / books'], correct: 'will get / book' },
          { id: 'cond1-l2-9', sentence: 'If she ___ (win) the competition, she ___ (be) famous.', options: ['wins / will be', 'will win / is', 'wins / is'], correct: 'wins / will be' },
          { id: 'cond1-l2-10', sentence: 'We ___ (have) a barbecue if the weather ___ (stay) good.', options: ['will have / stays', 'have / will stay', 'will have / stay'], correct: 'will have / stays' },
        ],
        level3: generateDefaultLevel('conditionals-first', 10, 3), 
      },
      'conditionals-second': { 
        level1: [
          { id: 'cond2-l1-1', sentence: 'If I ___ (be) you, I ___ (study) harder.', options: ['was / would study', 'were / would study', 'am / will study'], correct: 'were / would study' },
          { id: 'cond2-l1-2', sentence: 'She ___ (travel) the world if she ___ (win) the lottery.', options: ['would travel / won', 'will travel / wins', 'travelled / would win'], correct: 'would travel / won' },
          { id: 'cond2-l1-3', sentence: 'If he ___ (have) more time, he ___ (learn) guitar.', options: ['had / would learn', 'has / will learn', 'had / learned'], correct: 'had / would learn' },
          { id: 'cond2-l1-4', sentence: 'What ___ you ___ (do) if you ___ (find) a wallet?', options: ['would / do / found', 'will / do / find', 'did / do / would find'], correct: 'would / do / found' },
          { id: 'cond2-l1-5', sentence: 'If they ___ (live) closer, we ___ (visit) them more often.', options: ['lived / would visit', 'live / will visit', 'would live / visited'], correct: 'lived / would visit' },
          { id: 'cond2-l1-6', sentence: 'I ___ (buy) that car if I ___ (have) enough money.', options: ['would buy / had', 'will buy / have', 'bought / would have'], correct: 'would buy / had' },
          { id: 'cond2-l1-7', sentence: 'If it ___ (not be) so cold, we ___ (go) for a swim.', options: ['weren\'t / would go', 'wasn\'t / would go', 'isn\'t / will go'], correct: 'weren\'t / would go' },
          { id: 'cond2-l1-8', sentence: 'He ___ (help) us if he ___ (know) the answer.', options: ['would help / knew', 'will help / knows', 'helped / would know'], correct: 'would help / knew' },
          { id: 'cond2-l1-9', sentence: 'If you ___ (speak) better English, you ___ (get) the job.', options: ['spoke / would get', 'speak / will get', 'would speak / got'], correct: 'spoke / would get' },
          { id: 'cond2-l1-10', sentence: 'We ___ (move) to the countryside if we ___ (can).', options: ['would move / could', 'will move / can', 'moved / could'], correct: 'would move / could' },
        ],
        level2: [
          { id: 'cond2-l2-1', sentence: 'If I ___ (have) wings, I ___ (fly) to the moon.', options: ['had / would fly', 'have / will fly', 'had / flew'], correct: 'had / would fly' },
          { id: 'cond2-l2-2', sentence: 'She ___ (be) happier if she ___ (change) her job.', options: ['would be / changed', 'will be / changes', 'was / would change'], correct: 'would be / changed' },
          { id: 'cond2-l2-3', sentence: 'If they ___ (not be) so tired, they ___ (come) to the party.', options: ['weren\'t / would come', 'aren\'t / will come', 'hadn\'t been / would have come'], correct: 'weren\'t / would come' },
          { id: 'cond2-l2-4', sentence: 'What ___ you ___ (say) if you ___ (meet) your favorite celebrity?', options: ['would / say / met', 'will / say / meet', 'did / say / would meet'], correct: 'would / say / met' },
          { id: 'cond2-l2-5', sentence: 'If I ___ (know) his address, I ___ (send) him an invitation.', options: ['knew / would send', 'know / will send', 'knew / sent'], correct: 'knew / would send' },
          { id: 'cond2-l2-6', sentence: 'He ___ (not feel) so stressed if he ___ (take) a holiday.', options: ['wouldn\'t feel / took', 'won\'t feel / takes', 'didn\'t feel / would take'], correct: 'wouldn\'t feel / took' },
          { id: 'cond2-l2-7', sentence: 'If the weather ___ (be) better, we ___ (go) to the beach.', options: ['were / would go', 'was / would go', 'is / will go'], correct: 'were / would go' },
          { id: 'cond2-l2-8', sentence: 'You ___ (learn) faster if you ___ (practice) every day.', options: ['would learn / practiced', 'will learn / practice', 'learned / would practice'], correct: 'would learn / practiced' },
          { id: 'cond2-l2-9', sentence: 'If she ___ (have) more free time, she ___ (read) more books.', options: ['had / would read', 'has / will read', 'had / read'], correct: 'had / would read' },
          { id: 'cond2-l2-10', sentence: 'We ___ (buy) a bigger house if we ___ (can) afford it.', options: ['would buy / could', 'will buy / can', 'bought / could'], correct: 'would buy / could' },
        ],
        level3: generateDefaultLevel('conditionals-second', 10, 3),
      },
      'conditionals-third': {
        level1: [
          { id: 'cond3-l1-1', sentence: 'If I ___ (know) you were coming, I ___ (bake) a cake.', options: ['had known / would have baked', 'knew / would bake', 'know / will bake'], correct: 'had known / would have baked' },
          { id: 'cond3-l1-2', sentence: 'She ___ (pass) the exam if she ___ (study) harder.', options: ['would pass / studied', 'would have passed / had studied', 'passed / would study'], correct: 'would have passed / had studied' },
          { id: 'cond3-l1-3', sentence: 'If he ___ (not be) sick, he ___ (come) to the party.', options: ['hadn\'t been / would have come', 'wasn\'t / would come', 'isn\'t / will come'], correct: 'hadn\'t been / would have come' },
          { id: 'cond3-l1-4', sentence: 'What ___ you ___ (do) if you ___ (see) the accident?', options: ['would / do / saw', 'would have / done / had seen', 'did / do / would see'], correct: 'would have / done / had seen' },
          { id: 'cond3-l1-5', sentence: 'If they ___ (leave) earlier, they ___ (not miss) the train.', options: ['had left / wouldn\'t have missed', 'left / wouldn\'t miss', 'leave / won\'t miss'], correct: 'had left / wouldn\'t have missed' },
          { id: 'cond3-l1-6', sentence: 'I ___ (call) you if I ___ (not lose) your number.', options: ['would call / didn\'t lose', 'would have called / hadn\'t lost', 'called / wouldn\'t lose'], correct: 'would have called / hadn\'t lost' },
          { id: 'cond3-l1-7', sentence: 'If it ___ (rain), we ___ (stay) home.', options: ['had rained / would have stayed', 'rained / would stay', 'rains / will stay'], correct: 'had rained / would have stayed' },
          { id: 'cond3-l1-8', sentence: 'He ___ (help) us if we ___ (ask) him.', options: ['would help / asked', 'would have helped / had asked', 'helped / would ask'], correct: 'would have helped / had asked' },
          { id: 'cond3-l1-9', sentence: 'If you ___ (tell) me, I ___ (understand).', options: ['had told / would have understood', 'told / would understand', 'tell / will understand'], correct: 'had told / would have understood' },
          { id: 'cond3-l1-10', sentence: 'We ___ (go) to the beach if the weather ___ (be) better.', options: ['would go / was', 'would have gone / had been', 'went / would be'], correct: 'would have gone / had been' },
        ],
        level2: [
          { id: 'cond3-l2-1', sentence: 'If I ___ (study) more, I ___ (pass) the exam easily.', options: ['had studied / would have passed', 'studied / would pass', 'had studied / passed'], correct: 'had studied / would have passed' },
          { id: 'cond3-l2-2', sentence: 'She ___ (not be) late if she ___ (wake up) earlier.', options: ['wouldn\'t have been / had woken up', 'wouldn\'t be / woke up', 'hadn\'t been / would wake up'], correct: 'wouldn\'t have been / had woken up' },
          { id: 'cond3-l2-3', sentence: 'If they ___ (invite) me, I ___ (go) to their wedding.', options: ['had invited / would have gone', 'invited / would go', 'had invited / went'], correct: 'had invited / would have gone' },
          { id: 'cond3-l2-4', sentence: 'What ___ you ___ (done) if you ___ (be) in my situation?', options: ['would / have done / had been', 'would / do / were', 'did / do / would have been'], correct: 'would / have done / had been' },
          { id: 'cond3-l2-5', sentence: 'If he ___ (drive) more carefully, he ___ (not have) the accident.', options: ['had driven / wouldn\'t have had', 'drove / wouldn\'t have', 'had driven / didn\'t have'], correct: 'had driven / wouldn\'t have had' },
          { id: 'cond3-l2-6', sentence: 'I ___ (buy) that house if I ___ (have) enough money at the time.', options: ['would have bought / had had', 'would buy / had', 'bought / would have had'], correct: 'would have bought / had had' },
          { id: 'cond3-l2-7', sentence: 'If the weather ___ (not be) so bad yesterday, we ___ (play) tennis.', options: ['hadn\'t been / would have played', 'wasn\'t / would play', 'hadn\'t been / played'], correct: 'hadn\'t been / would have played' },
          { id: 'cond3-l2-8', sentence: 'You ___ (feel) better if you ___ (take) the medicine I gave you.', options: ['would have felt / had taken', 'would feel / took', 'felt / would have taken'], correct: 'would have felt / had taken' },
          { id: 'cond3-l2-9', sentence: 'If she ___ (know) about the meeting, she ___ (attend) it.', options: ['had known / would have attended', 'knew / would attend', 'had known / attended'], correct: 'had known / would have attended' },
          { id: 'cond3-l2-10', sentence: 'We ___ (not get) lost if we ___ (use) a map.', options: ['wouldn\'t have gotten / had used', 'wouldn\'t get / used', 'didn\'t get / would have used'], correct: 'wouldn\'t have gotten / had used' },
        ],
        level3: generateDefaultLevel('conditionals-third', 10, 3),
      },
      'conditionals-mixed': {
        level1: [
          { id: 'condm-l1-1', sentence: 'If she had studied harder, she ____ better grades now.', options: ['will have', 'would have', 'would have had'], correct: 'would have' },
          { id: 'condm-l1-2', sentence: 'If I were rich, I ____ (travel) around the world last year.', options: ['would travel', 'would have travelled', 'travelled'], correct: 'would have travelled' },
          { id: 'condm-l1-3', sentence: 'He would be very tired today if he ____ (not sleep) well last night.', options: ['didn\'t sleep', 'hadn\'t slept', 'not slept'], correct: 'hadn\'t slept' },
          { id: 'condm-l1-4', sentence: 'If they had bought the tickets, they ____ (be) at the concert now.', options: ['would be', 'would have been', 'were'], correct: 'would be' },
          { id: 'condm-l1-5', sentence: 'If I ____ (not be) afraid of heights, I would have gone bungee jumping.', options: ['weren\'t', 'wasn\'t', 'hadn\'t been'], correct: 'weren\'t' },
          { id: 'condm-l1-6', sentence: 'She ____ (speak) French fluently now if she had lived in Paris.', options: ['would speak', 'would have spoken', 'spoke'], correct: 'would speak' },
          { id: 'condm-l1-7', sentence: 'If he ____ (take) the job, he would be living in New York now.', options: ['took', 'had taken', 'would take'], correct: 'had taken' },
          { id: 'condm-l1-8', sentence: 'We wouldn\'t be lost now if we ____ (bring) a map.', options: ['brought', 'had brought', 'would bring'], correct: 'had brought' },
          { id: 'condm-l1-9', sentence: 'If I had won the lottery, I ____ (not work) anymore.', options: ['wouldn\'t work', 'wouldn\'t have worked', 'didn\'t work'], correct: 'wouldn\'t work' },
          { id: 'condm-l1-10', sentence: 'They would have arrived on time if the flight ____ (not be) delayed.', options: ['wasn\'t', 'hadn\'t been', 'wouldn\'t be'], correct: 'hadn\'t been' },
        ],
        level2: [
          { id: 'condm-l2-1', sentence: 'If he ____ (be) more careful, he wouldn\'t have broken his leg.', options: ['was', 'had been', 'were'], correct: 'had been' },
          { id: 'condm-l2-2', sentence: 'I ____ (not be) so stressed now if I had finished the project on time.', options: ['wouldn\'t be', 'wouldn\'t have been', 'am not'], correct: 'wouldn\'t be' },
          { id: 'condm-l2-3', sentence: 'If she ____ (not miss) the bus, she would be here by now.', options: ['didn\'t miss', 'hadn\'t missed', 'wouldn\'t miss'], correct: 'hadn\'t missed' },
          { id: 'condm-l2-4', sentence: 'They would have more money now if they ____ (not spend) so much last year.', options: ['didn\'t spend', 'hadn\'t spent', 'wouldn\'t spend'], correct: 'hadn\'t spent' },
          { id: 'condm-l2-5', sentence: 'If I ____ (know) how to swim, I would have joined you in the pool.', options: ['knew', 'had known', 'would know'], correct: 'knew' },
          { id: 'condm-l2-6', sentence: 'He ____ (be) a doctor now if he had studied medicine.', options: ['would be', 'would have been', 'is'], correct: 'would be' },
          { id: 'condm-l2-7', sentence: 'If you ____ (tell) me earlier, I could have helped you.', options: ['told', 'had told', 'would tell'], correct: 'had told' },
          { id: 'condm-l2-8', sentence: 'We wouldn\'t be in this mess if we ____ (listen) to your advice.', options: ['listened', 'had listened', 'would listen'], correct: 'had listened' },
          { id: 'condm-l2-9', sentence: 'If I weren\'t so busy, I ____ (go) to the cinema with you last night.', options: ['would go', 'would have gone', 'went'], correct: 'would have gone' },
          { id: 'condm-l2-10', sentence: 'She ____ (feel) better today if she hadn\'t eaten so much yesterday.', options: ['would feel', 'would have felt', 'feels'], correct: 'would feel' },
        ],
        level3: generateDefaultLevel('conditionals-mixed', 10, 3),
      },
    };

    export const conditionalsExercises = {};
    for (const topic in originalConditionalsExercises) {
      conditionalsExercises[topic] = processTopic(originalConditionalsExercises[topic]);
    }
  