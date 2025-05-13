
    import React from 'react';
    import { Card, CardContent } from '@/components/ui/card';

    const WordList = ({ wordsToFindUi, foundWords }) => {
      return (
        <Card className="w-full md:w-1/3 lg:w-1/4 p-3 bg-background/30 max-h-[400px] md:max-h-[500px] overflow-y-auto">
          <CardContent className="p-2">
            <h4 className="text-md font-semibold mb-2 text-center text-accent">Palabras a Encontrar:</h4>
            <ul className="space-y-1 text-sm">
              {wordsToFindUi.map(wordObj => (
                <li key={wordObj.en} className={`transition-all ${foundWords.includes(wordObj.en) ? 'line-through text-green-500 font-medium' : 'text-foreground'}`}>
                  {wordObj.en} ({wordObj.es})
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      );
    };

    export default WordList;
  