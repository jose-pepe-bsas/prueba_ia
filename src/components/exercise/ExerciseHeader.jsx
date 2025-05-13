
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { ArrowLeft, Award } from 'lucide-react';

    const ExerciseHeader = ({ onBackNavigation, canShowLeaveConfirmation, isTopicComplete }) => {
      return (
        <div className="mb-8 flex items-center justify-between">
          <Button variant="ghost" onClick={onBackNavigation} asChild={!canShowLeaveConfirmation}>
            {canShowLeaveConfirmation ? (
              <span className="flex items-center cursor-pointer">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver a Temas
              </span>
            ) : (
              <Link to="/topics" className="flex items-center">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver a Temas
              </Link>
            )}
          </Button>
          {isTopicComplete && <Award className="h-8 w-8 text-yellow-500" />}
        </div>
      );
    };

    export default ExerciseHeader;
  