
    import React, { useState, useEffect, useCallback } from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { RefreshCw } from 'lucide-react';
    import { getTopicWords, getNumberWordsByLevel, kidsVocabulary } from '@/data/kids';
    import generateGridLogic from '@/components/games/word-search/gridLogic';
    import WordSearchGrid from '@/components/games/word-search/WordSearchGrid';
    import WordList from '@/components/games/word-search/WordList';
    import GameStatus from '@/components/games/word-search/GameStatus';

    const WordSearchGame = ({ topicId, level }) => {
      const [gridData, setGridData] = useState({ grid: [], placedWordsDetails: [] });
      const [wordsToFindUi, setWordsToFindUi] = useState([]);
      const [foundWords, setFoundWords] = useState([]);
      const [selectedCells, setSelectedCells] = useState([]);
      const [isGameWon, setIsGameWon] = useState(false);
      const [gridSize, setGridSize] = useState(10);

      const initializeGame = useCallback(() => {
        let currentGridSize;
        if (level === 'easy') currentGridSize = 10;
        else if (level === 'medium') currentGridSize = 15;
        else if (level === 'hard') currentGridSize = 20;
        else currentGridSize = 10; 
        setGridSize(currentGridSize);

        let itemsPool = [];
        if (topicId === 'vocabulary-numbers') {
          itemsPool = getNumberWordsByLevel(level || 'easy');
        } else {
          itemsPool = getTopicWords(topicId, level || 'easy');
        }

        if (!itemsPool || itemsPool.length === 0) {
          itemsPool = kidsVocabulary['vocabulary-colors'].words; 
        }
        
        let numWordsToPlace;
        if (level) { 
            numWordsToPlace = Math.max(10, Math.min(itemsPool.length, Math.floor(currentGridSize * 1.5))); 
        } else { 
            numWordsToPlace = itemsPool.length; 
        }
        
        const wordsForGrid = itemsPool.slice(0, numWordsToPlace).map(w => ({...w, en: w.en.toUpperCase().replace(/[\s-]/g, '')}));

        const { grid, placedWordsDetails } = generateGridLogic(currentGridSize, wordsForGrid);
        setGridData({ grid, placedWordsDetails });
        
        const actualPlacedWordObjects = placedWordsDetails.map(pwd => ({ en: pwd.text, es: pwd.es || pwd.text }));
        setWordsToFindUi(actualPlacedWordObjects);
        
        setFoundWords([]);
        setSelectedCells([]);
        setIsGameWon(false);
      }, [topicId, level]);

      useEffect(() => {
        initializeGame();
      }, [initializeGame]);

      const handleCellClick = (row, col, char) => {
        if (isGameWon) return;

        const cellKey = `${row}-${col}`;
        const existingCellIndex = selectedCells.findIndex(cell => cell.key === cellKey);

        let newSelectedCells;
        if (existingCellIndex > -1) {
          newSelectedCells = selectedCells.filter((_, index) => index !== existingCellIndex);
        } else {
          newSelectedCells = [...selectedCells, { row, col, char, key: cellKey }];
        }
        setSelectedCells(newSelectedCells);
        checkWordFormation(newSelectedCells);
      };
      
      const checkWordFormation = (currentSelectedCells) => {
        if (currentSelectedCells.length < 2) return;
    
        const selectedWord = currentSelectedCells.map(cell => cell.char).join('');
        const reversedSelectedWord = currentSelectedCells.map(cell => cell.char).reverse().join('');
    
        const wordDetail = gridData.placedWordsDetails.find(
          wd => (wd.text === selectedWord || wd.text === reversedSelectedWord) && !foundWords.includes(wd.text)
        );
    
        if (wordDetail) {
          const wordPositionsInGrid = wordDetail.positions.map(p => `${p.row}-${p.col}`);
          const selectedPositions = currentSelectedCells.map(c => `${c.row}-${c.col}`);
          
          const isMatch = wordPositionsInGrid.length === selectedPositions.length && 
                          wordPositionsInGrid.every(pKey => selectedPositions.includes(pKey)) &&
                          selectedPositions.every(pKey => wordPositionsInGrid.includes(pKey));

          if (isMatch) {
            setFoundWords(prev => [...prev, wordDetail.text]);
            setSelectedCells([]); 
          }
        }
      };

      useEffect(() => {
        if (wordsToFindUi.length > 0 && foundWords.length === wordsToFindUi.length) {
          setIsGameWon(true);
        }
      }, [foundWords, wordsToFindUi]);

      const getCellClasses = (row, col) => {
        const isSelected = selectedCells.some(cell => cell.row === row && cell.col === col);
        let isFound = false;
        
        gridData.placedWordsDetails.forEach(wordDetail => {
            if (foundWords.includes(wordDetail.text)) {
                if (wordDetail.positions.some(pos => pos.row === row && pos.col === col)) {
                    isFound = true;
                }
            }
        });

        let classes = "flex items-center justify-center aspect-square border border-muted-foreground/20 cursor-pointer transition-all duration-150 text-xs sm:text-sm md:text-base";
        if (isFound) classes += " bg-green-400/70 dark:bg-green-600/70 text-white font-bold";
        else if (isSelected) classes += " bg-blue-400/70 dark:bg-blue-600/70 text-white scale-105";
        else classes += " bg-secondary/50 hover:bg-secondary";
        return classes;
      };

      if (gridData.grid.length === 0) {
        return <p className="text-center mt-8">Cargando sopa de letras...</p>;
      }

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mt-8 p-4 sm:p-6 border rounded-lg glass-effect dark:glass-effect shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-primary">Sopa de Letras</h3>
          
          <GameStatus isGameWon={isGameWon} selectedCells={selectedCells} />

          <div className="flex flex-col md:flex-row gap-4">
            <WordSearchGrid 
              grid={gridData.grid} 
              gridSize={gridSize} 
              getCellClasses={getCellClasses} 
              handleCellClick={handleCellClick} 
            />
            <WordList wordsToFindUi={wordsToFindUi} foundWords={foundWords} />
          </div>

          <div className="text-center mt-6">
            <Button onClick={initializeGame} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" /> Reiniciar Juego
            </Button>
          </div>
        </motion.div>
      );
    };

    export default WordSearchGame;
  