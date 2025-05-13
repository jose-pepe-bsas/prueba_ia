
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

    const originalReportedSpeechExercises = {
      'reported-speech-statements': {
        level1: [
          { id: 'rs-s-l1-1', sentence: 'He said, "I am happy." -> He said that he ___ happy.', options: ['is', 'was', 'am'], correct: 'was' },
          { id: 'rs-s-l1-2', sentence: 'She said, "I work in a bank." -> She said that she ___ in a bank.', options: ['works', 'worked', 'is working'], correct: 'worked' },
          { id: 'rs-s-l1-3', sentence: 'They said, "We went to the cinema yesterday." -> They said that they ___ to the cinema the day before.', options: ['went', 'had gone', 'go'], correct: 'had gone' },
          { id: 'rs-s-l1-4', sentence: 'He told me, "I will call you tomorrow." -> He told me that he ___ me the next day.', options: ['will call', 'would call', 'called'], correct: 'would call' },
          { id: 'rs-s-l1-5', sentence: 'She said, "I can swim." -> She said that she ___ swim.', options: ['can', 'could', 'can swim'], correct: 'could' },
          { id: 'rs-s-l1-6', sentence: 'They said, "We are playing football now." -> They said that they ___ football then.', options: ['are playing', 'were playing', 'played'], correct: 'were playing' },
          { id: 'rs-s-l1-7', sentence: 'He said, "I have finished my homework." -> He said that he ___ his homework.', options: ['has finished', 'had finished', 'finished'], correct: 'had finished' },
          { id: 'rs-s-l1-8', sentence: 'She told us, "I must go." -> She told us that she ___ go.', options: ['must', 'had to', 'has to'], correct: 'had to' },
          { id: 'rs-s-l1-9', sentence: 'He said, "I live here." -> He said that he lived ___.', options: ['here', 'there', 'that place'], correct: 'there' },
          { id: 'rs-s-l1-10', sentence: 'They said, "We saw this movie last week." -> They said that they had seen that movie the ___ week.', options: ['last', 'previous', 'before'], correct: 'previous' },
        ],
        level2: [
          { id: 'rs-s-l2-1', sentence: 'My brother said, "I am studying for my exams this week." -> My brother said that he ___ for his exams that week.', options: ['is studying', 'was studying', 'studied'], correct: 'was studying' },
          { id: 'rs-s-l2-2', sentence: 'Sarah told Tom, "I have already eaten lunch." -> Sarah told Tom that she ___ lunch.', options: ['has already eaten', 'had already eaten', 'already ate'], correct: 'had already eaten' },
          { id: 'rs-s-l2-3', sentence: 'The teacher said, "You must submit your assignments by Friday." -> The teacher said that we ___ submit our assignments by Friday.', options: ['must', 'had to', 'have to'], correct: 'had to' },
          { id: 'rs-s-l2-4', sentence: 'He complained, "This coffee is too cold." -> He complained that ___ coffee ___ too cold.', options: ['this / is', 'that / was', 'this / was'], correct: 'that / was' },
          { id: 'rs-s-l2-5', sentence: 'She explained, "I may be late for the meeting." -> She explained that she ___ be late for the meeting.', options: ['may', 'might', 'could'], correct: 'might' },
          { id: 'rs-s-l2-6', sentence: 'They announced, "We are getting married next month!" -> They announced that they ___ married the following month.', options: ['are getting', 'were getting', 'got'], correct: 'were getting' },
          { id: 'rs-s-l2-7', sentence: 'John said, "I bought a new car last Monday." -> John said that he ___ a new car the previous Monday.', options: ['bought', 'had bought', 'has bought'], correct: 'had bought' },
          { id: 'rs-s-l2-8', sentence: 'Lisa told her friend, "I will be traveling to Paris next year." -> Lisa told her friend that she ___ to Paris the following year.', options: ['will be traveling', 'would be traveling', 'is traveling'], correct: 'would be traveling' },
          { id: 'rs-s-l2-9', sentence: 'The children said, "We can\'t find our toys." -> The children said that they ___ their toys.', options: ['can\'t find', 'couldn\'t find', 'don\'t find'], correct: 'couldn\'t find' },
          { id: 'rs-s-l2-10', sentence: 'My father said, "I have to work late tonight." -> My father said that he ___ work late that night.', options: ['has to', 'had to', 'must'], correct: 'had to' },
        ],
        level3: [
          { id: 'rs-s-l3-1', sentence: 'The manager stated, "The company\'s profits have increased significantly this quarter." -> The manager stated that the company\'s profits ___ significantly that quarter.', options: ['have increased', 'had increased', 'increased'], correct: 'had increased' },
          { id: 'rs-s-l3-2', sentence: 'She whispered, "I saw them leave a few minutes ago." -> She whispered that she ___ them leave a few minutes before.', options: ['saw', 'had seen', 'has seen'], correct: 'had seen' },
          { id: 'rs-s-l3-3', sentence: 'He insisted, "I will not change my mind about this matter." -> He insisted that he ___ his mind about that matter.', options: ['will not change', 'would not change', 'did not change'], correct: 'would not change' },
          { id: 'rs-s-l3-4', sentence: 'They replied, "We have been waiting here for over an hour." -> They replied that they ___ there for over an hour.', options: ['have been waiting', 'had been waiting', 'were waiting'], correct: 'had been waiting' },
          { id: 'rs-s-l3-5', sentence: 'The witness claimed, "I can identify the suspect." -> The witness claimed that he ___ identify the suspect.', options: ['can', 'could', 'was able to'], correct: 'could' },
          { id: 'rs-s-l3-6', sentence: 'My friend mentioned, "I am planning to redecorate my apartment next month." -> My friend mentioned that she ___ to redecorate her apartment the following month.', options: ['is planning', 'was planning', 'planned'], correct: 'was planning' },
          { id: 'rs-s-l3-7', sentence: 'The expert commented, "This discovery may revolutionize the field." -> The expert commented that ___ discovery ___ revolutionize the field.', options: ['this / may', 'that / might', 'this / might'], correct: 'that / might' },
          { id: 'rs-s-l3-8', sentence: 'She confessed, "I ate the last piece of cake yesterday." -> She confessed that she ___ the last piece of cake the day before.', options: ['ate', 'had eaten', 'has eaten'], correct: 'had eaten' },
          { id: 'rs-s-l3-9', sentence: 'He argued, "You must reconsider your decision immediately." -> He argued that I ___ reconsider my decision immediately.', options: ['must', 'had to', 'should'], correct: 'had to' },
          { id: 'rs-s-l3-10', sentence: 'The children exclaimed, "We are going to the amusement park tomorrow!" -> The children exclaimed that they ___ to the amusement park the next day.', options: ['are going', 'were going', 'went'], correct: 'were going' },
        ]
      },
      'reported-speech-questions': {
        level1: [
          { id: 'rs-q-l1-1', sentence: 'He asked, "Are you happy?" -> He asked if I ___ happy.', options: ['am', 'was', 'are'], correct: 'was' },
          { id: 'rs-q-l1-2', sentence: 'She asked, "Where do you work?" -> She asked where I ___.', options: ['work', 'worked', 'do work'], correct: 'worked' },
          { id: 'rs-q-l1-3', sentence: 'They asked, "Did you go to the party?" -> They asked if I ___ to the party.', options: ['went', 'had gone', 'did go'], correct: 'had gone' },
          { id: 'rs-q-l1-4', sentence: 'He asked, "When will you call me?" -> He asked when I ___ him.', options: ['will call', 'would call', 'called'], correct: 'would call' },
          { id: 'rs-q-l1-5', sentence: 'She asked, "Can you swim?" -> She asked if I ___ swim.', options: ['can', 'could', 'can swim'], correct: 'could' },
          { id: 'rs-q-l1-6', sentence: 'They asked, "What are you doing?" -> They asked what I ___ doing.', options: ['am', 'was', 'are'], correct: 'was' },
          { id: 'rs-q-l1-7', sentence: 'He asked, "Have you finished?" -> He asked if I ___ .', options: ['have finished', 'had finished', 'finished'], correct: 'had finished' },
          { id: 'rs-q-l1-8', sentence: 'She asked, "Why must you go?" -> She asked why I ___ go.', options: ['must', 'had to', 'have to'], correct: 'had to' },
          { id: 'rs-q-l1-9', sentence: 'He asked, "Do you live here?" -> He asked if I lived ___.', options: ['here', 'there', 'that place'], correct: 'there' },
          { id: 'rs-q-l1-10', sentence: 'They asked, "How long have you been waiting?" -> They asked how long I ___ waiting.', options: ['have been', 'had been', 'was'], correct: 'had been' },
        ],
        level2: [
          { id: 'rs-q-l2-1', sentence: 'She asked me, "What time does the train leave?" -> She asked me what time the train ___.', options: ['leaves', 'left', 'does leave'], correct: 'left' },
          { id: 'rs-q-l2-2', sentence: 'He asked his son, "Have you done your homework?" -> He asked his son if he ___ his homework.', options: ['has done', 'had done', 'did'], correct: 'had done' },
          { id: 'rs-q-l2-3', sentence: 'The tourist asked, "Where is the nearest bank?" -> The tourist asked where the nearest bank ___ .', options: ['is', 'was', 'were'], correct: 'was' },
          { id: 'rs-q-l2-4', sentence: 'My friend asked, "Will you be at the party tomorrow?" -> My friend asked if I ___ at the party the next day.', options: ['will be', 'would be', 'am'], correct: 'would be' },
          { id: 'rs-q-l2-5', sentence: 'She asked him, "Can you lend me some money?" -> She asked him if he ___ her some money.', options: ['can lend', 'could lend', 'lends'], correct: 'could lend' },
          { id: 'rs-q-l2-6', sentence: 'The interviewer asked, "Why did you apply for this job?" -> The interviewer asked why I ___ for that job.', options: ['applied', 'had applied', 'did apply'], correct: 'had applied' },
          { id: 'rs-q-l2-7', sentence: 'He asked, "Are you listening to me?" -> He asked if I ___ to him.', options: ['am listening', 'was listening', 'listened'], correct: 'was listening' },
          { id: 'rs-q-l2-8', sentence: 'She asked, "Must I complete this form now?" -> She asked if she ___ complete that form then.', options: ['must', 'had to', 'has to'], correct: 'had to' },
          { id: 'rs-q-l2-9', sentence: 'They asked us, "When did you arrive here?" -> They asked us when we ___ there.', options: ['arrived', 'had arrived', 'did arrive'], correct: 'had arrived' },
          { id: 'rs-q-l2-10', sentence: 'The teacher asked, "Who knows the answer to this question?" -> The teacher asked who ___ the answer to that question.', options: ['knows', 'knew', 'had known'], correct: 'knew' },
        ],
        level3: [
          { id: 'rs-q-l3-1', sentence: 'The officer inquired, "Have you seen this person before?" -> The officer inquired whether I ___ that person before.', options: ['have seen', 'had seen', 'saw'], correct: 'had seen' },
          { id: 'rs-q-l3-2', sentence: 'She wondered, "How long will it take to get there?" -> She wondered how long it ___ to get there.', options: ['will take', 'would take', 'took'], correct: 'would take' },
          { id: 'rs-q-l3-3', sentence: 'He asked, "What were you doing when the incident occurred?" -> He asked what I ___ when the incident ___ .', options: ['was doing / occurred', 'had been doing / had occurred', 'did / occurred'], correct: 'had been doing / had occurred' },
          { id: 'rs-q-l3-4', sentence: 'They wanted to know, "Can we bring our dog to the hotel?" -> They wanted to know if they ___ their dog to the hotel.', options: ['can bring', 'could bring', 'brought'], correct: 'could bring' },
          { id: 'rs-q-l3-5', sentence: 'The journalist asked the politician, "Why haven\'t you addressed this issue yet?" -> The journalist asked the politician why he ___ that issue yet.', options: ['hasn\'t addressed', 'hadn\'t addressed', 'didn\'t address'], correct: 'hadn\'t addressed' },
          { id: 'rs-q-l3-6', sentence: 'My mother asked, "Must you make so much noise late at night?" -> My mother asked if I ___ make so much noise late at night.', options: ['must', 'had to', 'should'], correct: 'had to' },
          { id: 'rs-q-l3-7', sentence: 'She inquired, "Which of these options do you prefer?" -> She inquired which of those options I ___ .', options: ['prefer', 'preferred', 'had preferred'], correct: 'preferred' },
          { id: 'rs-q-l3-8', sentence: 'He asked, "Did you remember to lock the door before you left?" -> He asked if I ___ to lock the door before I ___ .', options: ['remembered / left', 'had remembered / had left', 'remembered / had left'], correct: 'had remembered / had left' },
          { id: 'rs-q-l3-9', sentence: 'The customer asked, "How much does this cost and is it available now?" -> The customer asked how much that ___ and if it ___ available then.', options: ['cost / was', 'costs / is', 'costed / was'], correct: 'cost / was' },
          { id: 'rs-q-l3-10', sentence: 'They asked, "Will you have finished the report by next Friday?" -> They asked if I ___ the report by the following Friday.', options: ['will have finished', 'would have finished', 'had finished'], correct: 'would have finished' },
        ]
      },
      'reported-speech-requests-commands': {
        level1: [
          { id: 'rs-rc-l1-1', sentence: 'He said, "Please wait here." -> He asked me ___ here.', options: ['wait', 'to wait', 'waited'], correct: 'to wait' },
          { id: 'rs-rc-l1-2', sentence: 'She said, "Don\'t touch that!" -> She told me ___ touch that.', options: ['don\'t', 'not to', 'to not'], correct: 'not to' },
          { id: 'rs-rc-l1-3', sentence: 'The teacher said, "Open your books." -> The teacher told us ___ our books.', options: ['open', 'to open', 'opened'], correct: 'to open' },
          { id: 'rs-rc-l1-4', sentence: 'He asked, "Could you help me?" -> He asked me ___ him.', options: ['help', 'to help', 'helped'], correct: 'to help' },
          { id: 'rs-rc-l1-5', sentence: 'She said, "Be quiet!" -> She ordered them ___ quiet.', options: ['be', 'to be', 'were'], correct: 'to be' },
          { id: 'rs-rc-l1-6', sentence: 'My mother said, "Tidy your room." -> My mother told me ___ my room.', options: ['tidy', 'to tidy', 'tidied'], correct: 'to tidy' },
          { id: 'rs-rc-l1-7', sentence: 'He said, "Please don\'t be late." -> He asked us ___ late.', options: ['don\'t be', 'not to be', 'to not be'], correct: 'not to be' },
          { id: 'rs-rc-l1-8', sentence: 'The officer said, "Show me your ID." -> The officer commanded him ___ his ID.', options: ['show', 'to show', 'showed'], correct: 'to show' },
          { id: 'rs-rc-l1-9', sentence: 'She asked, "Can you pass the salt?" -> She asked me ___ the salt.', options: ['pass', 'to pass', 'passed'], correct: 'to pass' },
          { id: 'rs-rc-l1-10', sentence: 'He warned, "Don\'t go near the edge." -> He warned them ___ near the edge.', options: ['don\'t go', 'not to go', 'to not go'], correct: 'not to go' },
        ],
        level2: [
          { id: 'rs-rc-l2-1', sentence: 'The doctor said, "Take this medicine twice a day." -> The doctor advised me ___ that medicine twice a day.', options: ['take', 'to take', 'took'], correct: 'to take' },
          { id: 'rs-rc-l2-2', sentence: 'She begged, "Please don\'t tell anyone my secret." -> She begged him ___ anyone her secret.', options: ['don\'t tell', 'not to tell', 'to not tell'], correct: 'not to tell' },
          { id: 'rs-rc-l2-3', sentence: 'The captain ordered, "Abandon ship!" -> The captain ordered the crew ___ ship.', options: ['abandon', 'to abandon', 'abandoned'], correct: 'to abandon' },
          { id: 'rs-rc-l2-4', sentence: 'He requested, "Could you possibly send the report by email?" -> He requested me ___ the report by email.', options: ['send', 'to send', 'sent'], correct: 'to send' },
          { id: 'rs-rc-l2-5', sentence: 'The librarian whispered, "Don\'t make any noise." -> The librarian whispered to us ___ any noise.', options: ['don\'t make', 'not to make', 'to not make'], correct: 'not to make' },
          { id: 'rs-rc-l2-6', sentence: 'My coach said, "Practice your serves every day." -> My coach encouraged me ___ my serves every day.', options: ['practice', 'to practice', 'practiced'], correct: 'to practice' },
          { id: 'rs-rc-l2-7', sentence: 'She warned, "Don\'t walk alone at night in this area." -> She warned me ___ alone at night in that area.', options: ['don\'t walk', 'not to walk', 'to not walk'], correct: 'not to walk' },
          { id: 'rs-rc-l2-8', sentence: 'The sign said, "Do not feed the animals." -> The sign instructed visitors ___ the animals.', options: ['do not feed', 'not to feed', 'to not feed'], correct: 'not to feed' },
          { id: 'rs-rc-l2-9', sentence: 'He invited, "Come to my party on Saturday." -> He invited me ___ to his party on Saturday.', options: ['come', 'to come', 'came'], correct: 'to come' },
          { id: 'rs-rc-l2-10', sentence: 'The manager told his assistant, "Please type these letters." -> The manager asked his assistant ___ those letters.', options: ['type', 'to type', 'typed'], correct: 'to type' },
        ],
        level3: [
          { id: 'rs-rc-l3-1', sentence: 'The general commanded, "Advance to the front line immediately!" -> The general commanded the soldiers ___ to the front line immediately.', options: ['advance', 'to advance', 'advanced'], correct: 'to advance' },
          { id: 'rs-rc-l3-2', sentence: 'She pleaded, "Please, please forgive me for what I did." -> She pleaded with him ___ her for what she had done.', options: ['forgive', 'to forgive', 'forgave'], correct: 'to forgive' },
          { id: 'rs-rc-l3-3', sentence: 'The instructor warned, "Don\'t attempt this exercise without supervision." -> The instructor warned them ___ that exercise without supervision.', options: ['don\'t attempt', 'not to attempt', 'to not attempt'], correct: 'not to attempt' },
          { id: 'rs-rc-l3-4', sentence: 'He urged, "You must submit your application before the deadline." -> He urged them ___ their application before the deadline.', options: ['submit', 'to submit', 'submitted'], correct: 'to submit' },
          { id: 'rs-rc-l3-5', sentence: 'The notice stated, "All visitors must sign in at the reception." -> The notice stated that all visitors ___ sign in at the reception.', options: ['must', 'had to', 'should'], correct: 'had to' },
          { id: 'rs-rc-l3-6', sentence: 'She gently reminded, "Don\'t forget to water the plants while I\'m away." -> She gently reminded me ___ the plants while she was away.', options: ['don\'t forget to water', 'not to forget to water', 'to not forget to water'], correct: 'not to forget to water' },
          { id: 'rs-rc-l3-7', sentence: 'The kidnapper threatened, "If you call the police, you\'ll regret it." -> The kidnapper threatened that if they ___ the police, they ___ it.', options: ['called / would regret', 'call / will regret', 'had called / would have regretted'], correct: 'called / would regret' },
          { id: 'rs-rc-l3-8', sentence: 'He proposed, "Let\'s start the project next week." -> He proposed that they ___ the project the following week.', options: ['start', 'should start', 'started'], correct: 'should start' },
          { id: 'rs-rc-l3-9', sentence: 'The guide advised, "It\'s better not to drink tap water in this region." -> The guide advised us ___ tap water in that region.', options: ['it\'s better not to drink', 'not to drink', 'to not drink'], correct: 'not to drink' },
          { id: 'rs-rc-l3-10', sentence: 'She insisted, "You absolutely must come to my graduation ceremony." -> She insisted that I absolutely ___ to her graduation ceremony.', options: ['must come', 'had to come', 'should come'], correct: 'had to come' },
        ]
      },
      'reporting-verbs': {
        level1: [
          { id: 'rv-l1-1', sentence: 'He ____ that he was leaving.', options: ['said', 'told', 'asked'], correct: 'said' },
          { id: 'rv-l1-2', sentence: 'She ____ him to wait outside.', options: ['said', 'told', 'asked'], correct: 'told' },
          { id: 'rv-l1-3', sentence: 'They ____ if I wanted a drink.', options: ['said', 'told', 'asked'], correct: 'asked' },
          { id: 'rv-l1-4', sentence: 'He ____ to help me with my bags.', options: ['offered', 'suggested', 'warned'], correct: 'offered' },
          { id: 'rv-l1-5', sentence: 'She ____ going to the cinema.', options: ['offered', 'suggested', 'advised'], correct: 'suggested' },
          { id: 'rv-l1-6', sentence: 'The doctor ____ me to rest for a few days.', options: ['suggested', 'advised', 'promised'], correct: 'advised' },
          { id: 'rv-l1-7', sentence: 'He ____ not to touch the wet paint.', options: ['warned', 'promised', 'refused'], correct: 'warned' },
          { id: 'rv-l1-8', sentence: 'She ____ to callme later.', options: ['promised', 'refused', 'admitted'], correct: 'promised' },
          { id: 'rv-l1-9', sentence: 'They ____ to lend me any money.', options: ['refused', 'admitted', 'claimed'], correct: 'refused' },
          { id: 'rv-l1-10', sentence: 'He ____ breaking the window.', options: ['admitted', 'claimed', 'denied'], correct: 'admitted' },
        ],
        level2: [
          { id: 'rv-l2-1', sentence: 'She ____ that she had seen the accident.', options: ['claimed', 'denied', 'accused'], correct: 'claimed' },
          { id: 'rv-l2-2', sentence: 'He ____ taking the money from the safe.', options: ['denied', 'admitted', 'blamed'], correct: 'denied' },
          { id: 'rv-l2-3', sentence: 'The police ____ him of speeding.', options: ['accused', 'warned', 'suggested'], correct: 'accused' },
          { id: 'rv-l2-4', sentence: 'She ____ him for the mistake.', options: ['blamed', 'thanked', 'congratulated'], correct: 'blamed' },
          { id: 'rv-l2-5', sentence: 'He ____ her on passing her exam.', options: ['congratulated', 'apologized', 'invited'], correct: 'congratulated' },
          { id: 'rv-l2-6', sentence: 'She ____ for being late.', options: ['apologized', 'insisted', 'complained'], correct: 'apologized' },
          { id: 'rv-l2-7', sentence: 'He ____ on paying for the meal.', options: ['insisted', 'offered', 'refused'], correct: 'insisted' },
          { id: 'rv-l2-8', sentence: 'They ____ about the noisy neighbours.', options: ['complained', 'explained', 'reminded'], correct: 'complained' },
          { id: 'rv-l2-9', sentence: 'She ____ how the machine worked.', options: ['explained', 'promised', 'threatened'], correct: 'explained' },
          { id: 'rv-l2-10', sentence: 'He ____ me to lock the door.', options: ['reminded', 'threatened', 'invited'], correct: 'reminded' },
        ],
        level3: [
          { id: 'rv-l3-1', sentence: 'The politician ____ having any knowledge of the illegal activities.', options: ['denied', 'confessed', 'alleged'], correct: 'denied' },
          { id: 'rv-l3-2', sentence: 'She ____ that the company had misled its investors.', options: ['alleged', 'assured', 'boasted'], correct: 'alleged' },
          { id: 'rv-l3-3', sentence: 'He ____ his employees that their jobs were secure despite the rumors.', options: ['assured', 'confessed', 'objected'], correct: 'assured' },
          { id: 'rv-l3-4', sentence: 'The witness ____ to seeing the suspect leave the building.', options: ['confessed', 'testified', 'boasted'], correct: 'testified' },
          { id: 'rv-l3-5', sentence: 'He ____ about his achievements, which annoyed everyone.', options: ['boasted', 'objected', 'pledged'], correct: 'boasted' },
          { id: 'rv-l3-6', sentence: 'The lawyer ____ to the judge\'s ruling on the evidence.', options: ['objected', 'pledged', 'remarked'], correct: 'objected' },
          { id: 'rv-l3-7', sentence: 'The charity ____ to use all donations for the intended purpose.', options: ['pledged', 'remarked', 'retorted'], correct: 'pledged' },
          { id: 'rv-l3-8', sentence: 'She ____ that the weather was unusually warm for that time of year.', options: ['remarked', 'retorted', 'urged'], correct: 'remarked' },
          { id: 'rv-l3-9', sentence: 'When accused, he ____ angrily that he was innocent.', options: ['retorted', 'urged', 'vowed'], correct: 'retorted' },
          { id: 'rv-l3-10', sentence: 'The community leader ____ everyone to remain calm during the crisis.', options: ['urged', 'vowed', 'denied'], correct: 'urged' },
        ]
      },
    };

    export const reportedSpeechExercises = {};
    for (const topic in originalReportedSpeechExercises) {
      reportedSpeechExercises[topic] = processTopic(originalReportedSpeechExercises[topic]);
    }
  