
    import React from 'react';
    import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

    const LevelSelector = ({ selectedLevel, onLevelChange }) => {
      return (
        <div className="mb-8 max-w-md mx-auto">
          <Tabs value={`level-${selectedLevel}`} onValueChange={onLevelChange}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="level-1">Nivel 1</TabsTrigger>
              <TabsTrigger value="level-2">Nivel 2</TabsTrigger>
              <TabsTrigger value="level-3">Nivel 3</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      );
    };

    export default LevelSelector;
  