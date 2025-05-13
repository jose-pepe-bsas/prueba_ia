
    const generateGridLogic = (size, wordsToPlace) => {
      const grid = Array(size).fill(null).map(() => Array(size).fill(''));
      const directions = [
        { x: 1, y: 0 }, 
        { x: 0, y: 1 }, 
        { x: 1, y: 1 }, 
        { x: 1, y: -1 },
        { x: -1, y: 0 }, 
        { x: 0, y: -1 }, 
        { x: -1, y: -1 },
        { x: -1, y: 1 },
      ];
      const placedWordsDetails = [];

      const canPlaceWord = (word, row, col, dir) => {
        for (let i = 0; i < word.length; i++) {
          const newRow = row + i * dir.y;
          const newCol = col + i * dir.x;
          if (
            newRow < 0 || newRow >= size ||
            newCol < 0 || newCol >= size ||
            (grid[newRow][newCol] !== '' && grid[newRow][newCol] !== word[i])
          ) {
            return false;
          }
        }
        return true;
      };

      const placeWordOnGrid = (word, row, col, dir) => {
        const positions = [];
        for (let i = 0; i < word.length; i++) {
          const newRow = row + i * dir.y;
          const newCol = col + i * dir.x;
          grid[newRow][newCol] = word[i];
          positions.push({ row: newRow, col: newCol });
        }
        placedWordsDetails.push({ text: word, positions, es: wordsToPlace.find(w => w.en.toUpperCase().replace(/[\s-]/g, '') === word)?.es || word });
      };

      const sortedWords = [...wordsToPlace].sort((a, b) => b.en.length - a.en.length);

      for (const wordObj of sortedWords) {
        const word = wordObj.en.toUpperCase().replace(/[\s-]/g, '');
        if (!word) continue;

        let placed = false;
        for (let attempts = 0; attempts < 200; attempts++) { 
          const dir = directions[Math.floor(Math.random() * directions.length)];
          const row = Math.floor(Math.random() * size);
          const col = Math.floor(Math.random() * size);

          if (canPlaceWord(word, row, col, dir)) {
            placeWordOnGrid(word, row, col, dir);
            placed = true;
            break;
          }
        }
        if (!placed) {
          console.warn(`Could not place word: ${word}`);
        }
      }

      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (grid[r][c] === '') {
            grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
          }
        }
      }
      return { grid, placedWordsDetails };
    };

    export default generateGridLogic;
  