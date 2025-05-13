
    import { generateDefaultLevel } from '@/data/exercise-helpers';

    export const statementsLevel1 = [
      { id: 'rs-s-l1-1', sentence: 'Direct: "I am happy." Reported: She said she ___ happy.', options: ['is', 'was', 'were'], correct: 'was' },
      { id: 'rs-s-l1-2', sentence: 'Direct: "We will go." Reported: They said they ___ go.', options: ['will', 'would', 'can'], correct: 'would' },
      { id: 'rs-s-l1-3', sentence: 'Direct: "He can swim." Reported: She told me he ___ swim.', options: ['can', 'could', 'may'], correct: 'could' },
      { id: 'rs-s-l1-4', sentence: 'Direct: "I live here." Reported: He said he lived ___.', options: ['here', 'there', 'that place'], correct: 'there' },
      { id: 'rs-s-l1-5', sentence: 'Direct: "She is studying." Reported: He said she ___ studying.', options: ['is', 'was', 'has been'], correct: 'was' },
      { id: 'rs-s-l1-6', sentence: 'Direct: "I saw a bird." Reported: She said she ___ a bird.', options: ['saw', 'had seen', 'sees'], correct: 'had seen' },
      { id: 'rs-s-l1-7', sentence: 'Direct: "We are playing." Reported: They told us they ___ playing.', options: ['are', 'were', 'will be'], correct: 'were' },
      { id: 'rs-s-l1-8', sentence: 'Direct: "I have finished." Reported: He said he ___ finished.', options: ['has', 'had', 'have'], correct: 'had' },
      { id: 'rs-s-l1-9', sentence: 'Direct: "This is my book." Reported: She said that ___ her book.', options: ['this is', 'that was', 'that is'], correct: 'that was' },
      { id: 'rs-s-l1-10', sentence: 'Direct: "I will call you tomorrow." Reported: He said he would call me the ___ day.', options: ['tomorrow', 'next', 'following'], correct: 'next' },
    ];

    export const statementsLevel2 = [
      { id: 'rs-s-l2-1', sentence: 'Direct: "I am working on a new project." Reported: He mentioned that he ___ on a new project.', options: ['is working', 'was working', 'has been working'], correct: 'was working' },
      { id: 'rs-s-l2-2', sentence: 'Direct: "We visited Paris last year." Reported: They told me they ___ Paris the ___ year.', options: ['visited / previous', 'had visited / previous', 'visited / last'], correct: 'had visited / previous' },
      { id: 'rs-s-l2-3', sentence: 'Direct: "She can speak three languages." Reported: I learned that she ___ speak three languages.', options: ['can', 'could', 'would'], correct: 'could' },
      { id: 'rs-s-l2-4', sentence: 'Direct: "I will be there by 5 PM." Reported: He promised he ___ there by 5 PM.', options: ['will be', 'would be', 'was going to be'], correct: 'would be' },
      { id: 'rs-s-l2-5', sentence: 'Direct: "I haven\'t seen this film yet." Reported: She admitted she ___ that film yet.', options: ['hasn\'t seen', 'hadn\'t seen', 'didn\'t see'], correct: 'hadn\'t seen' },
      { id: 'rs-s-l2-6', sentence: 'Direct: "These are my favorite shoes." Reported: He pointed out that those ___ his favorite shoes.', options: ['are', 'were', 'had been'], correct: 'were' },
      { id: 'rs-s-l2-7', sentence: 'Direct: "I must finish this report today." Reported: She insisted she ___ finish that report ___ day.', options: ['must / today', 'had to / that', 'must / that'], correct: 'had to / that' },
      { id: 'rs-s-l2-8', sentence: 'Direct: "We are planning a trip for next month." Reported: They announced they ___ a trip for the ___ month.', options: ['are planning / next', 'were planning / following', 'planned / next'], correct: 'were planning / following' },
      { id: 'rs-s-l2-9', sentence: 'Direct: "I may go to the party tonight." Reported: He said he ___ go to the party ___ night.', options: ['may / tonight', 'might / that', 'could / that'], correct: 'might / that' },
      { id: 'rs-s-l2-10', sentence: 'Direct: "I don\'t like spinach." Reported: She confessed she ___ spinach.', options: ['doesn\'t like', 'didn\'t like', 'hadn\'t liked'], correct: 'didn\'t like' },
    ];

    export const statementsLevel3 = [
      { id: 'rs-s-l3-1', sentence: 'Direct: "I\'ve been working here for five years." Reported: He stated that he ___ there for five years.', options: ['has been working', 'had been working', 'was working'], correct: 'had been working' },
      { id: 'rs-s-l3-2', sentence: 'Direct: "We were watching TV when the power went out." Reported: They explained they ___ TV when the power ___ out.', options: ['were watching / had gone', 'had been watching / went', 'were watching / went'], correct: 'had been watching / went' },
      { id: 'rs-s-l3-3', sentence: 'Direct: "If I had more time, I would travel more." Reported: She said if she ___ more time, she ___ travel more.', options: ['had / would', 'had had / would', 'had / would have'], correct: 'had / would' },
      { id: 'rs-s-l3-4', sentence: 'Direct: "I wish I had studied harder for the exam." Reported: He regretted that he ___ harder for the exam.', options: ['wished he studied', 'wished he had studied', 'had wished he studied'], correct: 'wished he had studied' },
      { id: 'rs-s-l3-5', sentence: 'Direct: "You should see a doctor about that cough." Reported: She advised me that I ___ a doctor about that cough.', options: ['should see', 'should have seen', 'had to see'], correct: 'should see' },
      { id: 'rs-s-l3-6', sentence: 'Direct: "This time next week, I will be relaxing on a beach." Reported: He boasted that ___ time the ___ week, he ___ relaxing on a beach.', options: ['that / following / would be', 'this / next / will be', 'that / next / would be'], correct: 'that / following / would be' },
      { id: 'rs-s-l3-7', sentence: 'Direct: "I wouldn\'t do that if I were you." Reported: She warned him that she ___ that if she ___ him.', options: ['wouldn\'t do / were', 'wouldn\'t have done / had been', 'wouldn\'t do / had been'], correct: 'wouldn\'t do / were' },
      { id: 'rs-s-l3-8', sentence: 'Direct: "I\'m going to start my own business next year." Reported: He announced his intention that he ___ his own business the ___ year.', options: ['was going to start / following', 'is going to start / next', 'would start / next'], correct: 'was going to start / following' },
      { id: 'rs-s-l3-9', sentence: 'Direct: "I must have left my umbrella on the bus." Reported: She thought she ___ her umbrella on the bus.', options: ['must have left', 'had to have left', 'must had left'], correct: 'must have left' },
      { id: 'rs-s-l3-10', sentence: 'Direct: "It\'s high time you started taking responsibility for your actions." Reported: His father told him it ___ high time he ___ taking responsibility for his actions.', options: ['was / started', 'is / started', 'was / had started'], correct: 'was / started' },
    ];

    export const questionsLevel1 = [
      { id: 'rs-q-l1-1', sentence: 'Direct: "Are you happy?" Reported: She asked me ___ I was happy.', options: ['if', 'that', 'whether if'], correct: 'if' },
      { id: 'rs-q-l1-2', sentence: 'Direct: "Where do you live?" Reported: He asked me where I ___.', options: ['live', 'lived', 'do live'], correct: 'lived' },
      { id: 'rs-q-l1-3', sentence: 'Direct: "Can you help me?" Reported: She asked if I ___ help her.', options: ['can', 'could', 'may'], correct: 'could' },
      { id: 'rs-q-l1-4', sentence: 'Direct: "What is your name?" Reported: He wanted to know what my name ___.', options: ['is', 'was', 'were'], correct: 'was' },
      { id: 'rs-q-l1-5', sentence: 'Direct: "Will you be there?" Reported: She asked ___ I would be there.', options: ['whether', 'that', 'if that'], correct: 'whether' },
      { id: 'rs-q-l1-6', sentence: 'Direct: "Did you see the film?" Reported: He asked if I ___ the film.', options: ['saw', 'had seen', 'did see'], correct: 'had seen' },
      { id: 'rs-q-l1-7', sentence: 'Direct: "When does the train leave?" Reported: She inquired when the train ___.', options: ['leaves', 'left', 'does leave'], correct: 'left' },
      { id: 'rs-q-l1-8', sentence: 'Direct: "Have you finished?" Reported: He asked whether I ___ finished.', options: ['have', 'had', 'did'], correct: 'had' },
      { id: 'rs-q-l1-9', sentence: 'Direct: "Why are you crying?" Reported: She asked me why I ___ crying.', options: ['am', 'was', 'were'], correct: 'was' },
      { id: 'rs-q-l1-10', sentence: 'Direct: "Is this your car?" Reported: He asked if that ___ my car.', options: ['is', 'was', 'were'], correct: 'was' },
    ];
    export const questionsLevel2 = [
      { id: 'rs-q-l2-1', sentence: 'Direct: "What time does the bank open?" Reported: I asked what time the bank ___.', options: ['opens', 'opened', 'did open'], correct: 'opened' },
      { id: 'rs-q-l2-2', sentence: 'Direct: "Have you ever been to Australia?" Reported: She wondered if I ___ ever ___ to Australia.', options: ['have / been', 'had / been', 'did / go'], correct: 'had / been' },
      { id: 'rs-q-l2-3', sentence: 'Direct: "Why didn\'t you call me yesterday?" Reported: He asked me why I ___ him the ___ day.', options: ['didn\'t call / yesterday', 'hadn\'t called / previous', 'didn\'t call / previous'], correct: 'hadn\'t called / previous' },
      { id: 'rs-q-l2-4', sentence: 'Direct: "Can you lend me some money until tomorrow?" Reported: She asked if I ___ lend her some money until the ___ day.', options: ['can / next', 'could / following', 'could / tomorrow'], correct: 'could / following' },
      { id: 'rs-q-l2-5', sentence: 'Direct: "Where will you be staying on your holiday?" Reported: They inquired where I ___ on my holiday.', options: ['will be staying', 'would be staying', 'was staying'], correct: 'would be staying' },
      { id: 'rs-q-l2-6', sentence: 'Direct: "Are you going to apply for the job?" Reported: He wanted to know ___ I ___ going to apply for the job.', options: ['if / was', 'that / was', 'whether / am'], correct: 'if / was' },
      { id: 'rs-q-l2-7', sentence: 'Direct: "How long have you been waiting here?" Reported: She asked how long I ___ waiting there.', options: ['have been', 'had been', 'was'], correct: 'had been' },
      { id: 'rs-q-l2-8', sentence: 'Direct: "Must I complete this form now?" Reported: He asked if he ___ complete that form then.', options: ['must', 'had to', 'should'], correct: 'had to' },
      { id: 'rs-q-l2-9', sentence: 'Direct: "Whose bag is this on the table?" Reported: She asked whose bag that ___ on the table.', options: ['is', 'was', 'had been'], correct: 'was' },
      { id: 'rs-q-l2-10', sentence: 'Direct: "Do you prefer tea or coffee in the morning?" Reported: He asked me ___ I ___ tea or coffee in the morning.', options: ['if / preferred', 'that / preferred', 'whether / prefer'], correct: 'if / preferred' },
    ];
    export const questionsLevel3 = [
      { id: 'rs-q-l3-1', sentence: 'Direct: "Who has been using my computer without permission?" Reported: He demanded to know who ___ his computer without permission.', options: ['has been using', 'had been using', 'was using'], correct: 'had been using' },
      { id: 'rs-q-l3-2', sentence: 'Direct: "What were you doing at 3 PM yesterday?" Reported: The detective asked the suspect what he ___ at 3 PM the ___ day.', options: ['were doing / yesterday', 'had been doing / previous', 'was doing / previous'], correct: 'had been doing / previous' },
      { id: 'rs-q-l3-3', sentence: 'Direct: "Shall we postpone the meeting until next week?" Reported: She asked if they ___ postpone the meeting until the ___ week.', options: ['shall / next', 'should / following', 'would / next'], correct: 'should / following' },
      { id: 'rs-q-l3-4', sentence: 'Direct: "How often do you go to the gym?" Reported: My doctor inquired how often I ___ to the gym.', options: ['go', 'went', 'had gone'], correct: 'went' },
      { id: 'rs-q-l3-5', sentence: 'Direct: "Is there anything else I can do for you?" Reported: The assistant asked if there ___ anything else she ___ do for me.', options: ['is / can', 'was / could', 'was / can'], correct: 'was / could' },
      { id: 'rs-q-l3-6', sentence: 'Direct: "Which book did you choose in the end?" Reported: He wanted to know which book I ___ in the end.', options: ['chose', 'had chosen', 'did choose'], correct: 'had chosen' },
      { id: 'rs-q-l3-7', sentence: 'Direct: "May I leave the room for a moment?" Reported: The student asked if he ___ leave the room for a moment.', options: ['may', 'might', 'could'], correct: 'might' },
      { id: 'rs-q-l3-8', sentence: 'Direct: "Haven\'t we met somewhere before?" Reported: She asked if we ___ somewhere before.', options: ['haven\'t met', 'hadn\'t met', 'didn\'t meet'], correct: 'hadn\'t met' },
      { id: 'rs-q-l3-9', sentence: 'Direct: "What would you do if you won the lottery?" Reported: He asked me what I ___ if I ___ the lottery.', options: ['would do / won', 'would have done / had won', 'would do / had won'], correct: 'would do / won' },
      { id: 'rs-q-l3-10', sentence: 'Direct: "Could you tell me where the nearest post office is?" Reported: A tourist asked me if I ___ tell him where the nearest post office ___ .', options: ['could / was', 'can / is', 'could / is'], correct: 'could / was' },
    ];

    export const requestsCommandsLevel1 = [
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
    ];
    export const requestsCommandsLevel2 = [
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
    ];
    export const requestsCommandsLevel3 = [
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
    ];

    export const reportingVerbsLevel1 = generateDefaultLevel('reporting-verbs', 10, 1);
    export const reportingVerbsLevel2 = generateDefaultLevel('reporting-verbs', 10, 2);
    export const reportingVerbsLevel3 = generateDefaultLevel('reporting-verbs', 10, 3);
  