
    import React from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { CheckCircle, RotateCcw, List } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const QuizSummary = ({ topicName, score, totalExercises, onRestart, isTopicComplete }) => {
      const navigate = useNavigate();

      const goToTopics = () => {
        navigate('/topics');
      };

      const getFeedbackMessage = () => {
        const percentage = totalExercises > 0 ? (score / totalExercises) * 100 : 0;
        if (percentage === 100) return "¡Perfecto! Dominas este tema.";
        if (percentage >= 70) return "¡Muy bien! Sigue practicando.";
        return "Necesitas repasar un poco más este tema.";
      };

      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="text-center p-8 glass-effect dark:glass-effect shadow-xl">
            <CardHeader>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
              </motion.div>
              <CardTitle className="text-2xl font-bold">¡Felicidades!</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                {isTopicComplete ? `Has completado todos los niveles de ${topicName}.` : `Has completado este nivel de ${topicName}.`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold my-4">
                Tu puntuación: <span className="text-primary">{score}</span> / {totalExercises}
              </p>
              <p className="text-muted-foreground">
                {getFeedbackMessage()}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button onClick={onRestart} variant="outline" size="lg">
                <RotateCcw className="mr-2 h-4 w-4" /> {isTopicComplete ? 'Repetir Tema' : 'Repetir Nivel'}
              </Button>
              <Button onClick={goToTopics} size="lg" className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 text-white shadow-md">
                <List className="mr-2 h-4 w-4" /> Elegir Otro Tema
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default QuizSummary;
  