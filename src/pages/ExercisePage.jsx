
    import React, { useState, useEffect } from 'react';
    import { useParams, Link, useNavigate } from 'react-router-dom';
    import { getTopicById } from '@/data/grammarTopics';
    import { Button } from '@/components/ui/button';
    import { XCircle } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import useExercise from '@/hooks/useExercise';
    import ExerciseHeader from '@/components/exercise/ExerciseHeader';
    import LevelSelector from '@/components/exercise/LevelSelector';
    import ExerciseContent from '@/components/ExerciseContent';
    import LeaveConfirmationDialog from '@/components/exercise/LeaveConfirmationDialog';
    import ExercisePageLayout from '@/components/exercise/ExercisePageLayout.jsx';
    import ExerciseInfo from '@/components/exercise/ExerciseInfo.jsx';

    const ExercisePage = () => {
      const { topicId } = useParams();
      const navigate = useNavigate();
      const topic = getTopicById(topicId);
      const [selectedLevel, setSelectedLevel] = useState(1);

      const {
        currentExercise,
        currentExerciseIndex,
        score,
        isCorrect,
        selectedOption,
        isLoading,
        isTopicComplete,
        isLevelComplete,
        totalExercisesInLevel,
        progress,
        handleOptionChange,
        checkAnswer,
        nextStep,
        resetLevel,
        setExercisesForLevel,
      } = useExercise(topicId, selectedLevel);

      const [showLeaveConfirmation, setShowLeaveConfirmation] = useState(false);

      useEffect(() => {
        setExercisesForLevel(selectedLevel);
      }, [selectedLevel, setExercisesForLevel, topicId]);


      const handleLevelChange = (levelValue) => {
        const levelNum = parseInt(levelValue.split('-')[1]);
        setSelectedLevel(levelNum);
        resetLevel(levelNum);
      };
      
      const handleRestart = () => {
        resetLevel(selectedLevel);
      };

      const handleBackNavigation = (e) => {
        if (currentExerciseIndex > 0 && !isTopicComplete && !isLevelComplete) {
          e.preventDefault();
          setShowLeaveConfirmation(true);
        }
      };

      const confirmLeave = () => {
        setShowLeaveConfirmation(false);
        navigate('/topics');
      };

      const cancelLeave = () => {
        setShowLeaveConfirmation(false);
      };


      if (!topic) {
        return (
          <div className="text-center py-10">
            <XCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Tema no encontrado</h2>
            <p className="text-muted-foreground mb-6">El tema que buscas no existe.</p>
            <Button asChild>
              <Link to="/topics">Volver a Temas</Link>
            </Button>
          </div>
        );
      }
      
      const showSummary = isLevelComplete && !isLoading;
      const exerciseContentProps = {
        isLoading,
        showSummary,
        topicName: `${topic.name} - Nivel ${selectedLevel}`,
        score,
        totalExercisesInLevel,
        onRestart: handleRestart,
        isTopicComplete,
        currentExercise,
        currentExerciseIndex,
        progress,
        selectedOption,
        isCorrect,
        handleOptionChange,
        checkAnswer,
        nextStep,
        levelComplete: isLevelComplete,
        topicComplete: isTopicComplete,
      };

      return (
        <ExercisePageLayout>
          <ExerciseHeader 
            onBackNavigation={handleBackNavigation}
            canShowLeaveConfirmation={currentExerciseIndex > 0 && !isTopicComplete && !isLevelComplete}
            isTopicComplete={isTopicComplete}
          />
          
          <ExerciseInfo topicName={topic.name} topicDescription={topic.description} />

          <LevelSelector
            selectedLevel={selectedLevel}
            onLevelChange={handleLevelChange}
          />
          
          <AnimatePresence mode="wait">
             {currentExercise || isLoading || showSummary ? (
                <ExerciseContent {...exerciseContentProps} />
              ) : (
                <motion.div 
                  key="no-exercise"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10"
                >
                  <XCircle className="mx-auto h-12 w-12 text-orange-500 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Ejercicios no disponibles</h2>
                  <p className="text-muted-foreground mb-6">
                    No hay ejercicios cargados para el Nivel {selectedLevel} de este tema o hubo un problema al cargarlos.
                  </p>
                  <Button onClick={handleRestart}>Intentar Recargar Nivel</Button>
                </motion.div>
              )}
          </AnimatePresence>

          <LeaveConfirmationDialog
            open={showLeaveConfirmation}
            onOpenChange={setShowLeaveConfirmation}
            onConfirm={confirmLeave}
            onCancel={cancelLeave}
          />
        </ExercisePageLayout>
      );
    };

    export default ExercisePage;
  