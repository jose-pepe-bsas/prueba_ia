
    import React, { useState, useEffect } from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
    import { motion, AnimatePresence } from 'framer-motion';
    import { ToyBrick, Palette, Sigma, Sparkles, Users, Puzzle, MousePointerClick, Search, Brain } from 'lucide-react';
    import HangmanGame from '@/components/games/HangmanGame';
    import WordSearchGame from '@/components/games/WordSearchGame';
    import MultipleChoiceGame from '@/components/games/MultipleChoiceGame';
    import MemoTestGame from '@/components/games/MemoTestGame';
    import { kidsVocabulary } from '@/data/kids';

    const KidsCornerPage = () => {
      const kidsTopicsMeta = Object.keys(kidsVocabulary).map(id => ({
        id,
        name: kidsVocabulary[id].name,
        levels: kidsVocabulary[id].levels ? Object.keys(kidsVocabulary[id].levels) : null,
        defaultLevel: kidsVocabulary[id].levels ? 'easy' : null
      }));

      const [selectedTopic, setSelectedTopic] = useState(null);
      const [selectedLevel, setSelectedLevel] = useState(null);
      const [selectedGameType, setSelectedGameType] = useState('hangman');
      const [gameKey, setGameKey] = useState(0);
      const [showLevelSelector, setShowLevelSelector] = useState(false);

      const getIcon = (id) => {
        if (id.includes('colors')) return <Palette className="h-6 w-6 mr-2 text-pink-500" />;
        if (id.includes('numbers')) return <Sigma className="h-6 w-6 mr-2 text-blue-500" />;
        if (id.includes('pronouns')) return <Users className="h-6 w-6 mr-2 text-green-500" />;
        if (id.includes('animals')) return <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />;
        if (id.includes('family')) return <Users className="h-6 w-6 mr-2 text-purple-500" />;
        return <ToyBrick className="h-6 w-6 mr-2 text-gray-500" />;
      };

      const handleTopicSelect = (topicMeta) => {
        setSelectedTopic(topicMeta);
        if (topicMeta.levels) {
          setSelectedLevel(topicMeta.defaultLevel || topicMeta.levels[0]);
          setShowLevelSelector(true);
        } else {
          setSelectedLevel(null);
          setShowLevelSelector(false);
        }
        
        setSelectedGameType('hangman'); 
        setGameKey(prevKey => prevKey + 1);
      };
      
      const handleLevelSelect = (level) => {
        setSelectedLevel(level);
        setGameKey(prevKey => prevKey + 1);
      };

      const handleGameTypeChange = (gameType) => {
        setSelectedGameType(gameType);
        setGameKey(prevKey => prevKey + 1);
      };

      const renderGame = () => {
        if (!selectedTopic) return null;
        return (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTopic.id}-${selectedLevel}-${selectedGameType}-${gameKey}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {selectedGameType === 'hangman' && <HangmanGame topicId={selectedTopic.id} level={selectedLevel} />}
              {selectedGameType === 'wordsearch' && <WordSearchGame topicId={selectedTopic.id} level={selectedLevel} />}
              {selectedGameType === 'choice' && <MultipleChoiceGame topicId={selectedTopic.id} level={selectedLevel} />}
              {selectedGameType === 'memotest' && <MemoTestGame topicId={selectedTopic.id} level={selectedLevel} />}
            </motion.div>
          </AnimatePresence>
        );
      };
      
      const getLevelName = (topicId, levelKey) => {
        return kidsVocabulary[topicId]?.levels?.[levelKey]?.name || levelKey.charAt(0).toUpperCase() + levelKey.slice(1);
      }

      const getAvailableGamesForTopic = (topicId) => {
        if (topicId === 'vocabulary-pronouns') {
          return [
            { value: 'hangman', label: 'Ahorcado', icon: <Puzzle className="inline-block h-4 w-4 mr-1"/> },
            { value: 'choice', label: 'Opción Múltiple', icon: <MousePointerClick className="inline-block h-4 w-4 mr-1"/> },
          ];
        }
        
        const defaultGames = [
          { value: 'hangman', label: 'Ahorcado', icon: <Puzzle className="inline-block h-4 w-4 mr-1"/> },
          { value: 'wordsearch', label: 'Sopa de Letras', icon: <Search className="inline-block h-4 w-4 mr-1"/> },
          { value: 'choice', label: 'Opción Múltiple', icon: <MousePointerClick className="inline-block h-4 w-4 mr-1"/> },
        ];
        
        return defaultGames;
      };
      
      const availableGames = selectedTopic ? getAvailableGamesForTopic(selectedTopic.id) : [];

      useEffect(() => {
        if (selectedTopic && availableGames.length > 0) {
            const currentSelectedGameStillAvailable = availableGames.some(game => game.value === selectedGameType);
            if (!currentSelectedGameStillAvailable) {
                setSelectedGameType(availableGames[0].value);
            }
        }
      }, [selectedTopic, availableGames, selectedGameType]);


      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="text-center mb-12">
            <ToyBrick className="h-16 w-16 mx-auto text-accent mb-4" />
            <h1 className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500">
              Rincón Infantil
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              ¡Aprende vocabulario básico de inglés jugando! Elige un tema y un juego para empezar la diversión.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Elige un Tema</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {kidsTopicsMeta.map((topicMeta, index) => (
              <motion.div
                key={topicMeta.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => handleTopicSelect(topicMeta)}
              >
                <Card className={`h-full flex flex-col items-center justify-center p-4 overflow-hidden transition-all duration-300 glass-effect dark:glass-effect hover:shadow-lg border-2 ${selectedTopic?.id === topicMeta.id ? 'border-primary scale-105 shadow-lg' : 'border-transparent hover:border-accent/50'}`}>
                  {getIcon(topicMeta.id)}
                  <CardTitle className="text-center text-sm mt-2">{topicMeta.name}</CardTitle>
                </Card>
              </motion.div>
            ))}
          </div>

          {selectedTopic && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              {showLevelSelector && selectedTopic.levels && (
                <div className="mb-8 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Elige un Nivel para "{selectedTopic.name}"</h3>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {selectedTopic.levels.map(levelKey => (
                      <Button
                        key={levelKey}
                        variant={selectedLevel === levelKey ? 'default' : 'outline'}
                        onClick={() => handleLevelSelect(levelKey)}
                        className="transition-all"
                      >
                        {getLevelName(selectedTopic.id, levelKey)}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Elige un Juego</h2>
              <Tabs value={selectedGameType} onValueChange={handleGameTypeChange} className="w-full max-w-md mx-auto mb-8">
                <TabsList className={`grid w-full grid-cols-${availableGames.length}`}>
                  {availableGames.map(game => (
                    <TabsTrigger key={game.value} value={game.value}>
                      {game.icon} {game.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              {renderGame()}
            </motion.div>
          )}
        </motion.div>
      );
    };

    export default KidsCornerPage;
  