
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

    const originalPassiveVoiceExercises = {
      'passive-voice-present-simple': { 
        level1: [
          { id: 'pvps-l1-1', sentence: 'English ___ (speak) all over the world.', options: ['speaks', 'is spoken', 'spoken'], correct: 'is spoken' },
          { id: 'pvps-l1-2', sentence: 'This book ___ (write) by a famous author.', options: ['writes', 'is written', 'written'], correct: 'is written' },
          { id: 'pvps-l1-3', sentence: 'Many emails ___ (send) every day.', options: ['send', 'are sent', 'sent'], correct: 'are sent' },
          { id: 'pvps-l1-4', sentence: 'The museum ___ (visit) by thousands of tourists each year.', options: ['visits', 'is visited', 'visited'], correct: 'is visited' },
          { id: 'pvps-l1-5', sentence: 'Rice ___ (grow) in many Asian countries.', options: ['grows', 'is grown', 'grown'], correct: 'is grown' },
          { id: 'pvps-l1-6', sentence: 'These cars ___ (make) in Germany.', options: ['make', 'are made', 'made'], correct: 'are made' },
          { id: 'pvps-l1-7', sentence: 'Football ___ (play) in almost every country.', options: ['plays', 'is played', 'played'], correct: 'is played' },
          { id: 'pvps-l1-8', sentence: 'The windows ___ (clean) once a month.', options: ['clean', 'are cleaned', 'cleaned'], correct: 'are cleaned' },
          { id: 'pvps-l1-9', sentence: 'How ___ this word ___ (pronounce)?', options: ['does / pronounce', 'is / pronounced', 'do / pronounce'], correct: 'is / pronounced' },
          { id: 'pvps-l1-10', sentence: 'Coffee ___ (produce) mainly in South America.', options: ['produces', 'is produced', 'produced'], correct: 'is produced' },
        ],
        level2: [
          { id: 'pvps-l2-1', sentence: 'Millions of photos ___ (upload) to social media every day.', options: ['upload', 'are uploaded', 'uploaded'], correct: 'are uploaded' },
          { id: 'pvps-l2-2', sentence: 'This software ___ (use) by companies worldwide.', options: ['uses', 'is used', 'used'], correct: 'is used' },
          { id: 'pvps-l2-3', sentence: 'The news ___ (broadcast) on TV every evening at 6 PM.', options: ['broadcasts', 'is broadcast', 'broadcasted'], correct: 'is broadcast' },
          { id: 'pvps-l2-4', sentence: 'Are these products ___ (test) for safety before being sold?', options: ['test', 'tested', 'testing'], correct: 'tested' },
          { id: 'pvps-l2-5', sentence: 'Many languages ___ (teach) at this university.', options: ['teach', 'are taught', 'taught'], correct: 'are taught' },
          { id: 'pvps-l2-6', sentence: 'The office ___ (not clean) on weekends.', options: ['doesn\'t clean', 'isn\'t cleaned', 'not cleaned'], correct: 'isn\'t cleaned' },
          { id: 'pvps-l2-7', sentence: 'What kind of materials ___ (recycle) in your city?', options: ['do recycle', 'are recycled', 'recycle'], correct: 'are recycled' },
          { id: 'pvps-l2-8', sentence: 'This famous painting ___ (keep) in a secure vault.', options: ['keeps', 'is kept', 'kept'], correct: 'is kept' },
          { id: 'pvps-l2-9', sentence: 'Personal information ___ (collect) by many websites.', options: ['collects', 'is collected', 'collected'], correct: 'is collected' },
          { id: 'pvps-l2-10', sentence: 'How often ___ the bins ___ (empty)?', options: ['do / empty', 'are / emptied', 'does / empty'], correct: 'are / emptied' },
        ],
        level3: [
          { id: 'pvps-l3-1', sentence: 'New regulations ___ (implement) to control pollution.', options: ['implement', 'are implemented', 'implemented'], correct: 'are implemented' },
          { id: 'pvps-l3-2', sentence: 'This type of fabric ___ (not recommend) for outdoor use.', options: ['doesn\'t recommend', 'isn\'t recommended', 'not recommended'], correct: 'isn\'t recommended' },
          { id: 'pvps-l3-3', sentence: 'Why ___ these important decisions ___ (make) without consultation?', options: ['do / make', 'are / made', 'does / make'], correct: 'are / made' },
          { id: 'pvps-l3-4', sentence: 'The ancient ruins ___ (preserve) carefully by archaeologists.', options: ['preserve', 'are preserved', 'preserved'], correct: 'are preserved' },
          { id: 'pvps-l3-5', sentence: 'A lot of energy ___ (consume) by household appliances.', options: ['consumes', 'is consumed', 'consumed'], correct: 'is consumed' },
          { id: 'pvps-l3-6', sentence: 'Are renewable energy sources ___ (promote) enough by the government?', options: ['promote', 'promoted', 'promoting'], correct: 'promoted' },
          { id: 'pvps-l3-7', sentence: 'This particular brand of coffee ___ (sell) in most supermarkets.', options: ['sells', 'is sold', 'sold'], correct: 'is sold' },
          { id: 'pvps-l3-8', sentence: 'The local library ___ (fund) by the city council.', options: ['funds', 'is funded', 'funded'], correct: 'is funded' },
          { id: 'pvps-l3-9', sentence: 'How ___ the quality of these products ___ (ensure)?', options: ['does / ensure', 'is / ensured', 'do / ensure'], correct: 'is / ensured' },
          { id: 'pvps-l3-10', sentence: 'Thousands of trees ___ (plant) each year to combat deforestation.', options: ['plant', 'are planted', 'planted'], correct: 'are planted' },
        ]
      },
      'passive-voice-past-simple': {
        level1: [
          { id: 'pvpast-s-l1-1', sentence: 'The Mona Lisa ___ (paint) by Leonardo da Vinci.', options: ['painted', 'was painted', 'is painted'], correct: 'was painted' },
          { id: 'pvpast-s-l1-2', sentence: 'My car ___ (steal) last night.', options: ['stole', 'was stolen', 'is stolen'], correct: 'was stolen' },
          { id: 'pvpast-s-l1-3', sentence: 'These houses ___ (build) in the 1950s.', options: ['built', 'were built', 'are built'], correct: 'were built' },
          { id: 'pvpast-s-l1-4', sentence: 'The letter ___ (send) yesterday.', options: ['sent', 'was sent', 'is sent'], correct: 'was sent' },
          { id: 'pvpast-s-l1-5', sentence: 'America ___ (discover) by Columbus in 1492.', options: ['discovered', 'was discovered', 'is discovered'], correct: 'was discovered' },
          { id: 'pvpast-s-l1-6', sentence: 'The cake ___ (eat) before I arrived.', options: ['ate', 'was eaten', 'is eaten'], correct: 'was eaten' },
          { id: 'pvpast-s-l1-7', sentence: 'When ___ the telephone ___ (invent)?', options: ['did / invent', 'was / invented', 'is / invented'], correct: 'was / invented' },
          { id: 'pvpast-s-l1-8', sentence: 'The results ___ (announce) this morning.', options: ['announced', 'were announced', 'are announced'], correct: 'were announced' },
          { id: 'pvpast-s-l1-9', sentence: 'He ___ (injure) in the accident.', options: ['injured', 'was injured', 'is injured'], correct: 'was injured' },
          { id: 'pvpast-s-l1-10', sentence: 'The movie ___ (direct) by Quentin Tarantino.', options: ['directed', 'was directed', 'is directed'], correct: 'was directed' },
        ],
        level2: [
          { id: 'pvpast-s-l2-1', sentence: 'The old bridge ___ (destroy) in the storm last year.', options: ['destroyed', 'was destroyed', 'is destroyed'], correct: 'was destroyed' },
          { id: 'pvpast-s-l2-2', sentence: 'The first Olympic Games ___ (hold) in ancient Greece.', options: ['held', 'were held', 'are held'], correct: 'were held' },
          { id: 'pvpast-s-l2-3', sentence: 'This book ___ (translate) into many languages.', options: ['translated', 'was translated', 'is translated'], correct: 'was translated' },
          { id: 'pvpast-s-l2-4', sentence: 'Were the windows ___ (break) by the wind?', options: ['break', 'broken', 'breaking'], correct: 'broken' },
          { id: 'pvpast-s-l2-5', sentence: 'The pyramids ___ (build) by the ancient Egyptians.', options: ['built', 'were built', 'are built'], correct: 'were built' },
          { id: 'pvpast-s-l2-6', sentence: 'The thief ___ (not catch) by the police yesterday.', options: ['didn\'t catch', 'wasn\'t caught', 'not caught'], correct: 'wasn\'t caught' },
          { id: 'pvpast-s-l2-7', sentence: 'What ___ (discuss) in the meeting last Monday?', options: ['did discuss', 'was discussed', 'discussed'], correct: 'was discussed' },
          { id: 'pvpast-s-l2-8', sentence: 'The winning goal ___ (score) in the last minute of the match.', options: ['scored', 'was scored', 'is scored'], correct: 'was scored' },
          { id: 'pvpast-s-l2-9', sentence: 'These photos ___ (take) during my holiday in Italy.', options: ['took', 'were taken', 'are taken'], correct: 'were taken' },
          { id: 'pvpast-s-l2-10', sentence: 'The suspect ___ (question) by detectives for several hours.', options: ['questioned', 'was questioned', 'is questioned'], correct: 'was questioned' },
        ],
        level3: [
          { id: 'pvpast-s-l3-1', sentence: 'The city ___ (found) by the Romans over two thousand years ago.', options: ['founded', 'was founded', 'is founded'], correct: 'was founded' },
          { id: 'pvpast-s-l3-2', sentence: 'Many important documents ___ (lose) in the fire.', options: ['lost', 'were lost', 'are lost'], correct: 'were lost' },
          { id: 'pvpast-s-l3-3', sentence: 'The new law ___ (pass) by parliament last month.', options: ['passed', 'was passed', 'is passed'], correct: 'was passed' },
          { id: 'pvpast-s-l3-4', sentence: 'Why ___ the concert ___ (cancel) at the last minute?', options: ['did / cancel', 'was / cancelled', 'is / cancelled'], correct: 'was / cancelled' },
          { id: 'pvpast-s-l3-5', sentence: 'The stolen painting ___ (not recover) by the authorities.', options: ['didn\'t recover', 'wasn\'t recovered', 'not recovered'], correct: 'wasn\'t recovered' },
          { id: 'pvpast-s-l3-6', sentence: 'This ancient manuscript ___ (write) on papyrus.', options: ['wrote', 'was written', 'is written'], correct: 'was written' },
          { id: 'pvpast-s-l3-7', sentence: 'The criminal ___ (sentence) to ten years in prison.', options: ['sentenced', 'was sentenced', 'is sentenced'], correct: 'was sentenced' },
          { id: 'pvpast-s-l3-8', sentence: 'Were these artifacts ___ (discover) during the excavation?', options: ['discover', 'discovered', 'discovering'], correct: 'discovered' },
          { id: 'pvpast-s-l3-9', sentence: 'The famous bridge ___ (design) by a renowned architect.', options: ['designed', 'was designed', 'is designed'], correct: 'was designed' },
          { id: 'pvpast-s-l3-10', sentence: 'The decision ___ (make) after careful consideration of all factors.', options: ['made', 'was made', 'is made'], correct: 'was made' },
        ]
      },
      'passive-voice-present-continuous': {
        level1: [
          { id: 'pvpc-l1-1', sentence: 'The house ___ (paint) right now.', options: ['is painting', 'is being painted', 'paints'], correct: 'is being painted' },
          { id: 'pvpc-l1-2', sentence: 'My car ___ (repair) at the moment.', options: ['is repairing', 'is being repaired', 'repairs'], correct: 'is being repaired' },
          { id: 'pvpc-l1-3', sentence: 'New computers ___ (install) in the office this week.', options: ['are installing', 'are being installed', 'install'], correct: 'are being installed' },
          { id: 'pvpc-l1-4', sentence: 'Dinner ___ (cook) as we speak.', options: ['is cooking', 'is being cooked', 'cooks'], correct: 'is being cooked' },
          { id: 'pvpc-l1-5', sentence: 'The road ___ (close) due to construction.', options: ['is closing', 'is being closed', 'closes'], correct: 'is being closed' },
          { id: 'pvpc-l1-6', sentence: 'Are the emails ___ (send) now?', options: ['sending', 'being sent', 'sent'], correct: 'being sent' },
          { id: 'pvpc-l1-7', sentence: 'The problem ___ (discuss) in the meeting.', options: ['is discussing', 'is being discussed', 'discusses'], correct: 'is being discussed' },
          { id: 'pvpc-l1-8', sentence: 'Your order ___ (process).', options: ['is processing', 'is being processed', 'processes'], correct: 'is being processed' },
          { id: 'pvpc-l1-9', sentence: 'Why ___ the bridge ___ (repair)?', options: ['is / repairing', 'is / being repaired', 'does / repair'], correct: 'is / being repaired' },
          { id: 'pvpc-l1-10', sentence: 'The rooms ___ (clean) by the staff.', options: ['are cleaning', 'are being cleaned', 'clean'], correct: 'are being cleaned' },
        ],
        level2: [
          { id: 'pvpc-l2-1', sentence: 'A new shopping mall ___ (construct) downtown.', options: ['is constructing', 'is being constructed', 'constructs'], correct: 'is being constructed' },
          { id: 'pvpc-l2-2', sentence: 'The final preparations for the event ___ (make) as we speak.', options: ['are making', 'are being made', 'make'], correct: 'are being made' },
          { id: 'pvpc-l2-3', sentence: 'Why ___ the old building ___ (demolish)?', options: ['is / demolishing', 'is / being demolished', 'does / demolish'], correct: 'is / being demolished' },
          { id: 'pvpc-l2-4', sentence: 'The patient ___ (monitor) closely by the doctors.', options: ['is monitoring', 'is being monitored', 'monitors'], correct: 'is being monitored' },
          { id: 'pvpc-l2-5', sentence: 'These issues ___ (address) by the committee at the moment.', options: ['are addressing', 'are being addressed', 'address'], correct: 'are being addressed' },
          { id: 'pvpc-l2-6', sentence: 'Is the software ___ (update) on all computers now?', options: ['updating', 'being updated', 'updated'], correct: 'being updated' },
          { id: 'pvpc-l2-7', sentence: 'The garden ___ (not water) today because it looks like rain.', options: ['isn\'t watering', 'isn\'t being watered', 'doesn\'t water'], correct: 'isn\'t being watered' },
          { id: 'pvpc-l2-8', sentence: 'What changes ___ (implement) in the company this month?', options: ['are implementing', 'are being implemented', 'implement'], correct: 'are being implemented' },
          { id: 'pvpc-l2-9', sentence: 'The children ___ (teach) how to swim by a qualified instructor.', options: ['are teaching', 'are being taught', 'teach'], correct: 'are being taught' },
          { id: 'pvpc-l2-10', sentence: 'Your application ___ (review) by our team.', options: ['is reviewing', 'is being reviewed', 'reviews'], correct: 'is being reviewed' },
        ],
        level3: [
          { id: 'pvpc-l3-1', sentence: 'The entire system ___ (overhaul) to improve efficiency.', options: ['is overhauling', 'is being overhauled', 'overhauls'], correct: 'is being overhauled' },
          { id: 'pvpc-l3-2', sentence: 'New safety measures ___ (introduce) across all departments.', options: ['are introducing', 'are being introduced', 'introduce'], correct: 'are being introduced' },
          { id: 'pvpc-l3-3', sentence: 'Why ___ so much attention ___ (pay) to this minor issue?', options: ['is / paying', 'is / being paid', 'does / pay'], correct: 'is / being paid' },
          { id: 'pvpc-l3-4', sentence: 'The historical documents ___ (digitize) to preserve them.', options: ['are digitizing', 'are being digitized', 'digitize'], correct: 'are being digitized' },
          { id: 'pvpc-l3-5', sentence: 'The investigation ___ (conduct) by an independent body.', options: ['is conducting', 'is being conducted', 'conducts'], correct: 'is being conducted' },
          { id: 'pvpc-l3-6', sentence: 'Are the results ___ (analyze) by experts as we speak?', options: ['analyzing', 'being analyzed', 'analyzed'], correct: 'being analyzed' },
          { id: 'pvpc-l3-7', sentence: 'The old bridge ___ (not use) while it ___ (inspect) for safety.', options: ['isn\'t using / is being inspected', 'isn\'t being used / is being inspected', 'doesn\'t use / inspects'], correct: 'isn\'t being used / is being inspected' },
          { id: 'pvpc-l3-8', sentence: 'What steps ___ (take) to reduce the company\'s carbon footprint?', options: ['are taking', 'are being taken', 'take'], correct: 'are being taken' },
          { id: 'pvpc-l3-9', sentence: 'The employees ___ (train) on the new software this week.', options: ['are training', 'are being trained', 'train'], correct: 'are being trained' },
          { id: 'pvpc-l3-10', sentence: 'Your feedback ___ (consider) for future improvements.', options: ['is considering', 'is being considered', 'considers'], correct: 'is being considered' },
        ]
      },
      'passive-voice-past-continuous': {
        level1: [
          { id: 'pvpastc-l1-1', sentence: 'The house ___ (paint) when I arrived.', options: ['was painting', 'was being painted', 'painted'], correct: 'was being painted' },
          { id: 'pvpastc-l1-2', sentence: 'My car ___ (repair) yesterday morning.', options: ['was repairing', 'was being repaired', 'repaired'], correct: 'was being repaired' },
          { id: 'pvpastc-l1-3', sentence: 'The documents ___ (print) while we waited.', options: ['were printing', 'were being printed', 'printed'], correct: 'were being printed' },
          { id: 'pvpastc-l1-4', sentence: 'Dinner ___ (serve) when the guests arrived.', options: ['was serving', 'was being served', 'served'], correct: 'was being served' },
          { id: 'pvpastc-l1-5', sentence: 'The road ___ (resurface) last week.', options: ['was resurfacing', 'was being resurfaced', 'resurfaced'], correct: 'was being resurfaced' },
          { id: 'pvpastc-l1-6', sentence: 'Were the emails ___ (write) when you called?', options: ['writing', 'being written', 'written'], correct: 'being written' },
          { id: 'pvpastc-l1-7', sentence: 'The issue ___ (investigate) by the police.', options: ['was investigating', 'was being investigated', 'investigated'], correct: 'was being investigated' },
          { id: 'pvpastc-l1-8', sentence: 'The stadium ___ (build) during that time.', options: ['was building', 'was being built', 'built'], correct: 'was being built' },
          { id: 'pvpastc-l1-9', sentence: 'What ___ (discuss) when you entered the room?', options: ['was discussing', 'was being discussed', 'discussed'], correct: 'was being discussed' },
          { id: 'pvpastc-l1-10', sentence: 'The rooms ___ (clean) when the fire alarm rang.', options: ['were cleaning', 'were being cleaned', 'cleaned'], correct: 'were being cleaned' },
        ],
        level2: [
          { id: 'pvpastc-l2-1', sentence: 'The old theater ___ (renovate) when the fire broke out.', options: ['was renovating', 'was being renovated', 'renovated'], correct: 'was being renovated' },
          { id: 'pvpastc-l2-2', sentence: 'The suspect ___ (follow) by detectives for several days before the arrest.', options: ['was following', 'was being followed', 'followed'], correct: 'was being followed' },
          { id: 'pvpastc-l2-3', sentence: 'Why ___ the children ___ (supervise) while they were playing near the water?', options: ['weren\'t / supervising', 'weren\'t / being supervised', 'didn\'t / supervise'], correct: 'weren\'t / being supervised' },
          { id: 'pvpastc-l2-4', sentence: 'The evidence ___ (examine) by forensic experts when the lawyer arrived.', options: ['was examining', 'was being examined', 'examined'], correct: 'was being examined' },
          { id: 'pvpastc-l2-5', sentence: 'New policies ___ (discuss) by the board members during the entire meeting.', options: ['were discussing', 'were being discussed', 'discussed'], correct: 'were being discussed' },
          { id: 'pvpastc-l2-6', sentence: 'Was the package ___ (deliver) when you were out?', options: ['delivering', 'being delivered', 'delivered'], correct: 'being delivered' },
          { id: 'pvpastc-l2-7', sentence: 'The bridge ___ (not repair) properly, which is why it collapsed.', options: ['wasn\'t repairing', 'wasn\'t being repaired', 'didn\'t repair'], correct: 'wasn\'t being repaired' },
          { id: 'pvpastc-l2-8', sentence: 'What ___ (broadcast) on television when the power went out?', options: ['was broadcasting', 'was being broadcast', 'broadcasted'], correct: 'was being broadcast' },
          { id: 'pvpastc-l2-9', sentence: 'The victims of the flood ___ (help) by volunteers.', options: ['were helping', 'were being helped', 'helped'], correct: 'were being helped' },
          { id: 'pvpastc-l2-10', sentence: 'Your car ___ (tow) away because it was parked illegally.', options: ['was towing', 'was being towed', 'towed'], correct: 'was being towed' },
        ],
        level3: [
          { id: 'pvpastc-l3-1', sentence: 'The ancient city ___ (excavate) by archaeologists when a new discovery was made.', options: ['was excavating', 'was being excavated', 'excavated'], correct: 'was being excavated' },
          { id: 'pvpastc-l3-2', sentence: 'Sensitive information ___ (leak) to the press while the investigation was ongoing.', options: ['was leaking', 'was being leaked', 'leaked'], correct: 'was being leaked' },
          { id: 'pvpastc-l3-3', sentence: 'Why ___ the crucial data ___ (not back up) while the system was under maintenance?', options: ['wasn\'t / backing up', 'wasn\'t / being backed up', 'didn\'t / back up'], correct: 'wasn\'t / being backed up' },
          { id: 'pvpastc-l3-4', sentence: 'The masterpiece ___ (restore) by experts when it was accidentally damaged.', options: ['was restoring', 'was being restored', 'restored'], correct: 'was being restored' },
          { id: 'pvpastc-l3-5', sentence: 'New strategies ___ (develop) by the team when the project funding was cut.', options: ['were developing', 'were being developed', 'developed'], correct: 'were being developed' },
          { id: 'pvpastc-l3-6', sentence: 'Were the hostages ___ (negotiate) for when the special forces moved in?', options: ['negotiating', 'being negotiated', 'negotiated'], correct: 'being negotiated' },
          { id: 'pvpastc-l3-7', sentence: 'The company\'s finances ___ (not audit) properly, which led to the scandal.', options: ['weren\'t auditing', 'weren\'t being audited', 'didn\'t audit'], correct: 'weren\'t being audited' },
          { id: 'pvpastc-l3-8', sentence: 'What security measures ___ (implement) while the VIPs were visiting?', options: ['were implementing', 'were being implemented', 'implemented'], correct: 'were being implemented' },
          { id: 'pvpastc-l3-9', sentence: 'The rare animals ___ (track) by conservationists using GPS technology.', options: ['were tracking', 'were being tracked', 'tracked'], correct: 'were being tracked' },
          { id: 'pvpastc-l3-10', sentence: 'Your complaint ___ (process) by customer service when you called again.', options: ['was processing', 'was being processed', 'processed'], correct: 'was being processed' },
        ]
      },
      'passive-voice-present-perfect': {
        level1: [
          { id: 'pvpp-l1-1', sentence: 'The work ___ just ___ (finish).', options: ['has / finished', 'has / been finished', 'is / finished'], correct: 'has / been finished' },
          { id: 'pvpp-l1-2', sentence: 'My keys ___ (steal)!', options: ['have stolen', 'have been stolen', 'are stolen'], correct: 'have been stolen' },
          { id: 'pvpp-l1-3', sentence: 'Many trees ___ (plant) recently.', options: ['have planted', 'have been planted', 'are planted'], correct: 'have been planted' },
          { id: 'pvpp-l1-4', sentence: 'The results ___ already ___ (publish).', options: ['have / published', 'have / been published', 'are / published'], correct: 'have / been published' },
          { id: 'pvpp-l1-5', sentence: 'This song ___ (hear) by millions of people.', options: ['has heard', 'has been heard', 'is heard'], correct: 'has been heard' },
          { id: 'pvpp-l1-6', sentence: 'Have the invitations ___ (send) yet?', options: ['sent', 'been sent', 'sending'], correct: 'been sent' },
          { id: 'pvpp-l1-7', sentence: 'The criminal ___ (catch) by the police.', options: ['has caught', 'has been caught', 'is caught'], correct: 'has been caught' },
          { id: 'pvpp-l1-8', sentence: 'A decision ___ (not make) yet.', options: ['hasn\'t made', 'hasn\'t been made', 'isn\'t made'], correct: 'hasn\'t been made' },
          { id: 'pvpp-l1-9', sentence: 'How many times ___ this film ___ (show)?', options: ['has / shown', 'has / been shown', 'is / shown'], correct: 'has / been shown' },
          { id: 'pvpp-l1-10', sentence: 'Your package ___ (deliver).', options: ['has delivered', 'has been delivered', 'is delivered'], correct: 'has been delivered' },
        ],
        level2: [
          { id: 'pvpp-l2-1', sentence: 'The old building ___ finally ___ (demolish).', options: ['has / demolished', 'has / been demolished', 'is / demolished'], correct: 'has / been demolished' },
          { id: 'pvpp-l2-2', sentence: 'Several new species ___ (discover) in the rainforest this year.', options: ['have discovered', 'have been discovered', 'are discovered'], correct: 'have been discovered' },
          { id: 'pvpp-l2-3', sentence: 'The problem ___ (not solve) yet, despite many attempts.', options: ['hasn\'t solved', 'hasn\'t been solved', 'isn\'t solved'], correct: 'hasn\'t been solved' },
          { id: 'pvpp-l2-4', sentence: 'Has the report ___ (submit) to the manager?', options: ['submitted', 'been submitted', 'submitting'], correct: 'been submitted' },
          { id: 'pvpp-l2-5', sentence: 'This theory ___ (discuss) extensively in academic circles.', options: ['has discussed', 'has been discussed', 'is discussed'], correct: 'has been discussed' },
          { id: 'pvpp-l2-6', sentence: 'All the tickets for the concert ___ (sell out).', options: ['have sold out', 'have been sold out', 'are sold out'], correct: 'have been sold out' },
          { id: 'pvpp-l2-7', sentence: 'The missing child ___ (find) safe and sound.', options: ['has found', 'has been found', 'is found'], correct: 'has been found' },
          { id: 'pvpp-l2-8', sentence: 'How many awards ___ this film ___ (win) so far?', options: ['has / won', 'has / been won', 'is / won'], correct: 'has / been won' },
          { id: 'pvpp-l2-9', sentence: 'Your request ___ (process) and a confirmation email will be sent.', options: ['has processed', 'has been processed', 'is processed'], correct: 'has been processed' },
          { id: 'pvpp-l2-10', sentence: 'The company\'s profits ___ (increase) significantly this quarter.', options: ['have increased', 'have been increased', 'are increased'], correct: 'have been increased' },
        ],
        level3: [
          { id: 'pvpp-l3-1', sentence: 'Significant progress ___ (make) in the peace negotiations.', options: ['has made', 'has been made', 'is made'], correct: 'has been made' },
          { id: 'pvpp-l3-2', sentence: 'The ancient artifact ___ (preserve) carefully for centuries.', options: ['has preserved', 'has been preserved', 'is preserved'], correct: 'has been preserved' },
          { id: 'pvpp-l3-3', sentence: 'Why ___ this important issue ___ (not address) by the authorities yet?', options: ['hasn\'t / addressed', 'hasn\'t / been addressed', 'isn\'t / addressed'], correct: 'hasn\'t / been addressed' },
          { id: 'pvpp-l3-4', sentence: 'The new software update ___ (install) on all company computers.', options: ['has installed', 'has been installed', 'is installed'], correct: 'has been installed' },
          { id: 'pvpp-l3-5', sentence: 'A cure for the disease ___ (not find) yet, but research continues.', options: ['hasn\'t found', 'hasn\'t been found', 'isn\'t found'], correct: 'hasn\'t been found' },
          { id: 'pvpp-l3-6', sentence: 'Have all the necessary precautions ___ (take) before the experiment?', options: ['taken', 'been taken', 'taking'], correct: 'been taken' },
          { id: 'pvpp-l3-7', sentence: 'The stolen artwork ___ (recover) by international police forces.', options: ['has recovered', 'has been recovered', 'is recovered'], correct: 'has been recovered' },
          { id: 'pvpp-l3-8', sentence: 'How many times ___ this procedure ___ (perform) successfully?', options: ['has / performed', 'has / been performed', 'is / performed'], correct: 'has / been performed' },
          { id: 'pvpp-l3-9', sentence: 'Your concerns ___ (note) and will be discussed at the next meeting.', options: ['have noted', 'have been noted', 'are noted'], correct: 'have been noted' },
          { id: 'pvpp-l3-10', sentence: 'The bridge\'s structural integrity ___ (test) recently.', options: ['has tested', 'has been tested', 'is tested'], correct: 'has been tested' },
        ]
      },
      'passive-voice-past-perfect': {
        level1: [
          { id: 'pvpastp-l1-1', sentence: 'The work ___ (finish) before I arrived.', options: ['had finished', 'had been finished', 'was finished'], correct: 'had been finished' },
          { id: 'pvpastp-l1-2', sentence: 'He said his wallet ___ (steal).', options: ['had stolen', 'had been stolen', 'was stolen'], correct: 'had been stolen' },
          { id: 'pvpastp-l1-3', sentence: 'The house ___ (build) before they moved in.', options: ['had built', 'had been built', 'was built'], correct: 'had been built' },
          { id: 'pvpastp-l1-4', sentence: 'By the time we arrived, the food ___ (eat).', options: ['had eaten', 'had been eaten', 'was eaten'], correct: 'had been eaten' },
          { id: 'pvpastp-l1-5', sentence: 'The letter ___ (write) before she left.', options: ['had written', 'had been written', 'was written'], correct: 'had been written' },
          { id: 'pvpastp-l1-6', sentence: 'Had the car ___ (repair) before you sold it?', options: ['repaired', 'been repaired', 'repairing'], correct: 'been repaired' },
          { id: 'pvpastp-l1-7', sentence: 'The problem ___ (solve) before the manager knew.', options: ['had solved', 'had been solved', 'was solved'], correct: 'had been solved' },
          { id: 'pvpastp-l1-8', sentence: 'The windows ___ (not clean) when I got there.', options: ['hadn\'t cleaned', 'hadn\'t been cleaned', 'weren\'t cleaned'], correct: 'hadn\'t been cleaned' },
          { id: 'pvpastp-l1-9', sentence: 'She realized the mistake ___ (make) earlier.', options: ['had made', 'had been made', 'was made'], correct: 'had been made' },
          { id: 'pvpastp-l1-10', sentence: 'The tickets ___ (book) weeks in advance.', options: ['had booked', 'had been booked', 'were booked'], correct: 'had been booked' },
        ],
        level2: [
          { id: 'pvpastp-l2-1', sentence: 'By the time the police arrived, the thief ___ (disappear).', options: ['had disappeared', 'had been disappeared', 'disappeared'], correct: 'had disappeared' },
          { id: 'pvpastp-l2-2', sentence: 'She realized that her passport ___ (leave) at the hotel.', options: ['had left', 'had been left', 'was left'], correct: 'had been left' },
          { id: 'pvpastp-l2-3', sentence: 'The report ___ (not complete) when the deadline passed.', options: ['hadn\'t completed', 'hadn\'t been completed', 'wasn\'t completed'], correct: 'hadn\'t been completed' },
          { id: 'pvpastp-l2-4', sentence: 'Had the warnings ___ (issue) before the storm hit?', options: ['issued', 'been issued', 'issuing'], correct: 'been issued' },
          { id: 'pvpastp-l2-5', sentence: 'He found out that the job ___ (offer) to someone else.', options: ['had offered', 'had been offered', 'was offered'], correct: 'had been offered' },
          { id: 'pvpastp-l2-6', sentence: 'All the arrangements ___ (make) before the guests arrived.', options: ['had made', 'had been made', 'were made'], correct: 'had been made' },
          { id: 'pvpastp-l2-7', sentence: 'The ancient city ___ (destroy) by an earthquake centuries before.', options: ['had destroyed', 'had been destroyed', 'was destroyed'], correct: 'had been destroyed' },
          { id: 'pvpastp-l2-8', sentence: 'How many times ___ the system ___ (crash) before it was fixed?', options: ['had / crashed', 'had / been crashed', 'did / crash'], correct: 'had / crashed' },
          { id: 'pvpastp-l2-9', sentence: 'Your package ___ (already dispatch) when you tried to cancel the order.', options: ['had already dispatched', 'had already been dispatched', 'was already dispatched'], correct: 'had already been dispatched' },
          { id: 'pvpastp-l2-10', sentence: 'The company ___ (establish) for 50 years by the time it closed down.', options: ['had established', 'had been established', 'was established'], correct: 'had been established' },
        ],
        level3: [
          { id: 'pvpastp-l3-1', sentence: 'The crucial evidence ___ (overlook) by investigators until a new witness came forward.', options: ['had overlooked', 'had been overlooked', 'was overlooked'], correct: 'had been overlooked' },
          { id: 'pvpastp-l3-2', sentence: 'She discovered that her application ___ (reject) without proper consideration.', options: ['had rejected', 'had been rejected', 'was rejected'], correct: 'had been rejected' },
          { id: 'pvpastp-l3-3', sentence: 'Why ___ the safety protocols ___ (not follow) before the accident occurred?', options: ['hadn\'t / followed', 'hadn\'t / been followed', 'weren\'t / followed'], correct: 'hadn\'t / been followed' },
          { id: 'pvpastp-l3-4', sentence: 'The historical site ___ (preserve) by local communities long before it gained official recognition.', options: ['had preserved', 'had been preserved', 'was preserved'], correct: 'had been preserved' },
          { id: 'pvpastp-l3-5', sentence: 'The groundbreaking research ___ (conduct) in secret for years before it was published.', options: ['had conducted', 'had been conducted', 'was conducted'], correct: 'had been conducted' },
          { id: 'pvpastp-l3-6', sentence: 'Had all the necessary repairs ___ (complete) before the building was reopened to the public?', options: ['completed', 'been completed', 'completing'], correct: 'been completed' },
          { id: 'pvpastp-l3-7', sentence: 'The stolen masterpiece ___ (hide) for decades before it was finally found.', options: ['had hidden', 'had been hidden', 'was hidden'], correct: 'had been hidden' },
          { id: 'pvpastp-l3-8', sentence: 'How many warnings ___ the public ___ (give) before the volcano erupted?', options: ['had / given', 'had / been given', 'were / given'], correct: 'had / been given' },
          { id: 'pvpastp-l3-9', sentence: 'Your concerns ___ (already address) by the committee before you raised them again.', options: ['had already addressed', 'had already been addressed', 'were already addressed'], correct: 'had already been addressed' },
          { id: 'pvpastp-l3-10', sentence: 'The bridge\'s design flaws ___ (identify) by engineers long before its collapse.', options: ['had identified', 'had been identified', 'were identified'], correct: 'had been identified' },
        ]
      },
      'passive-voice-future-simple': {
        level1: [
          { id: 'pvfs-l1-1', sentence: 'The project ___ (complete) next week.', options: ['will complete', 'will be completed', 'completes'], correct: 'will be completed' },
          { id: 'pvfs-l1-2', sentence: 'The results ___ (announce) tomorrow.', options: ['will announce', 'will be announced', 'announce'], correct: 'will be announced' },
          { id: 'pvfs-l1-3', sentence: 'A new bridge ___ (build) over the river.', options: ['will build', 'will be built', 'builds'], correct: 'will be built' },
          { id: 'pvfs-l1-4', sentence: 'The invitations ___ (send) out soon.', options: ['will send', 'will be sent', 'send'], correct: 'will be sent' },
          { id: 'pvfs-l1-5', sentence: 'This problem ___ (solve) eventually.', options: ['will solve', 'will be solved', 'solves'], correct: 'will be solved' },
          { id: 'pvfs-l1-6', sentence: 'Will the package ___ (deliver) today?', options: ['deliver', 'be delivered', 'delivering'], correct: 'be delivered' },
          { id: 'pvfs-l1-7', sentence: 'The meeting ___ (hold) in the main conference room.', options: ['will hold', 'will be held', 'holds'], correct: 'will be held' },
          { id: 'pvfs-l1-8', sentence: 'The car ___ (not repair) by Friday.', options: ['won\'t repair', 'won\'t be repaired', 'doesn\'t repair'], correct: 'won\'t be repaired' },
          { id: 'pvfs-l1-9', sentence: 'When ___ the decision ___ (make)?', options: ['will / make', 'will / be made', 'does / make'], correct: 'will / be made' },
          { id: 'pvfs-l1-10', sentence: 'More information ___ (provide) later.', options: ['will provide', 'will be provided', 'provides'], correct: 'will be provided' },
        ],
        level2: [
          { id: 'pvfs-l2-1', sentence: 'The new park ___ (open) to the public next month.', options: ['will open', 'will be opened', 'opens'], correct: 'will be opened' },
          { id: 'pvfs-l2-2', sentence: 'All employees ___ (inform) about the changes soon.', options: ['will inform', 'will be informed', 'inform'], correct: 'will be informed' },
          { id: 'pvfs-l2-3', sentence: 'The winner ___ (not choose) until the final round.', options: ['won\'t choose', 'won\'t be chosen', 'doesn\'t choose'], correct: 'won\'t be chosen' },
          { id: 'pvfs-l2-4', sentence: 'Will the old stadium ___ (demolish) next year?', options: ['demolish', 'be demolished', 'demolishing'], correct: 'be demolished' },
          { id: 'pvfs-l2-5', sentence: 'The documents ___ (sign) by the director tomorrow.', options: ['will sign', 'will be signed', 'signs'], correct: 'will be signed' },
          { id: 'pvfs-l2-6', sentence: 'A solution to this issue ___ (find) in the near future.', options: ['will find', 'will be found', 'finds'], correct: 'will be found' },
          { id: 'pvfs-l2-7', sentence: 'The new software ___ (install) on all computers by the IT department.', options: ['will install', 'will be installed', 'installs'], correct: 'will be installed' },
          { id: 'pvfs-l2-8', sentence: 'When ___ the awards ___ (present) to the winners?', options: ['will / present', 'will / be presented', 'do / present'], correct: 'will / be presented' },
          { id: 'pvfs-l2-9', sentence: 'Your order ___ (ship) within 24 hours.', options: ['will ship', 'will be shipped', 'ships'], correct: 'will be shipped' },
          { id: 'pvfs-l2-10', sentence: 'The details of the plan ___ (not reveal) to the public yet.', options: ['won\'t reveal', 'won\'t be revealed', 'don\'t reveal'], correct: 'won\'t be revealed' },
        ],
        level3: [
          { id: 'pvfs-l3-1', sentence: 'The groundbreaking ceremony ___ (hold) next Monday.', options: ['will hold', 'will be held', 'holds'], correct: 'will be held' },
          { id: 'pvfs-l3-2', sentence: 'All necessary measures ___ (take) to ensure safety.', options: ['will take', 'will be taken', 'take'], correct: 'will be taken' },
          { id: 'pvfs-l3-3', sentence: 'The final verdict ___ (not announce) until all evidence is reviewed.', options: ['won\'t announce', 'won\'t be announced', 'doesn\'t announce'], correct: 'won\'t be announced' },
          { id: 'pvfs-l3-4', sentence: 'Will the historical artifacts ___ (display) in the new museum wing?', options: ['display', 'be displayed', 'displaying'], correct: 'be displayed' },
          { id: 'pvfs-l3-5', sentence: 'The terms of the agreement ___ (negotiate) by both parties next week.', options: ['will negotiate', 'will be negotiated', 'negotiate'], correct: 'will be negotiated' },
          { id: 'pvfs-l3-6', sentence: 'A comprehensive report on the findings ___ (publish) shortly.', options: ['will publish', 'will be published', 'publishes'], correct: 'will be published' },
          { id: 'pvfs-l3-7', sentence: 'The new environmental regulations ___ (enforce) strictly.', options: ['will enforce', 'will be enforced', 'enforce'], correct: 'will be enforced' },
          { id: 'pvfs-l3-8', sentence: 'When ___ the names of the scholarship recipients ___ (release)?', options: ['will / release', 'will / be released', 'do / release'], correct: 'will / be released' },
          { id: 'pvfs-l3-9', sentence: 'Your concerns ___ (address) by the management team in due course.', options: ['will address', 'will be addressed', 'address'], correct: 'will be addressed' },
          { id: 'pvfs-l3-10', sentence: 'The damaged infrastructure ___ (not repair) completely for several months.', options: ['won\'t repair', 'won\'t be repaired', 'doesn\'t repair'], correct: 'won\'t be repaired' },
        ]
      },
      'passive-voice-modals': {
        level1: [
          { id: 'pvm-l1-1', sentence: 'This door ___ (must / lock) at night.', options: ['must lock', 'must be locked', 'must locked'], correct: 'must be locked' },
          { id: 'pvm-l1-2', sentence: 'The report ___ (should / finish) by tomorrow.', options: ['should finish', 'should be finished', 'should finished'], correct: 'should be finished' },
          { id: 'pvm-l1-3', sentence: 'Mistakes ___ (can / make) easily.', options: ['can make', 'can be made', 'can made'], correct: 'can be made' },
          { id: 'pvm-l1-4', sentence: 'Your password ___ (cannot / share).', options: ['cannot share', 'cannot be shared', 'cannot shared'], correct: 'cannot be shared' },
          { id: 'pvm-l1-5', sentence: 'The rules ___ (must / follow) by everyone.', options: ['must follow', 'must be followed', 'must followed'], correct: 'must be followed' },
          { id: 'pvm-l1-6', sentence: 'Can this package ___ (send) today?', options: ['send', 'be sent', 'sending'], correct: 'be sent' },
          { id: 'pvm-l1-7', sentence: 'Helmets ___ (should / wear) by cyclists.', options: ['should wear', 'should be worn', 'should worn'], correct: 'should be worn' },
          { id: 'pvm-l1-8', sentence: 'The truth ___ (might / hide) from us.', options: ['might hide', 'might be hidden', 'might hidden'], correct: 'might be hidden' },
          { id: 'pvm-l1-9', sentence: 'This medicine ___ (must not / take) on an empty stomach.', options: ['must not take', 'must not be taken', 'must not taken'], correct: 'must not be taken' },
          { id: 'pvm-l1-10', sentence: 'Changes ___ (may / introduce) next year.', options: ['may introduce', 'may be introduced', 'may introduced'], correct: 'may be introduced' },
        ],
        level2: [
          { id: 'pvm-l2-1', sentence: 'The problem ___ (could / solve) if everyone cooperated.', options: ['could solve', 'could be solved', 'could solved'], correct: 'could be solved' },
          { id: 'pvm-l2-2', sentence: 'This task ___ (ought to / complete) with more care.', options: ['ought to complete', 'ought to be completed', 'ought to completed'], correct: 'ought to be completed' },
          { id: 'pvm-l2-3', sentence: 'The information ___ (can / find) on the company website.', options: ['can find', 'can be found', 'can found'], correct: 'can be found' },
          { id: 'pvm-l2-4', sentence: 'Such behavior ___ (should not / tolerate) in a professional environment.', options: ['should not tolerate', 'should not be tolerated', 'should not tolerated'], correct: 'should not be tolerated' },
          { id: 'pvm-l2-5', sentence: 'The old building ___ (might / demolish) to make way for a new park.', options: ['might demolish', 'might be demolished', 'might demolished'], correct: 'might be demolished' },
          { id: 'pvm-l2-6', sentence: 'Could these documents ___ (translate) into Spanish, please?', options: ['translate', 'be translated', 'translating'], correct: 'be translated' },
          { id: 'pvm-l2-7', sentence: 'Safety regulations ___ (must / observe) at all times.', options: ['must observe', 'must be observed', 'must observed'], correct: 'must be observed' },
          { id: 'pvm-l2-8', sentence: 'The results ___ (may / announce) later this week.', options: ['may announce', 'may be announced', 'may announced'], correct: 'may be announced' },
          { id: 'pvm-l2-9', sentence: 'This type of waste ___ (cannot / recycle) with regular paper.', options: ['cannot recycle', 'cannot be recycled', 'cannot recycled'], correct: 'cannot be recycled' },
          { id: 'pvm-l2-10', sentence: 'More effort ___ (should / put) into finding a sustainable solution.', options: ['should put', 'should be put', 'should putted'], correct: 'should be put' },
        ],
        level3: [
          { id: 'pvm-l3-1', sentence: 'The confidential files ___ (must not / leave) unattended under any circumstances.', options: ['must not leave', 'must not be left', 'must not left'], correct: 'must not be left' },
          { id: 'pvm-l3-2', sentence: 'Alternative energy sources ___ (ought to / explore) more thoroughly.', options: ['ought to explore', 'ought to be explored', 'ought to explored'], correct: 'ought to be explored' },
          { id: 'pvm-l3-3', sentence: 'The full impact of this decision ___ (cannot / predict) with certainty yet.', options: ['cannot predict', 'cannot be predicted', 'cannot predicted'], correct: 'cannot be predicted' },
          { id: 'pvm-l3-4', sentence: 'Such a complex issue ___ (should / address) by a team of experts.', options: ['should address', 'should be addressed', 'should addressed'], correct: 'should be addressed' },
          { id: 'pvm-l3-5', sentence: 'The historical records ___ (may / misinterpret) if not handled by specialists.', options: ['may misinterpret', 'may be misinterpreted', 'may misinterpreted'], correct: 'may be misinterpreted' },
          { id: 'pvm-l3-6', sentence: 'Could a more efficient system ___ (devise) to manage these resources?', options: ['devise', 'be devised', 'devising'], correct: 'be devised' },
          { id: 'pvm-l3-7', sentence: 'The rights of individuals ___ (must / protect) at all costs.', options: ['must protect', 'must be protected', 'must protected'], correct: 'must be protected' },
          { id: 'pvm-l3-8', sentence: 'The potential risks ___ (might / underestimate) if we are not careful.', options: ['might underestimate', 'might be underestimated', 'might underestimated'], correct: 'might be underestimated' },
          { id: 'pvm-l3-9', sentence: 'This delicate equipment ___ (should not / operate) without proper training.', options: ['should not operate', 'should not be operated', 'should not operated'], correct: 'should not be operated' },
          { id: 'pvm-l3-10', sentence: 'Further research ___ (can / conduct) to verify these findings.', options: ['can conduct', 'can be conducted', 'can conducted'], correct: 'can be conducted' },
        ]
      },
      'passive-voice-mixed-tenses': {
        level1: [
          { id: 'pvmt-l1-1', sentence: 'The new stadium ___ (build) right now and ___ (open) next year.', options: ['is being built / will be opened', 'is built / will open', 'builds / opens'], correct: 'is being built / will be opened' },
          { id: 'pvmt-l1-2', sentence: 'This famous novel ___ (write) in the 19th century, but it still ___ (read) by many.', options: ['was written / is read', 'wrote / reads', 'had been written / is being read'], correct: 'was written / is read' },
          { id: 'pvmt-l1-3', sentence: 'My car ___ (repair) yesterday, so it ___ (can / drive) now.', options: ['was repaired / can be driven', 'repaired / can drive', 'had been repaired / can be driven'], correct: 'was repaired / can be driven' },
          { id: 'pvmt-l1-4', sentence: 'The invitations ___ (send) last week, and the replies ___ (expect) soon.', options: ['were sent / are expected', 'sent / expect', 'had been sent / will be expected'], correct: 'were sent / are expected' },
          { id: 'pvmt-l1-5', sentence: 'The old bridge ___ (close) for repairs, and a new one ___ (construct) next to it.', options: ['has been closed / is being constructed', 'closed / constructs', 'was closed / will be constructed'], correct: 'has been closed / is being constructed' },
          { id: 'pvmt-l1-6', sentence: 'English ___ (speak) here, and French lessons ___ (offer) next semester.', options: ['is spoken / will be offered', 'speaks / offers', 'was spoken / are offered'], correct: 'is spoken / will be offered' },
          { id: 'pvmt-l1-7', sentence: 'The documents ___ (not sign) yet, but they ___ (prepare) by the lawyer.', options: ['haven\'t been signed / are being prepared', 'didn\'t sign / prepare', 'not signed / will prepare'], correct: 'haven\'t been signed / are being prepared' },
          { id: 'pvmt-l1-8', sentence: 'The concert ___ (cancel) due to bad weather, but it ___ (reschedule) for next month.', options: ['was cancelled / has been rescheduled', 'cancelled / rescheduled', 'had cancelled / will reschedule'], correct: 'was cancelled / has been rescheduled' },
          { id: 'pvmt-l1-9', sentence: 'These cookies ___ (bake) this morning, so they ___ (should / eat) today.', options: ['were baked / should be eaten', 'baked / should eat', 'had been baked / must be eaten'], correct: 'were baked / should be eaten' },
          { id: 'pvmt-l1-10', sentence: 'The system ___ (update) at midnight, so it ___ (not be) available for a few hours.', options: ['will be updated / won\'t be', 'updates / isn\'t', 'is updated / will not'], correct: 'will be updated / won\'t be' },
        ],
        level2: [
          { id: 'pvmt-l2-1', sentence: 'While the museum ___ (renovate), the artifacts ___ (store) in a secure location.', options: ['was being renovated / were stored', 'renovated / stored', 'is renovated / are stored'], correct: 'was being renovated / were stored' },
          { id: 'pvmt-l2-2', sentence: 'The old laws ___ (replace) by new ones which ___ (implement) next year.', options: ['have been replaced / will be implemented', 'replaced / implement', 'were replaced / are implemented'], correct: 'have been replaced / will be implemented' },
          { id: 'pvmt-l2-3', sentence: 'This problem ___ (discuss) many times, but a solution ___ (not find) yet.', options: ['has been discussed / hasn\'t been found', 'discussed / didn\'t find', 'was discussed / isn\'t found'], correct: 'has been discussed / hasn\'t been found' },
          { id: 'pvmt-l2-4', sentence: 'The criminal ___ (arrest) last night and ___ (question) by the police now.', options: ['was arrested / is being questioned', 'arrested / questions', 'had been arrested / will be questioned'], correct: 'was arrested / is being questioned' },
          { id: 'pvmt-l2-5', sentence: 'A new school ___ (build) in our town, and it ___ (expect) to open next fall.', options: ['is being built / is expected', 'builds / expects', 'was built / will expect'], correct: 'is being built / is expected' },
          { id: 'pvmt-l2-6', sentence: 'The results of the experiment ___ (publish) soon, after they ___ (analyze) carefully.', options: ['will be published / have been analyzed', 'publish / analyze', 'are published / were analyzed'], correct: 'will be published / have been analyzed' },
          { id: 'pvmt-l2-7', sentence: 'All the flights ___ (cancel) due to the strike, and passengers ___ (advise) to check online.', options: ['were cancelled / were advised', 'cancelled / advised', 'had been cancelled / are advised'], correct: 'were cancelled / were advised' },
          { id: 'pvmt-l2-8', sentence: 'The bridge ___ (damage) in the earthquake and ___ (must / repair) immediately.', options: ['was damaged / must be repaired', 'damaged / must repair', 'had been damaged / should be repaired'], correct: 'was damaged / must be repaired' },
          { id: 'pvmt-l2-9', sentence: 'This software ___ (update) regularly, and new features ___ (add) every few months.', options: ['is updated / are added', 'updates / add', 'was updated / were added'], correct: 'is updated / are added' },
          { id: 'pvmt-l2-10', sentence: 'The paintings ___ (steal) from the gallery, but they ___ (recover) by the police eventually.', options: ['were stolen / were recovered', 'stole / recovered', 'had been stolen / will be recovered'], correct: 'were stolen / were recovered' },
        ],
        level3: [
          { id: 'pvmt-l3-1', sentence: 'The ancient manuscript ___ (discover) centuries ago, and it ___ (currently / study) by scholars.', options: ['was discovered / is currently being studied', 'discovered / currently studies', 'had been discovered / will be studied'], correct: 'was discovered / is currently being studied' },
          { id: 'pvmt-l3-2', sentence: 'While the new policies ___ (implement) last year, many employees ___ (train) on the updated procedures.', options: ['were being implemented / were trained', 'implemented / trained', 'had been implemented / were being trained'], correct: 'were being implemented / were trained' },
          { id: 'pvmt-l3-3', sentence: 'The city\'s infrastructure ___ (improve) significantly since the new mayor ___ (elect).', options: ['has been improved / was elected', 'improved / elected', 'was improved / has been elected'], correct: 'has been improved / was elected' },
          { id: 'pvmt-l3-4', sentence: 'The stolen data ___ (recover) by cybersecurity experts, and new security measures ___ (now / install).', options: ['was recovered / are now being installed', 'recovered / now install', 'had been recovered / will be installed'], correct: 'was recovered / are now being installed' },
          { id: 'pvmt-l3-5', sentence: 'This traditional craft ___ (pass down) through generations, and it ___ (still / practice) in remote villages.', options: ['has been passed down / is still practiced', 'was passed down / still practices', 'passed down / will be practiced'], correct: 'has been passed down / is still practiced' },
          { id: 'pvmt-l3-6', sentence: 'The research ___ (conduct) for several years before any significant breakthroughs ___ (make).', options: ['had been conducted / were made', 'was conducted / made', 'conducted / had been made'], correct: 'had been conducted / were made' },
          { id: 'pvmt-l3-7', sentence: 'The old factory ___ (close) down, and the site ___ (redevelop) into a modern complex next year.', options: ['has been closed / will be redeveloped', 'was closed / is redeveloping', 'closed / redevelops'], correct: 'has been closed / will be redeveloped' },
          { id: 'pvmt-l3-8', sentence: 'Although the problem ___ (identify) early on, effective solutions ___ (not implement) until recently.', options: ['was identified / were not implemented', 'identified / didn\'t implement', 'had been identified / have not been implemented'], correct: 'was identified / were not implemented' },
          { id: 'pvmt-l3-9', sentence: 'The patient ___ (monitor) closely since the surgery, and his condition ___ (steadily / improve).', options: ['has been monitored / is steadily improving', 'was monitored / steadily improved', 'monitored / will steadily improve'], correct: 'has been monitored / is steadily improving' },
          { id: 'pvmt-l3-10', sentence: 'The historical building ___ (restore) to its former glory, and it ___ (reopen) to the public soon.', options: ['has been restored / will be reopened', 'was restored / is reopening', 'restored / reopens'], correct: 'has been restored / will be reopened' },
        ]
      },
    };
    
    export const passiveVoiceExercises = {};
    for (const topic in originalPassiveVoiceExercises) {
      passiveVoiceExercises[topic] = processTopic(originalPassiveVoiceExercises[topic]);
    }
  