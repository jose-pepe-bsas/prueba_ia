
    export const defaultExercise = (idPrefix, index, level = 1) => ({
      id: `${idPrefix}-l${level}-${(index % 10) + 1}`,
      sentence: `Placeholder sentence L${level}-${(index % 10) + 1} for ${idPrefix} (...) ...`,
      options: [`Option A`, `Option B`, `Option C`],
      correct: `Option B`,
    });

    export const generateDefaultLevel = (idPrefix, count = 10, level = 1) => 
      Array.from({ length: count }, (_, i) => defaultExercise(idPrefix, i, level));
      
    export const generateDefaultTopicExercises = (idPrefix) => ({
        level1: generateDefaultLevel(idPrefix, 10, 1),
        level2: generateDefaultLevel(idPrefix, 10, 2),
        level3: generateDefaultLevel(idPrefix, 10, 3),
    });
  