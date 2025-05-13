
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

    const originalComparisonsExercises = {
      'comparatives-superlatives': {
        level1: [
          { id: 'cs-l1-1', sentence: 'My car is ___ (fast) than yours.', options: ['fast', 'faster', 'fastest'], correct: 'faster' },
          { id: 'cs-l1-2', sentence: 'This is the ___ (interesting) book I have ever read.', options: ['interesting', 'more interesting', 'most interesting'], correct: 'most interesting' },
          { id: 'cs-l1-3', sentence: 'She is ___ (tall) than her brother.', options: ['tall', 'taller', 'tallest'], correct: 'taller' },
          { id: 'cs-l1-4', sentence: 'Mount Everest is the ___ (high) mountain in the world.', options: ['high', 'higher', 'highest'], correct: 'highest' },
          { id: 'cs-l1-5', sentence: 'This exercise is ___ (easy) than the last one.', options: ['easy', 'easier', 'easiest'], correct: 'easier' },
          { id: 'cs-l1-6', sentence: 'He is the ___ (good) student in the class.', options: ['good', 'better', 'best'], correct: 'best' },
          { id: 'cs-l1-7', sentence: 'Summer is ___ (hot) than winter.', options: ['hot', 'hotter', 'hottest'], correct: 'hotter' },
          { id: 'cs-l1-8', sentence: 'This is the ___ (bad) film I have ever seen.', options: ['bad', 'worse', 'worst'], correct: 'worst' },
          { id: 'cs-l1-9', sentence: 'A cheetah is ___ (fast) than a lion.', options: ['fast', 'faster', 'fastest'], correct: 'faster' },
          { id: 'cs-l1-10', sentence: 'She speaks English ___ (fluent) than I do.', options: ['fluent', 'more fluently', 'most fluently'], correct: 'more fluently' },
        ],
        level2: [
          { id: 'cs-l2-1', sentence: 'This restaurant is ___ (expensive) than the one we went to last week.', options: ['expensive', 'more expensive', 'most expensive'], correct: 'more expensive' },
          { id: 'cs-l2-2', sentence: 'The blue whale is the ___ (large) animal on Earth.', options: ['large', 'larger', 'largest'], correct: 'largest' },
          { id: 'cs-l2-3', sentence: 'He plays the guitar ___ (skillful) than his sister.', options: ['skillful', 'more skillfully', 'most skillfully'], correct: 'more skillfully' },
          { id: 'cs-l2-4', sentence: 'She is probably the ___ (intelligent) person I know.', options: ['intelligent', 'more intelligent', 'most intelligent'], correct: 'most intelligent' },
          { id: 'cs-l2-5', sentence: 'This new phone model is ___ (thin) and ___ (light) than the previous one.', options: ['thinner / lighter', 'thin / light', 'thinnest / lightest'], correct: 'thinner / lighter' },
          { id: 'cs-l2-6', sentence: 'His performance was ___ (good) than I expected, but not the ___ (good) in the competition.', options: ['better / best', 'gooder / goodest', 'good / best'], correct: 'better / best' },
          { id: 'cs-l2-7', sentence: 'Traveling by train is often ___ (relaxing) than traveling by plane.', options: ['relaxing', 'more relaxing', 'most relaxing'], correct: 'more relaxing' },
          { id: 'cs-l2-8', sentence: 'This is by far the ___ (challenging) task we ___ (face) so far.', options: ['most challenging / have faced', 'more challenging / faced', 'challenging / face'], correct: 'most challenging / have faced' },
          { id: 'cs-l2-9', sentence: 'The situation is getting ___ (bad) and ___ (bad) every day.', options: ['worse / worse', 'badder / badder', 'worser / worser'], correct: 'worse / worse' },
          { id: 'cs-l2-10', sentence: 'Can you speak a bit ___ (slow)? I can\'t understand you.', options: ['slower', 'slowlier', 'more slowly'], correct: 'more slowly' },
        ],
        level3: [
          { id: 'cs-l3-1', sentence: 'My new apartment is not ___ (spacious) ___ my old one, but it\'s much ___ (modern).', options: ['as spacious as / more modern', 'spacious than / moderner', 'so spacious as / most modern'], correct: 'as spacious as / more modern' },
          { id: 'cs-l3-2', sentence: 'This exam was ___ (difficult) than I had anticipated; in fact, it was one of the ___ (hard) exams I\'ve ever taken.', options: ['more difficult / hardest', 'difficulter / harder', 'most difficult / most hard'], correct: 'more difficult / hardest' },
          { id: 'cs-l3-3', sentence: 'She is ___ (talented) ___ a singer ___ her sister is as a dancer.', options: ['as talented / as', 'more talented / than', 'talented than / than'], correct: 'as talented / as' },
          { id: 'cs-l3-4', sentence: 'The ___ (far) he travelled, the ___ (lonely) he felt.', options: ['further / lonelier', 'farther / more lonely', 'farest / loneliest'], correct: 'further / lonelier' },
          { id: 'cs-l3-5', sentence: 'This brand of coffee is ___ (good) ___ that one, but it\'s also twice ___ (expensive).', options: ['as good as / as expensive', 'better than / more expensive', 'gooder than / expensiver'], correct: 'as good as / as expensive' },
          { id: 'cs-l3-6', sentence: 'His explanation was ___ (clear) than hers, but hers was ___ (concise).', options: ['clearer / more concise', 'more clear / conciser', 'clearest / most concise'], correct: 'clearer / more concise' },
          { id: 'cs-l3-7', sentence: 'Is this the ___ (fast) route to the airport? We are running ___ (late) than we thought.', options: ['fastest / later', 'faster / more late', 'most fast / latest'], correct: 'fastest / later' },
          { id: 'cs-l3-8', sentence: 'My brother isn\'t ___ (tall) ___ me, but he is much ___ (strong).', options: ['as tall as / stronger', 'taller than / strong', 'so tall as / strongest'], correct: 'as tall as / stronger' },
          { id: 'cs-l3-9', sentence: 'The ___ (early) we start, the ___ (much) work we will get done.', options: ['earlier / more', 'earlyer / mucher', 'earliest / most'], correct: 'earlier / more' },
          { id: 'cs-l3-10', sentence: 'Living in the city is ___ (exciting) ___ living in the countryside, but the countryside is far ___ (peaceful).', options: ['more exciting than / more peaceful', 'as exciting as / peacefuller', 'excitinger than / most peaceful'], correct: 'more exciting than / more peaceful' },
        ]
      },
      'comparatives-as-as': {
        level1: [
          { id: 'ca-l1-1', sentence: 'My house is ___ big ___ yours.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l1-2', sentence: 'She is not ___ tall ___ her sister.', options: ['as / as', 'so / as', 'taller / than'], correct: 'as / as' },
          { id: 'ca-l1-3', sentence: 'This book is ___ interesting ___ the one I read last week.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l1-4', sentence: 'He can run ___ fast ___ a cheetah (almost!).', options: ['as / as', 'so / as', 'faster / than'], correct: 'as / as' },
          { id: 'ca-l1-5', sentence: 'The weather today isn\'t ___ bad ___ yesterday.', options: ['as / as', 'so / as', 'worse / than'], correct: 'as / as' },
          { id: 'ca-l1-6', sentence: 'Is your car ___ expensive ___ this one?', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l1-7', sentence: 'I don\'t have ___ many friends ___ you do.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l1-8', sentence: 'She sings ___ beautifully ___ an angel.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l1-9', sentence: 'This coffee is not ___ strong ___ I like it.', options: ['as / as', 'so / as', 'stronger / than'], correct: 'as / as' },
          { id: 'ca-l1-10', sentence: 'He works ___ hard ___ anyone I know.', options: ['as / as', 'so / as', 'harder / than'], correct: 'as / as' },
        ],
        level2: [
          { id: 'ca-l2-1', sentence: 'The new software is not ___ user-friendly ___ the old version.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-2', sentence: 'She speaks English ___ fluently ___ a native speaker.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-3', sentence: 'Living in the city isn\'t ___ peaceful ___ living in the countryside.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-4', sentence: 'He is ___ good at maths ___ his brother, but he excels in arts.', options: ['as / as', 'so / as', 'better / than'], correct: 'as / as' },
          { id: 'ca-l2-5', sentence: 'This route is not ___ direct ___ the other one, but it\'s more scenic.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-6', sentence: 'I don\'t earn ___ much money ___ my colleague, despite working longer hours.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-7', sentence: 'Is this painting ___ valuable ___ the one in the main gallery?', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-8', sentence: 'The sequel to the movie was not ___ exciting ___ the original film.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-9', sentence: 'She doesn\'t feel ___ confident about this presentation ___ she did for the last one.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
          { id: 'ca-l2-10', sentence: 'He can play the piano ___ skillfully ___ he can play the violin.', options: ['as / as', 'so / as', 'more / than'], correct: 'as / as' },
        ],
        level3: generateDefaultLevel('comparatives-as-as', 10, 3),
      },
      'comparatives-the-the': {
        level1: [
          { id: 'ctt-l1-1', sentence: '______ you eat vegetables, ______ you feel.', options: ['The more / the better', 'The best / the healthier', 'The healthier / the more good'], correct: 'The more / the better' },
          { id: 'ctt-l1-2', sentence: '______ I run, ______ tired I get.', options: ['The fastest / the more tired', 'The faster / the more', 'The harder / the worst'], correct: 'The faster / the more' },
          { id: 'ctt-l1-3', sentence: '______ you study, ______ your results are.', options: ['The harder / the better', 'The more hard / the more good', 'The best / the smarter'], correct: 'The harder / the better' },
          { id: 'ctt-l1-4', sentence: '______ you practice, ______ you become.', options: ['The more / the better', 'The best / the more good', 'The more / the goodest'], correct: 'The more / the better' },
          { id: 'ctt-l1-5', sentence: '______ we leave, ______ we arrive.', options: ['The later / the later', 'The late / the latest', 'The more late / the more later'], correct: 'The later / the later' },
          { id: 'ctt-l1-6', sentence: '______ you listen, ______ you\'ll understand.', options: ['The more / the better', 'The best / the more good', 'The better / the best'], correct: 'The more / the better' },
          { id: 'ctt-l1-7', sentence: '______ he works, ______ he earns.', options: ['The harder / the more', 'The more hard / the better', 'The good / the better'], correct: 'The harder / the more' },
          { id: 'ctt-l1-8', sentence: '______ you wait, ______ it gets.', options: ['The more / the worse', 'The longest / the badder', 'The later / the bad'], correct: 'The more / the worse' },
          { id: 'ctt-l1-9', sentence: '___ deeper you dig, ___ darker it becomes.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l1-10', sentence: '___ more you read, ___ more you learn.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
        ],
        level2: [
          { id: 'ctt-l2-1', sentence: '___ more sophisticated the technology, ___ more complex its problems can be.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-2', sentence: '___ earlier you book your flight, ___ cheaper the tickets are likely to be.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-3', sentence: '___ more carefully you plan, ___ fewer mistakes you will make.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-4', sentence: '___ further he drove into the wilderness, ___ more isolated he felt.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-5', sentence: '___ less you interfere in their affairs, ___ better your relationship will be.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-6', sentence: '___ more challenging the task, ___ greater the sense of achievement upon completion.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-7', sentence: '___ older the wine, ___ more valuable it often becomes.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-8', sentence: '___ more experience she gained, ___ more responsibility she was given.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-9', sentence: '___ steeper the climb, ___ more breathtaking the view from the top.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
          { id: 'ctt-l2-10', sentence: '___ more you get to know him, ___ more you will appreciate his kindness.', options: ['The / the', 'More / more', 'So / so'], correct: 'The / the' },
        ],
        level3: generateDefaultLevel('comparatives-the-the', 10, 3),
      },
      'comparatives-and-comparative': {
        level1: [
          { id: 'cac-l1-1', sentence: 'You are getting _____________!', options: ['the taller and taller', 'taller and taller', 'taller and tallest'], correct: 'taller and taller' },
          { id: 'cac-l1-2', sentence: 'This baby is becoming ___________.', options: ['the cuter and cuter', 'cuter and tallest', 'bigger and bigger'], correct: 'bigger and bigger' },
          { id: 'cac-l1-3', sentence: 'It’s getting ___________ every day!', options: ['hotter and hotter', 'hot and hotter', 'the hotter and hotter'], correct: 'hotter and hotter' },
          { id: 'cac-l1-4', sentence: 'My dog is becoming ____________.', options: ['the friendlier and friendlier', 'friendlier and friendlier', 'friendlier and more friendly'], correct: 'friendlier and friendlier' },
          { id: 'cac-l1-5', sentence: 'The sky is turning ___________ as the sun sets.', options: ['darker and darker', 'the redder and redder', 'redder and reddish'], correct: 'darker and darker' },
          { id: 'cac-l1-6', sentence: 'You’re getting ____________ at this game.', options: ['better and better', 'the better and better', 'better and the best'], correct: 'better and better' },
          { id: 'cac-l1-7', sentence: 'The house is looking ____________ every week.', options: ['cleaner and cleaner', 'clean and cleaner', 'the cleaner and cleaner'], correct: 'cleaner and cleaner' },
          { id: 'cac-l1-8', sentence: 'These exercises are getting ___________.', options: ['the harder and harder', 'harder and harder', 'harder and hardest'], correct: 'harder and harder' },
          { id: 'cac-l1-9', sentence: 'He’s becoming ____________ each day.', options: ['more and more confident', 'confident and confident', 'the more confident and more confident'], correct: 'more and more confident' },
          { id: 'cac-l1-10', sentence: 'My plant is growing ____________!', options: ['taller and taller', 'tallest and taller', 'tall and taller'], correct: 'taller and taller' },
        ],
        level2: [
          { id: 'cac-l2-1', sentence: 'The traffic is getting ____________ in the city center.', options: ['heavier and heavier', 'heavy and heavier', 'the heavier and heavier'], correct: 'heavier and heavier' },
          { id: 'cac-l2-2', sentence: 'Her voice grew _____________ as she shouted.', options: ['the louder and louder', 'louder and louder', 'loud and loudest'], correct: 'louder and louder' },
          { id: 'cac-l2-3', sentence: 'These shoes feel ____________ the more I wear them.', options: ['more and more comfortable', 'the most comfortable and most comfortable', 'comfortable and comfortable'], correct: 'more and more comfortable' },
          { id: 'cac-l2-4', sentence: 'The forest gets _____________ the deeper you go.', options: ['darker and darker', 'the darker and darker', 'dark and darker'], correct: 'darker and darker' },
          { id: 'cac-l2-5', sentence: 'He became ____________ as the interview continued.', options: ['the more nervous and more nervous', 'more and more nervous', 'nervouser and nervouser'], correct: 'more and more nervous' },
          { id: 'cac-l2-6', sentence: 'Your explanations are getting ____________.', options: ['clearer and clearer', 'the clearer and clearer', 'clear and more clear'], correct: 'clearer and clearer' },
          { id: 'cac-l2-7', sentence: 'I’m feeling ___________ about my decision.', options: ['the more certain and more certain', 'certainer and certainer', 'more and more certain'], correct: 'more and more certain' },
          { id: 'cac-l2-8', sentence: 'This weather is becoming ____________!', options: ['the stranger and stranger', 'stranger and stranger', 'strange and stranger'], correct: 'stranger and stranger' },
          { id: 'cac-l2-9', sentence: 'The music is getting ___________ by the minute.', options: ['the louder and louder', 'louder and louder', 'loudest and louder'], correct: 'louder and louder' },
          { id: 'cac-l2-10', sentence: 'My thoughts are becoming ____________.', options: ['the clearer and clearer', 'clearer and clearer', 'more clear and clearer'], correct: 'clearer and clearer' },
        ],
        level3: [
          { id: 'cac-l3-1', sentence: 'The negotiations are growing ____________ by the hour.', options: ['the more and more complex', 'complexer and complexer', 'more and more complex'], correct: 'more and more complex' },
          { id: 'cac-l3-2', sentence: 'His lies became ____________ as the story continued.', options: ['the more and more obvious', 'more and more obvious', 'obvious and obvious'], correct: 'more and more obvious' },
          { id: 'cac-l3-3', sentence: 'The room got ___________ as we moved inside.', options: ['stuffier and stuffier', 'the stuffier and stuffier', 'stuffy and stuffier'], correct: 'stuffier and stuffier' },
          { id: 'cac-l3-4', sentence: 'The children are becoming ___________ with age.', options: ['the more independent and more independent', 'more and more independent', 'independent and more independent'], correct: 'more and more independent' },
          { id: 'cac-l3-5', sentence: 'My schedule is getting ___________.', options: ['the tighter and tighter', 'tighter and tighter', 'tight and tighter'], correct: 'tighter and tighter' },
          { id: 'cac-l3-6', sentence: 'The puzzle is becoming ___________ to solve.', options: ['trickier and trickier', 'the trickier and trickier', 'tricky and trickier'], correct: 'trickier and trickier' },
          { id: 'cac-l3-7', sentence: 'Our dog is getting ___________ after training.', options: ['better and better', 'the better and better', 'the best and the best'], correct: 'better and better' },
          { id: 'cac-l3-8', sentence: 'Your jokes are getting ___________, honestly', options: ['worse and worse', 'badder and badder', 'the worse and worse'], correct: 'worse and worse' },
          { id: 'cac-l3-9', sentence: 'My headaches are becoming ___________ lately.', options: ['more and more frequent', 'frequent and frequent', 'the more frequent and more frequent'], correct: 'more and more frequent' },
          { id: 'cac-l3-10', sentence: 'Things are getting ____________ in that part of town.', options: ['the more dangerous and more dangerous', 'dangerous and dangerous', 'more and more dangerous'], correct: 'more and more dangerous' },
        ]
      },
      'tenses-comparison-ps-vs-pc': {
        level1: [
          { id: 'comp-pspc-l1-1', sentence: 'She usually ___ (read) books, but today she ___ (watch) TV.', options: ['reads / is watching', 'is reading / watches', 'reads / watches'], correct: 'reads / is watching' },
          { id: 'comp-pspc-l1-2', sentence: 'Look! It ___ (snow). It rarely ___ (snow) here.', options: ['is snowing / snows', 'snows / is snowing', 'is snowing / is snowing'], correct: 'is snowing / snows' },
          { id: 'comp-pspc-l1-3', sentence: 'We ___ (have) dinner now. We always ___ (have) dinner at 7 PM.', options: ['are having / have', 'have / are having', 'are having / are having'], correct: 'are having / have' },
          { id: 'comp-pspc-l1-4', sentence: 'He ___ (work) as a teacher, but this week he ___ (be) on holiday.', options: ['works / is', 'is working / is', 'works / is being'], correct: 'works / is' },
          { id: 'comp-pspc-l1-5', sentence: 'Why ___ you ___ (wear) a suit today? You usually ___ (wear) jeans.', options: ['are / wearing / wear', 'do / wear / are wearing', 'are / wearing / are wearing'], correct: 'are / wearing / wear' },
          { id: 'comp-pspc-l1-6', sentence: 'The water ___ (boil). Can you turn it off? Water ___ (boil) at 100°C.', options: ['is boiling / boils', 'boils / is boiling', 'is boiling / is boiling'], correct: 'is boiling / boils' },
          { id: 'comp-pspc-l1-7', sentence: 'I ___ (not understand) what you ___ (talk) about.', options: ['don\'t understand / are talking', 'am not understanding / talk', 'don\'t understand / talk'], correct: 'don\'t understand / are talking' },
          { id: 'comp-pspc-l1-8', sentence: 'They normally ___ (play) tennis on Saturdays, but this Saturday they ___ (go) hiking.', options: ['play / are going', 'are playing / go', 'play / go'], correct: 'play / are going' },
          { id: 'comp-pspc-l1-9', sentence: 'Be quiet! I ___ (try) to concentrate. I always ___ (find) it hard to concentrate with noise.', options: ['am trying / find', 'try / am finding', 'am trying / am finding'], correct: 'am trying / find' },
          { id: 'comp-pspc-l1-10', sentence: 'What ___ your brother ___ (do)? He ___ (be) an architect.', options: ['does / do / is', 'is / doing / is', 'does / do / does'], correct: 'does / do / is' },
        ],
        level2: [
          { id: 'comp-pspc-l2-1', sentence: 'Sarah usually ___ (walk) to work, but this week she ___ (take) the bus because her car is broken.', options: ['walks / is taking', 'is walking / takes', 'walks / takes'], correct: 'walks / is taking' },
          { id: 'comp-pspc-l2-2', sentence: 'Listen! Someone ___ (play) the violin. It ___ (sound) beautiful.', options: ['is playing / sounds', 'plays / is sounding', 'is playing / is sounding'], correct: 'is playing / sounds' },
          { id: 'comp-pspc-l2-3', sentence: 'We ___ (not usually go) to the cinema on weekdays, but tonight we ___ (make) an exception.', options: ['don\'t usually go / are making', 'aren\'t usually going / make', 'don\'t usually go / make'], correct: 'don\'t usually go / are making' },
          { id: 'comp-pspc-l2-4', sentence: 'He ___ (study) for his exams at the moment, so he ___ (not have) much free time.', options: ['is studying / doesn\'t have', 'studies / isn\'t having', 'is studying / isn\'t having'], correct: 'is studying / doesn\'t have' },
          { id: 'comp-pspc-l2-5', sentence: 'Why ___ you always ___ (complain) about your job? You ___ (seem) to enjoy it sometimes.', options: ['are / complaining / seem', 'do / complain / are seeming', 'are / complaining / are seeming'], correct: 'are / complaining / seem' },
          { id: 'comp-pspc-l2-6', sentence: 'The chef ___ (taste) the soup now to see if it ___ (need) more salt.', options: ['is tasting / needs', 'tastes / is needing', 'is tasting / is needing'], correct: 'is tasting / needs' },
          { id: 'comp-pspc-l2-7', sentence: 'I ___ (think) about my holiday plans. I ___ (want) to go somewhere warm.', options: ['am thinking / want', 'think / am wanting', 'am thinking / am wanting'], correct: 'am thinking / want' },
          { id: 'comp-pspc-l2-8', sentence: 'They ___ (build) a new bridge over the river. It ___ (look) like it will be finished soon.', options: ['are building / looks', 'build / is looking', 'are building / is looking'], correct: 'are building / looks' },
          { id: 'comp-pspc-l2-9', sentence: 'She ___ (not work) on Fridays. She ___ (spend) the day with her children.', options: ['doesn\'t work / spends', 'isn\'t working / is spending', 'doesn\'t work / is spending'], correct: 'doesn\'t work / spends' },
          { id: 'comp-pspc-l2-10', sentence: 'What ___ that noise? It ___ (sound) like someone ___ (try) to open the window.', options: ['is / sounds / is trying', 'does / sound / tries', 'is / is sounding / tries'], correct: 'is / sounds / is trying' },
        ],
        level3: [
          { id: 'comp-pspc-l3-1', sentence: 'The company\'s stock price ___ (fluctuate) a lot these days, but generally it ___ (show) an upward trend.', options: ['is fluctuating / shows', 'fluctuates / is showing', 'is fluctuating / is showing'], correct: 'is fluctuating / shows' },
          { id: 'comp-pspc-l3-2', sentence: 'While my father ___ (usually enjoy) gardening, this afternoon he ___ (relax) indoors because of the heat.', options: ['usually enjoys / is relaxing', 'is usually enjoying / relaxes', 'usually enjoys / relaxes'], correct: 'usually enjoys / is relaxing' },
          { id: 'comp-pspc-l3-3', sentence: 'It ___ (appear) that the new software ___ (cause) some compatibility issues with older systems.', options: ['appears / is causing', 'is appearing / causes', 'appears / causes'], correct: 'appears / is causing' },
          { id: 'comp-pspc-l3-4', sentence: 'Why ___ you ___ (constantly interrupt) me while I ___ (try) to explain something important?', options: ['are / constantly interrupting / am trying', 'do / constantly interrupt / try', 'are / constantly interrupting / try'], correct: 'are / constantly interrupting / am trying' },
          { id: 'comp-pspc-l3-5', sentence: 'The professor ___ (currently write) a new book, which ___ (explore) the impact of social media on society.', options: ['is currently writing / explores', 'currently writes / is exploring', 'is currently writing / is exploring'], correct: 'is currently writing / explores' },
          { id: 'comp-pspc-l3-6', sentence: 'Although she ___ (own) several properties, she ___ (currently live) in a small rented apartment.', options: ['owns / is currently living', 'is owning / currently lives', 'owns / currently lives'], correct: 'owns / is currently living' },
          { id: 'comp-pspc-l3-7', sentence: 'The children ___ (get) more and more excited as their holiday ___ (approach).', options: ['are getting / approaches', 'get / is approaching', 'are getting / is approaching'], correct: 'are getting / approaches' },
          { id: 'comp-pspc-l3-8', sentence: 'He ___ (not usually believe) in horoscopes, but today he ___ (read) his with great interest.', options: ['doesn\'t usually believe / is reading', 'isn\'t usually believing / reads', 'doesn\'t usually believe / reads'], correct: 'doesn\'t usually believe / is reading' },
          { id: 'comp-pspc-l3-9', sentence: 'This artist ___ (always experiment) with new techniques, which ___ (make) her work so unique.', options: ['is always experimenting / makes', 'always experiments / is making', 'is always experimenting / is making'], correct: 'is always experimenting / makes' },
          { id: 'comp-pspc-l3-10', sentence: 'What ___ you ___ (generally do) on weekends? ___ you ___ (do) anything special this weekend?', options: ['do / generally do / Are / doing', 'are / generally doing / Do / do', 'do / generally do / Do / do'], correct: 'do / generally do / Are / doing' },
        ]
      },
      'tenses-comparison-past-s-vs-pc': {
        level1: [
          { id: 'comp-pastspc-l1-1', sentence: 'While I ___ (walk) home, I ___ (see) an accident.', options: ['was walking / saw', 'walked / was seeing', 'was walking / was seeing'], correct: 'was walking / saw' },
          { id: 'comp-pastspc-l1-2', sentence: 'He ___ (fall) asleep while he ___ (watch) TV.', options: ['fell / was watching', 'was falling / watched', 'fell / watched'], correct: 'fell / was watching' },
          { id: 'comp-pastspc-l1-3', sentence: 'When the phone ___ (ring), she ___ (cook) dinner.', options: ['rang / was cooking', 'was ringing / cooked', 'rang / cooked'], correct: 'rang / was cooking' },
          { id: 'comp-pastspc-l1-4', sentence: 'They ___ (play) cards when the lights ___ (go) out.', options: ['were playing / went', 'played / were going', 'were playing / were going'], correct: 'were playing / went' },
          { id: 'comp-pastspc-l1-5', sentence: 'What ___ you ___ (do) when I ___ (call) you last night?', options: ['were / doing / called', 'did / do / was calling', 'were / doing / was calling'], correct: 'were / doing / called' },
          { id: 'comp-pastspc-l1-6', sentence: 'It ___ (rain) heavily when we ___ (leave) the house.', options: ['was raining / left', 'rained / were leaving', 'was raining / were leaving'], correct: 'was raining / left' },
          { id: 'comp-pastspc-l1-7', sentence: 'I ___ (break) my leg while I ___ (ski).', options: ['broke / was skiing', 'was breaking / skied', 'broke / skied'], correct: 'broke / was skiing' },
          { id: 'comp-pastspc-l1-8', sentence: 'She ___ (meet) her husband while she ___ (live) in Paris.', options: ['met / was living', 'was meeting / lived', 'met / lived'], correct: 'met / was living' },
          { id: 'comp-pastspc-l1-9', sentence: 'The children ___ (make) a lot of noise while their parents ___ (try) to sleep.', options: ['were making / were trying', 'made / tried', 'were making / tried'], correct: 'were making / were trying' },
          { id: 'comp-pastspc-l1-10', sentence: 'He ___ (not hear) the doorbell because he ___ (listen) to loud music.', options: ['didn\'t hear / was listening', 'wasn\'t hearing / listened', 'didn\'t hear / listened'], correct: 'didn\'t hear / was listening' },
        ],
        level2: [
          { id: 'comp-pastspc-l2-1', sentence: 'The sun ___ (shine) brightly when I ___ (wake) up this morning.', options: ['was shining / woke', 'shone / was waking', 'was shining / was waking'], correct: 'was shining / woke' },
          { id: 'comp-pastspc-l2-2', sentence: 'While the chef ___ (prepare) the main course, the waiter ___ (drop) a tray of glasses.', options: ['was preparing / dropped', 'prepared / was dropping', 'was preparing / was dropping'], correct: 'was preparing / dropped' },
          { id: 'comp-pastspc-l2-3', sentence: 'They ___ (not notice) me when I ___ (enter) the room because they ___ (argue) loudly.', options: ['didn\'t notice / entered / were arguing', 'weren\'t noticing / entered / argued', 'didn\'t notice / was entering / were arguing'], correct: 'didn\'t notice / entered / were arguing' },
          { id: 'comp-pastspc-l2-4', sentence: 'What ___ she ___ (wear) when you ___ (see) her at the party?', options: ['was / wearing / saw', 'did / wear / were seeing', 'was / wearing / were seeing'], correct: 'was / wearing / saw' },
          { id: 'comp-pastspc-l2-5', sentence: 'It ___ (snow) heavily when our plane ___ (land) in Denver.', options: ['was snowing / landed', 'snowed / was landing', 'was snowing / was landing'], correct: 'was snowing / landed' },
          { id: 'comp-pastspc-l2-6', sentence: 'I ___ (read) a book when suddenly I ___ (hear) a strange noise outside.', options: ['was reading / heard', 'read / was hearing', 'was reading / was hearing'], correct: 'was reading / heard' },
          { id: 'comp-pastspc-l2-7', sentence: 'He ___ (not pay) attention while the teacher ___ (explain) the instructions, so he ___ (do) the exercise incorrectly.', options: ['wasn\'t paying / was explaining / did', 'didn\'t pay / explained / was doing', 'wasn\'t paying / explained / did'], correct: 'wasn\'t paying / was explaining / did' },
          { id: 'comp-pastspc-l2-8', sentence: 'The children ___ (build) a sandcastle when a big wave ___ (come) and ___ (wash) it away.', options: ['were building / came / washed', 'built / was coming / was washing', 'were building / was coming / washed'], correct: 'were building / came / washed' },
          { id: 'comp-pastspc-l2-9', sentence: '___ you ___ (still work) on the report when I ___ (call) you at 10 PM?', options: ['Were / still working / called', 'Did / still work / was calling', 'Were / still working / was calling'], correct: 'Were / still working / called' },
          { id: 'comp-pastspc-l2-10', sentence: 'She ___ (try) to fix her computer when her brother ___ (offer) to help.', options: ['was trying / offered', 'tried / was offering', 'was trying / was offering'], correct: 'was trying / offered' },
        ],
        level3: [
          { id: 'comp-pastspc-l3-1', sentence: 'The detective ___ (examine) the crime scene when he ___ (find) a crucial piece of evidence.', options: ['was examining / found', 'examined / was finding', 'was examining / was finding'], correct: 'was examining / found' },
          { id: 'comp-pastspc-l3-2', sentence: 'While the band ___ (perform) their most popular song, the power suddenly ___ (go) out.', options: ['was performing / went', 'performed / was going', 'was performing / was going'], correct: 'was performing / went' },
          { id: 'comp-pastspc-l3-3', sentence: 'He ___ (not realize) he ___ (drive) in the wrong direction until he ___ (see) a familiar landmark.', options: ['didn\'t realize / was driving / saw', 'wasn\'t realizing / drove / was seeing', 'didn\'t realize / drove / saw'], correct: 'didn\'t realize / was driving / saw' },
          { id: 'comp-pastspc-l3-4', sentence: 'What ___ they ___ (discuss) so intently when you ___ (walk) into the meeting room?', options: ['were / discussing / walked', 'did / discuss / were walking', 'were / discussing / were walking'], correct: 'were / discussing / walked' },
          { id: 'comp-pastspc-l3-5', sentence: 'The artist ___ (paint) a portrait when her model unexpectedly ___ (sneeze).', options: ['was painting / sneezed', 'painted / was sneezing', 'was painting / was sneezing'], correct: 'was painting / sneezed' },
          { id: 'comp-pastspc-l3-6', sentence: 'I ___ (jog) in the park when it ___ (start) to pour with rain, so I ___ (take) shelter under a tree.', options: ['was jogging / started / took', 'jogged / was starting / was taking', 'was jogging / was starting / took'], correct: 'was jogging / started / took' },
          { id: 'comp-pastspc-l3-7', sentence: 'She ___ (not listen) carefully while her friend ___ (give) directions, which is why she ___ (get) lost.', options: ['wasn\'t listening / was giving / got', 'didn\'t listen / gave / was getting', 'wasn\'t listening / gave / got'], correct: 'wasn\'t listening / was giving / got' },
          { id: 'comp-pastspc-l3-8', sentence: 'The students ___ (work) quietly on their assignment when the fire alarm ___ (ring) loudly.', options: ['were working / rang', 'worked / was ringing', 'were working / was ringing'], correct: 'were working / rang' },
          { id: 'comp-pastspc-l3-9', sentence: '___ you ___ (watch) the news when they ___ (announce) the election results?', options: ['Were / watching / announced', 'Did / watch / were announcing', 'Were / watching / were announcing'], correct: 'Were / watching / announced' },
          { id: 'comp-pastspc-l3-10', sentence: 'He ___ (write) an email to his client when his computer ___ (crash) and he ___ (lose) all his work.', options: ['was writing / crashed / lost', 'wrote / was crashing / was losing', 'was writing / was crashing / lost'], correct: 'was writing / crashed / lost' },
        ]
      },
      'tenses-comparison-past-s-vs-pp': {
        level1: [
          { id: 'comp-pastspp-l1-1', sentence: 'When I ___ (arrive) at the station, the train ___ already ___ (leave).', options: ['arrived / had / left', 'had arrived / left', 'arrived / left'], correct: 'arrived / had / left' },
          { id: 'comp-pastspp-l1-2', sentence: 'She ___ (tell) me she ___ (visit) Rome before.', options: ['told / had visited', 'had told / visited', 'told / visited'], correct: 'told / had visited' },
          { id: 'comp-pastspp-l1-3', sentence: 'He ___ (not eat) breakfast before he ___ (go) to work.', options: ['hadn\'t eaten / went', 'didn\'t eat / had gone', 'hadn\'t eaten / had gone'], correct: 'hadn\'t eaten / went' },
          { id: 'comp-pastspp-l1-4', sentence: 'By the time the police ___ (get) there, the thieves ___ (escape).', options: ['got / had escaped', 'had got / escaped', 'got / escaped'], correct: 'got / had escaped' },
          { id: 'comp-pastspp-l1-5', sentence: 'I ___ (realize) I ___ (forget) my keys after I ___ (lock) the door.', options: ['realized / had forgotten / locked', 'had realized / forgot / had locked', 'realized / forgot / locked'], correct: 'realized / had forgotten / locked' },
          { id: 'comp-pastspp-l1-6', sentence: 'They ___ (live) in that city for years before they ___ (decide) to move.', options: ['had lived / decided', 'lived / had decided', 'had lived / had decided'], correct: 'had lived / decided' },
          { id: 'comp-pastspp-l1-7', sentence: 'After she ___ (finish) her presentation, she ___ (feel) relieved.', options: ['had finished / felt', 'finished / had felt', 'had finished / had felt'], correct: 'had finished / felt' },
          { id: 'comp-pastspp-l1-8', sentence: 'He ___ (be) very tired because he ___ (not sleep) well the night before.', options: ['was / hadn\'t slept', 'had been / didn\'t sleep', 'was / didn\'t sleep'], correct: 'was / hadn\'t slept' },
          { id: 'comp-pastspp-l1-9', sentence: 'We ___ (watch) the movie that we ___ (see) the week before.', options: ['watched / had seen', 'had watched / saw', 'watched / saw'], correct: 'watched / had seen' },
          { id: 'comp-pastspp-l1-10', sentence: 'The game ___ (start) when we ___ (arrive).', options: ['had started / arrived', 'started / had arrived', 'started / arrived'], correct: 'had started / arrived' },
        ],
        level2: [
          { id: 'comp-pastspp-l2-1', sentence: 'The patient ___ (already recover) by the time the doctor ___ (call) with the test results.', options: ['had already recovered / called', 'already recovered / had called', 'had already recovered / had called'], correct: 'had already recovered / called' },
          { id: 'comp-pastspp-l2-2', sentence: 'She ___ (not recognize) him at first because he ___ (change) so much since they last ___ (meet).', options: ['didn\'t recognize / had changed / met', 'hadn\'t recognized / changed / had met', 'didn\'t recognize / changed / met'], correct: 'didn\'t recognize / had changed / met' },
          { id: 'comp-pastspp-l2-3', sentence: 'Before he ___ (become) a famous writer, he ___ (work) as a journalist for several years.', options: ['became / had worked', 'had become / worked', 'became / worked'], correct: 'became / had worked' },
          { id: 'comp-pastspp-l2-4', sentence: 'By the time the firefighters ___ (arrive), the building ___ (already burn) to the ground.', options: ['arrived / had already burned', 'had arrived / already burned', 'arrived / already burned'], correct: 'arrived / had already burned' },
          { id: 'comp-pastspp-l2-5', sentence: 'I ___ (wish) I ___ (study) harder for the exam after I ___ (see) my poor results.', options: ['wished / had studied / saw', 'had wished / studied / had seen', 'wished / studied / saw'], correct: 'wished / had studied / saw' },
          { id: 'comp-pastspp-l2-6', sentence: 'They ___ (travel) all night and ___ (be) exhausted when they finally ___ (reach) their destination.', options: ['had travelled / were / reached', 'travelled / had been / had reached', 'had travelled / had been / reached'], correct: 'had travelled / were / reached' },
          { id: 'comp-pastspp-l2-7', sentence: 'After the guests ___ (leave), she ___ (realize) someone ___ (take) her expensive vase.', options: ['had left / realized / had taken', 'left / had realized / took', 'had left / had realized / took'], correct: 'had left / realized / had taken' },
          { id: 'comp-pastspp-l2-8', sentence: 'He ___ (be) a teacher for twenty years before he ___ (decide) to retire last year.', options: ['had been / decided', 'was / had decided', 'had been / had decided'], correct: 'had been / decided' },
          { id: 'comp-pastspp-l2-9', sentence: 'We ___ (not know) that they ___ (already make) other plans, so we ___ (invite) them to dinner.', options: ['didn\'t know / had already made / invited', 'hadn\'t known / already made / had invited', 'didn\'t know / already made / invited'], correct: 'didn\'t know / had already made / invited' },
          { id: 'comp-pastspp-l2-10', sentence: 'The concert ___ (sell out) weeks before, so we ___ (not be able) to get tickets when we ___ (try) last week.', options: ['had sold out / weren\'t / tried', 'sold out / hadn\'t been / had tried', 'had sold out / hadn\'t been / tried'], correct: 'had sold out / weren\'t / tried' },
        ],
        level3: [
          { id: 'comp-pastspp-l3-1', sentence: 'The company ___ (already go) bankrupt by the time the new CEO ___ (take) over.', options: ['had already gone / took', 'already went / had taken', 'had already gone / had taken'], correct: 'had already gone / took' },
          { id: 'comp-pastspp-l3-2', sentence: 'She ___ (not inform) her parents about her decision until she ___ (already sign) the contract.', options: ['didn\'t inform / had already signed', 'hadn\'t informed / already signed', 'didn\'t inform / already signed'], correct: 'didn\'t inform / had already signed' },
          { id: 'comp-pastspp-l3-3', sentence: 'Before the invention of the internet, people ___ (rely) on libraries and encyclopedias for information; they ___ (not have) instant access like we do now.', options: ['had relied / didn\'t have', 'relied / hadn\'t had', 'had relied / hadn\'t had'], correct: 'had relied / didn\'t have' },
          { id: 'comp-pastspp-l3-4', sentence: 'By the time the rescue team ___ (reach) the stranded hikers, they ___ (spend) three days in the wilderness without food.', options: ['reached / had spent', 'had reached / spent', 'reached / spent'], correct: 'reached / had spent' },
          { id: 'comp-pastspp-l3-5', sentence: 'I ___ (realize) with a shock that I ___ (leave) the oven on after I ___ (already drive) halfway to work.', options: ['realized / had left / had already driven', 'had realized / left / already drove', 'realized / left / already drove'], correct: 'realized / had left / had already driven' },
          { id: 'comp-pastspp-l3-6', sentence: 'They ___ (know) each other for only a few weeks before they ___ (decide) to get married, which ___ (surprise) everyone.', options: ['had known / decided / surprised', 'knew / had decided / had surprised', 'had known / had decided / surprised'], correct: 'had known / decided / surprised' },
          { id: 'comp-pastspp-l3-7', sentence: 'After the old bridge ___ (collapse), engineers ___ (discover) that it ___ (not be) properly maintained for years.', options: ['had collapsed / discovered / hadn\'t been', 'collapsed / had discovered / wasn\'t', 'had collapsed / had discovered / hadn\'t been'], correct: 'had collapsed / discovered / hadn\'t been' },
          { id: 'comp-pastspp-l3-8', sentence: 'He ___ (work) as a chef in several countries before he finally ___ (open) his own restaurant, which ___ (quickly become) very popular.', options: ['had worked / opened / quickly became', 'worked / had opened / had quickly become', 'had worked / had opened / quickly became'], correct: 'had worked / opened / quickly became' },
          { id: 'comp-pastspp-l3-9', sentence: 'We ___ (not hear) any news from them for months, so we ___ (begin) to worry before they finally ___ (contact) us.', options: ['hadn\'t heard / began / contacted', 'didn\'t hear / had begun / had contacted', 'hadn\'t heard / had begun / contacted'], correct: 'hadn\'t heard / began / contacted' },
          { id: 'comp-pastspp-l3-10', sentence: 'The ancient civilization ___ (flourish) for centuries before it mysteriously ___ (disappear), leaving behind only enigmatic ruins that ___ (puzzle) archaeologists ever since.', options: ['had flourished / disappeared / have puzzled', 'flourished / had disappeared / had puzzled', 'had flourished / had disappeared / puzzled'], correct: 'had flourished / disappeared / have puzzled' },
        ]
      },
      'tenses-comparison-past-s-vs-pres-p': {
        level1: [
          { id: 'comp-pastspresp-l1-1', sentence: 'I ___ (visit) Paris last year. I ___ (be) there twice now.', options: ['visited / have been', 'have visited / was', 'visited / was'], correct: 'visited / have been' },
          { id: 'comp-pastspresp-l1-2', sentence: 'She ___ (lose) her keys yesterday, and she still ___ (not find) them.', options: ['lost / hasn\'t found', 'has lost / didn\'t find', 'lost / didn\'t find'], correct: 'lost / hasn\'t found' },
          { id: 'comp-pastspresp-l1-3', sentence: 'They ___ (live) in this house since 2010. Before that, they ___ (live) in an apartment.', options: ['have lived / lived', 'lived / have lived', 'have lived / have lived'], correct: 'have lived / lived' },
          { id: 'comp-pastspresp-l1-4', sentence: 'He ___ (break) his arm when he was a child. ___ you ever ___ (break) a bone?', options: ['broke / Have / broken', 'has broken / Did / break', 'broke / Did / break'], correct: 'broke / Have / broken' },
          { id: 'comp-pastspresp-l1-5', sentence: 'I ___ (see) that film last week. ___ you ___ (see) it yet?', options: ['saw / Have / seen', 'have seen / Did / see', 'saw / Did / see'], correct: 'saw / Have / seen' },
          { id: 'comp-pastspresp-l1-6', sentence: 'My sister ___ (work) abroad for a year in 2018. She ___ (travel) a lot since then.', options: ['worked / has travelled', 'has worked / travelled', 'worked / travelled'], correct: 'worked / has travelled' },
          { id: 'comp-pastspresp-l1-7', sentence: 'We ___ (eat) sushi for the first time last night. We ___ never ___ (eat) it before.', options: ['ate / had / eaten', 'have eaten / did / eat', 'ate / have / eaten'], correct: 'ate / had / eaten' }, 
          { id: 'comp-pastspresp-l1-8', sentence: 'Shakespeare ___ (write) many plays. I ___ (read) Hamlet recently.', options: ['wrote / have read', 'has written / read', 'wrote / read'], correct: 'wrote / have read' },
          { id: 'comp-pastspresp-l1-9', sentence: 'The company ___ (grow) significantly last quarter. It ___ (grow) steadily for years.', options: ['grew / has grown', 'has grown / grew', 'grew / grew'], correct: 'grew / has grown' },
          { id: 'comp-pastspresp-l1-10', sentence: 'When ___ you ___ (start) learning English? I ___ (learn) it for five years.', options: ['did / start / have learned', 'have / started / learned', 'did / start / learned'], correct: 'did / start / have learned' }, 
        ],
        level2: [
          { id: 'comp-pastspresp-l2-1', sentence: 'They ___ (move) to this city five years ago. They ___ (make) many friends since then.', options: ['moved / have made', 'have moved / made', 'moved / made'], correct: 'moved / have made' },
          { id: 'comp-pastspresp-l2-2', sentence: 'He ___ (not visit) his hometown since he ___ (leave) for university.', options: ['hasn\'t visited / left', 'didn\'t visit / has left', 'hasn\'t visited / has left'], correct: 'hasn\'t visited / left' },
          { id: 'comp-pastspresp-l2-3', sentence: 'I ___ (buy) this car in 2020. So far, it ___ (not give) me any problems.', options: ['bought / hasn\'t given', 'have bought / didn\'t give', 'bought / didn\'t give'], correct: 'bought / hasn\'t given' },
          { id: 'comp-pastspresp-l2-4', sentence: 'She ___ (start) her new job last Monday. How ___ she ___ (find) it so far?', options: ['started / has / found', 'has started / did / find', 'started / did / find'], correct: 'started / has / found' },
          { id: 'comp-pastspresp-l2-5', sentence: 'We ___ (know) each other for ages. We first ___ (meet) in primary school.', options: ['have known / met', 'knew / have met', 'have known / have met'], correct: 'have known / met' },
          { id: 'comp-pastspresp-l2-6', sentence: 'The weather ___ (be) terrible yesterday, but it ___ (improve) a lot today.', options: ['was / has improved', 'has been / improved', 'was / improved'], correct: 'was / has improved' },
          { id: 'comp-pastspresp-l2-7', sentence: 'He ___ (write) three books. He ___ (publish) his first one ten years ago.', options: ['has written / published', 'wrote / has published', 'has written / has published'], correct: 'has written / published' },
          { id: 'comp-pastspresp-l2-8', sentence: 'I ___ (not see) her since she ___ (change) schools last term.', options: ['haven\'t seen / changed', 'didn\'t see / has changed', 'haven\'t seen / has changed'], correct: 'haven\'t seen / changed' },
          { id: 'comp-pastspresp-l2-9', sentence: 'They ___ (build) that bridge in the 19th century. It ___ (stand) for over 150 years.', options: ['built / has stood', 'have built / stood', 'built / stood'], correct: 'built / has stood' },
          { id: 'comp-pastspresp-l2-10', sentence: 'My computer ___ (crash) earlier today. ___ you ever ___ (have) problems with yours?', options: ['crashed / Have / had', 'has crashed / Did / have', 'crashed / Did / have'], correct: 'crashed / Have / had' },
        ],
        level3: [
          { id: 'comp-pastspresp-l3-1', sentence: 'The artist ___ (paint) this masterpiece in 1888, and it ___ (be) in the museum\'s collection ever since.', options: ['painted / has been', 'has painted / was', 'painted / was'], correct: 'painted / has been' },
          { id: 'comp-pastspresp-l3-2', sentence: 'She ___ (not speak) to him since they ___ (have) that argument last month, and she ___ (still feel) upset about it.', options: ['hasn\'t spoken / had / still feels', 'didn\'t speak / had / has still felt', 'hasn\'t spoken / had / is still feeling'], correct: 'hasn\'t spoken / had / still feels' },
          { id: 'comp-pastspresp-l3-3', sentence: 'I ___ (begin) learning the piano when I ___ (be) six years old, and I ___ (play) it regularly for over a decade now.', options: ['began / was / have played', 'have begun / was / played', 'began / have been / have played'], correct: 'began / was / have played' },
          { id: 'comp-pastspresp-l3-4', sentence: 'He ___ (suffer) a serious injury during the match last Saturday, and as a result, he ___ (not be able) to train this week.', options: ['suffered / hasn\'t been able', 'has suffered / wasn\'t able', 'suffered / wasn\'t able'], correct: 'suffered / hasn\'t been able' },
          { id: 'comp-pastspresp-l3-5', sentence: 'We ___ (visit) that remote island several times in the past. The last time we ___ (go) there, it ___ (change) quite a bit.', options: ['have visited / went / had changed', 'visited / have gone / changed', 'have visited / had gone / changed'], correct: 'have visited / went / had changed' },
          { id: 'comp-pastspresp-l3-6', sentence: 'The company ___ (launch) its first product in 2005. Since then, it ___ (expand) into several international markets.', options: ['launched / has expanded', 'has launched / expanded', 'launched / expanded'], correct: 'launched / has expanded' },
          { id: 'comp-pastspresp-l3-7', sentence: 'My grandparents ___ (live) in the same house for fifty years before they ___ (decide) to move last year. They ___ (be) very happy there.', options: ['had lived / decided / had been', 'lived / have decided / were', 'had lived / have decided / were'], correct: 'had lived / decided / had been' },
          { id: 'comp-pastspresp-l3-8', sentence: 'I ___ (read) that author\'s latest novel as soon as it ___ (come out) last month. ___ you ___ (read) any of her books before?', options: ['read / came out / Have / read', 'have read / came out / Did / read', 'read / has come out / Have / read'], correct: 'read / came out / Have / read' },
          { id: 'comp-pastspresp-l3-9', sentence: 'The city ___ (experience) rapid growth in the last decade. When I ___ (first visit) it twenty years ago, it ___ (be) much smaller.', options: ['has experienced / first visited / was', 'experienced / have first visited / has been', 'has experienced / had first visited / was'], correct: 'has experienced / first visited / was' },
          { id: 'comp-pastspresp-l3-10', sentence: 'She ___ (work) as a volunteer in Africa for a year after she ___ (graduate) from university. That experience ___ (change) her perspective on life completely.', options: ['worked / graduated / changed', 'has worked / graduated / has changed', 'worked / had graduated / changed'], correct: 'worked / graduated / changed' },
        ]
      },
    };

    export const comparisonsExercises = {};
    for (const topic in originalComparisonsExercises) {
      comparisonsExercises[topic] = processTopic(originalComparisonsExercises[topic]);
    }
  