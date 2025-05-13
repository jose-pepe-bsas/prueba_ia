
    import React, { useState, useEffect, useCallback } from 'react';
    import { Button } from '@/components/ui/button';
    import { motion, AnimatePresence } from 'framer-motion';
    import { AlertCircle, RefreshCw, Smile, Frown, Lightbulb } from 'lucide-react';
    import { getTopicWords, getNumberWordsByLevel } from '@/data/kids';

    const HangmanGame = ({ topicId, level }) => {
      const [currentWordData, setCurrentWordData] = useState({ en: '', es: '' });
      const [guessedLetters, setGuessedLetters] = useState(new Set());
      const [mistakes, setMistakes] = useState(0);
      const maxMistakes = 6;

      const selectWord = useCallback(() => {
        let wordPool = [];
        if (topicId === 'vocabulary-numbers') {
          wordPool = getNumberWordsByLevel(level || 'easy');
        } else {
          wordPool = getTopicWords(topicId, level);
        }

        if (wordPool && wordPool.length > 0) {
          const randomIndex = Math.floor(Math.random() * wordPool.length);
          const selectedWord = wordPool[randomIndex];
          setCurrentWordData({ 
            en: selectedWord.en.toUpperCase(), 
            es: selectedWord.es 
          });
        } else {
          setCurrentWordData({ en: 'ERROR', es: 'Error' }); // Fallback
        }
        setGuessedLetters(new Set());
        setMistakes(0);
      }, [topicId, level]);

      useEffect(() => {
        selectWord();
      }, [selectWord]);

      const wordToGuess = currentWordData.en;

      const handleGuess = (letter) => {
        if (!wordToGuess || guessedLetters.has(letter) || mistakes >= maxMistakes || isGameWon) return;

        const newGuessedLetters = new Set(guessedLetters);
        newGuessedLetters.add(letter);
        setGuessedLetters(newGuessedLetters);

        if (!wordToGuess.includes(letter)) {
          setMistakes(mistakes + 1);
        }
      };

      const isGameWon = wordToGuess && wordToGuess.split('').every(letter => guessedLetters.has(letter) || letter === '-' || letter === ' ');
      const isGameLost = mistakes >= maxMistakes;
      const isGameOver = isGameWon || isGameLost;

      const displayedWord = wordToGuess
        .split('')
        .map(letter => (guessedLetters.has(letter) || letter === '-' || letter === ' ' ? letter : '_'))
        .join(' ');

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

      const hangmanParts = [
        <circle key="head" cx="125" cy="50" r="15" stroke="currentColor" strokeWidth="3" fill="none" />,
        <line key="body" x1="125" y1="65" x2="125" y2="115" stroke="currentColor" strokeWidth="3" />,
        <line key="armL" x1="125" y1="80" x2="100" y2="100" stroke="currentColor" strokeWidth="3" />,
        <line key="armR" x1="125" y1="80" x2="150" y2="100" stroke="currentColor" strokeWidth="3" />,
        <line key="legL" x1="125" y1="115" x2="100" y2="140" stroke="currentColor" strokeWidth="3" />,
        <line key="legR" x1="125" y1="115" x2="150" y2="140" stroke="currentColor" strokeWidth="3" />,
      ];

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mt-8 p-6 border rounded-lg glass-effect dark:glass-effect shadow-md flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-primary">¡Ahorcado!</h3>
          
          <svg width="250" height="180" viewBox="0 0 250 180" className="mb-4">
            <line x1="20" y1="170" x2="100" y2="170" stroke="currentColor" strokeWidth="3" /> 
            <line x1="60" y1="170" x2="60" y2="20" stroke="currentColor" strokeWidth="3" /> 
            <line x1="60" y1="20" x2="125" y2="20" stroke="currentColor" strokeWidth="3" /> 
            <line x1="125" y1="20" x2="125" y2="35" stroke="currentColor" strokeWidth="3" /> 
            {hangmanParts.slice(0, mistakes)}
          </svg>

          <p className="text-center text-3xl font-bold tracking-widest my-6">{displayedWord}</p>
          <p className="text-center text-sm text-muted-foreground mb-6">Intentos restantes: {maxMistakes - mistakes}</p>

          <AnimatePresence>
            {isGameOver && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-center mb-6 p-4 bg-background/70 rounded-lg"
              >
                {isGameWon ? (
                  <p className="text-2xl font-bold text-green-600 flex items-center justify-center"><Smile className="mr-2"/> ¡Ganaste!</p>
                ) : (
                  <p className="text-2xl font-bold text-red-600 flex items-center justify-center"><Frown className="mr-2"/> ¡Perdiste!</p>
                )}
                <p className="text-lg mt-2">La palabra era: <span className="font-semibold text-accent">{currentWordData.en}</span></p>
                <p className="text-md text-muted-foreground">Traducción: <span className="font-semibold">{currentWordData.es}</span></p>
                <Button onClick={selectWord} variant="outline" className="mt-4">
                  <RefreshCw className="mr-2 h-4 w-4" /> Jugar de Nuevo
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {!isGameOver && (
            <div className="flex justify-center gap-1 md:gap-2 mt-4 flex-wrap max-w-md mx-auto">
              {alphabet.map(letter => (
                <Button
                  key={letter}
                  variant="outline"
                  size="sm"
                  className={`w-8 h-8 p-0 ${guessedLetters.has(letter) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/20'}`}
                  onClick={() => handleGuess(letter)}
                  disabled={guessedLetters.has(letter) || isGameOver}
                >
                  {letter}
                </Button>
              ))}
            </div>
          )}

          {!wordToGuess && (
             <p className="text-center mt-6 text-red-500 flex items-center justify-center"><AlertCircle className="mr-2"/> No se pudo cargar la palabra.</p>
          )}
        </motion.div>
      );
    };

    export default HangmanGame;
  