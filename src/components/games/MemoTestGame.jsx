
    import React, { useState, useEffect, useCallback } from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card';
    import { motion, AnimatePresence } from 'framer-motion';
    import { HelpCircle, CheckCircle, RefreshCw } from 'lucide-react';
    import { getTopicWords, getNumberWordsByLevel, kidsVocabulary } from '@/data/kids';

    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    const MemoTestGame = ({ topicId, level }) => {
      const [cards, setCards] = useState([]);
      const [flippedCards, setFlippedCards] = useState([]);
      const [matchedPairs, setMatchedPairs] = useState(0);
      const [isChecking, setIsChecking] = useState(false);
      const [gameWonMessage, setGameWonMessage] = useState('');

      const initializeGame = useCallback(() => {
        let itemsPool = [];
        if (topicId === 'vocabulary-numbers') {
          itemsPool = getNumberWordsByLevel(level || 'easy');
        } else {
          itemsPool = getTopicWords(topicId, level || 'easy');
        }

        if (!itemsPool || itemsPool.length === 0) {
            itemsPool = kidsVocabulary['vocabulary-colors'].words; 
        }
        
        const selectedItems = shuffleArray(itemsPool).slice(0, 6); 
        let gameCards = [];

        if (topicId === 'vocabulary-colors') {
          gameCards = selectedItems.flatMap((item, index) => [
            { content: item.en, pairId: index, uniqueId: `${index}-en`, type: 'en', color: item.color, textColor: item.textColor, es: item.es },
            { content: item.es, pairId: index, uniqueId: `${index}-es`, type: 'es', color: item.color, textColor: item.textColor, en: item.en }
          ]);
        } else if (topicId === 'vocabulary-numbers') {
           gameCards = selectedItems.flatMap((item, index) => [
            { content: item.en, pairId: index, uniqueId: `${index}-en`, type: 'en', es: item.es, num: item.num },
            { content: item.num.toString(), pairId: index, uniqueId: `${index}-num`, type: 'num', en: item.en, es: item.es }
          ]);
        } else { 
          gameCards = selectedItems.flatMap((item, index) => [
            { content: item.en, pairId: index, uniqueId: `${index}-en`, type: 'en', es: item.es },
            { content: item.es, pairId: index, uniqueId: `${index}-es`, type: 'es', en: item.en }
          ]);
        }
        
        setCards(shuffleArray(gameCards.map(card => ({ ...card, isFlipped: false, isMatched: false }))));
        setFlippedCards([]);
        setMatchedPairs(0);
        setIsChecking(false);
        setGameWonMessage('');
      }, [topicId, level]);

      useEffect(() => {
        initializeGame();
      }, [initializeGame]);

      const handleCardClick = (clickedCard) => {
        if (isChecking || clickedCard.isFlipped || clickedCard.isMatched || flippedCards.length === 2) {
          return;
        }

        const newCards = cards.map(card =>
          card.uniqueId === clickedCard.uniqueId ? { ...card, isFlipped: true } : card
        );
        setCards(newCards);
        setFlippedCards([...flippedCards, clickedCard]);
      };

      useEffect(() => {
        if (flippedCards.length === 2) {
          setIsChecking(true);
          const [firstCard, secondCard] = flippedCards;
          if (firstCard.pairId === secondCard.pairId) {
            setMatchedPairs(prev => prev + 1);
            setCards(prevCards =>
              prevCards.map(card =>
                card.pairId === firstCard.pairId ? { ...card, isMatched: true, isFlipped: true } : card
              )
            );
            setFlippedCards([]);
            setIsChecking(false);
          } else {
            setTimeout(() => {
              setCards(prevCards =>
                prevCards.map(card =>
                  card.uniqueId === firstCard.uniqueId || card.uniqueId === secondCard.uniqueId
                    ? { ...card, isFlipped: false }
                    : card
                )
              );
              setFlippedCards([]);
              setIsChecking(false);
            }, 1000);
          }
        }
      }, [flippedCards]);

      const isGameWon = cards.length > 0 && matchedPairs * 2 === cards.length;

      useEffect(() => {
        if (isGameWon) {
          setGameWonMessage('¡Ganaste! Encontraste todas las parejas.');
        }
      }, [isGameWon]);


      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mt-8 p-6 border rounded-lg glass-effect dark:glass-effect shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-primary">¡Memo Test!</h3>
          
          <AnimatePresence>
            {isGameWon && gameWonMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-6 p-4 bg-green-100 dark:bg-green-800 rounded-lg"
              >
                <p className="text-2xl font-bold text-green-600 flex items-center justify-center">
                  <CheckCircle className="mr-2"/> {gameWonMessage}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={`grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto mb-6 ${isGameWon ? 'opacity-50 pointer-events-none' : ''}`}>
            {cards.map((card) => (
              <motion.div
                key={card.uniqueId}
                onClick={() => handleCardClick(card)}
                className="aspect-square cursor-pointer rounded-md overflow-hidden"
                animate={{ rotateY: card.isFlipped ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <Card 
                    className="absolute w-full h-full flex items-center justify-center transition-colors duration-300 bg-secondary dark:bg-secondary/80 hover:bg-secondary/70 dark:hover:bg-secondary/70"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                  >
                     <HelpCircle className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
                  </Card>
                  <Card 
                    className={`absolute w-full h-full flex items-center justify-center transition-colors duration-300 ${card.isMatched ? 'bg-green-200 dark:bg-green-700' : (card.color ? '' : 'bg-accent dark:bg-accent/70')}`}
                    style={{ 
                        backfaceVisibility: 'hidden', 
                        transform: 'rotateY(180deg)',
                        backgroundColor: card.isFlipped && card.color ? card.color : undefined,
                        color: card.isFlipped && card.textColor ? card.textColor : undefined
                    }}
                  >
                    <CardContent className="p-1 text-center">
                        <span className="text-xs sm:text-sm font-semibold">{card.content}</span>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button onClick={initializeGame} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" /> Reiniciar Juego
            </Button>
          </div>
        </motion.div>
      );
    };

    export default MemoTestGame;
  