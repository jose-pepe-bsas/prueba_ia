
    import { generateDefaultLevel } from '@/data/exercise-helpers';

    export const comparativesTheTheData = {
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
      level3: [
        { id: 'ctt-l3-1', sentence: '______ I try to understand quantum physics, ______ I confuse myself.', options: ['The more / the more', 'The most / the most', 'The better / the best'], correct: 'The more / the more' },
        { id: 'ctt-l3-2', sentence: '______ you analyze the data, ______ the discrepancies become.', options: ['the deep / the crearest', 'The more deep / the more clear', 'The deeper / the clearer'], correct: 'The deeper / the clearer' },
        { id: 'ctt-l3-3', sentence: '______ I reflect on her words, ______ I understand her point.', options: ['The more / the better', 'The most / the most', 'The much / the best'], correct: 'The more / the better' },
        { id: 'ctt-l3-4', sentence: '______ the theory gets, ______ it is to apply in real life.', options: ['The complex / the more complicated', 'The more complex / the harder', 'The complicated / the more difficult'], correct: 'The more complex / the harder' },
        { id: 'ctt-l3-5', sentence: '______ he pushes himself, ______ he achieves.', options: ['The more / the more', 'The better / the most', 'The most / the harder'], correct: 'The more / the more' },
        { id: 'ctt-l3-6', sentence: '______ you mix logic and emotion, ______ the decision becomes.', options: ['The more / the trickier', 'The more / the more tricky', 'The tricky / the trickier'], correct: 'The more / the trickier' },
        { id: 'ctt-l3-7', sentence: '______ we delay action, ______ the consequences are.', options: ['the more long / the worse', 'The most long / the more bad', 'The longer / the worse'], correct: 'The longer / the worse' },
        { id: 'ctt-l3-8', sentence: '______ they manipulate the results, ______ it reflects poorly on them.', options: ['The more / the more', 'The most / the most', 'The better / the better'], correct: 'The more / the more' },
        { id: 'ctt-l3-9', sentence: '______ you examine the case, ______ flaws emerge.', options: ['The closer / the more', 'The much / the many', 'The clearer / the worst'], correct: 'The closer / the more' },
        { id: 'ctt-l3-10', sentence: '______ she tries to fake a smile, ______ it seems real.', options: ['the less / most', 'The more / the less', 'The better / the lesser'], correct: 'The more / the less' },
      ],
    };
  