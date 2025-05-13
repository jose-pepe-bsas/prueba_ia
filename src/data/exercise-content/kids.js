
    import { generateDefaultLevel } from '@/data/exercise-helpers';

    export const kidsExercises = {
      'vocabulary-colors': { 
        level1: [
          { id: 'kc-col-l1-1', word: 'RED', hint: 'Color de una manzana' },
          { id: 'kc-col-l1-2', word: 'BLUE', hint: 'Color del cielo' },
          { id: 'kc-col-l1-3', word: 'GREEN', hint: 'Color del pasto' },
        ] 
      },
      'vocabulary-numbers': { 
        easy: [
            { id: 'kc-num-e-1', word: 'ONE', hint: '1' },
            { id: 'kc-num-e-2', word: 'TWO', hint: '2' },
            { id: 'kc-num-e-3', word: 'THREE', hint: '3' },
        ],
        intermediate: [
            { id: 'kc-num-i-1', word: 'TWENTY', hint: '20' },
            { id: 'kc-num-i-2', word: 'FIFTY', hint: '50' },
            { id: 'kc-num-i-3', word: 'HUNDRED', hint: '100' },
        ],
        hard: [
            { id: 'kc-num-h-1', word: 'ONEHUNDREDONE', hint: '101' },
            { id: 'kc-num-h-2', word: 'FIVEHUNDRED', hint: '500' },
            { id: 'kc-num-h-3', word: 'THOUSAND', hint: '1000' },
        ]
      },
      'vocabulary-pronouns': { 
        level1: [
          { id: 'kc-pro-l1-1', word: 'I', hint: 'Yo' },
          { id: 'kc-pro-l1-2', word: 'YOU', hint: 'Tú' },
          { id: 'kc-pro-l1-3', word: 'HE', hint: 'Él' },
          { id: 'kc-pro-l1-4', word: 'SHE', hint: 'Ella' },
          { id: 'kc-pro-l1-5', word: 'IT', hint: 'Eso (objeto/animal)' },
          { id: 'kc-pro-l1-6', word: 'WE', hint: 'Nosotros' },
          { id: 'kc-pro-l1-7', word: 'THEY', hint: 'Ellos/Ellas' },
        ]
      },
      'vocabulary-animals': { level1: generateDefaultLevel('vocabulary-animals', 5) }, 
      'vocabulary-family': { level1: generateDefaultLevel('vocabulary-family', 5) }, 
    };
  