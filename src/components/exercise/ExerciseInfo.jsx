
    import React from 'react';
    import { Brain } from 'lucide-react';

    const ExerciseInfo = ({ topicName, topicDescription }) => {
      return (
        <div className="text-center mb-8">
          <Brain className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{topicName}</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">{topicDescription}</p>
        </div>
      );
    };

    export default ExerciseInfo;
  