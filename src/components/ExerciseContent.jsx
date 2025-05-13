
    import React from 'react';
    import QuizCard from '@/components/QuizCard';
    import QuizSummary from '@/components/QuizSummary';
    import { Loader2 } from 'lucide-react';

    const ExerciseContent = ({
      isLoading,
      showSummary,
      topicName,
      score,
      totalExercisesInLevel,
      onRestart,
      isTopicComplete,
      currentExercise,
      currentExerciseIndex,
      progress,
      selectedOption,
      isCorrect,
      handleOptionChange,
      checkAnswer,
      nextStep,
      levelComplete, // Pass down levelComplete
      topicComplete // Pass down topicComplete
    }) => {
      if (isLoading) {
        return (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        );
      }

      if (showSummary) {
        return (
          <QuizSummary
            topicName={topicName}
            score={score}
            totalExercises={totalExercisesInLevel}
            onRestart={onRestart}
            isTopicComplete={isTopicComplete}
          />
        );
      }

      return (
        <QuizCard
          exercise={currentExercise}
          currentIndex={currentExerciseIndex}
          totalInLevel={totalExercisesInLevel}
          score={score}
          progressValue={progress}
          selectedOption={selectedOption}
          isCorrect={isCorrect}
          onOptionChange={handleOptionChange}
          onCheckAnswer={checkAnswer}
          onNextStep={nextStep}
          levelComplete={levelComplete} // Pass down levelComplete
          topicComplete={topicComplete} // Pass down topicComplete
        />
      );
    };

    export default ExerciseContent;
  