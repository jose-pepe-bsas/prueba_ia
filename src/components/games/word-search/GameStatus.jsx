
    import React from 'react';
    import { motion } from 'framer-motion';
    import { CheckCircle } from 'lucide-react';

    const GameStatus = ({ isGameWon, selectedCells }) => {
      return (
        <>
          {isGameWon && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6 p-4 bg-green-100 dark:bg-green-800 rounded-lg"
            >
              <p className="text-2xl font-bold text-green-600 flex items-center justify-center">
                <CheckCircle className="mr-2"/> ¡Ganaste! Encontraste todas las palabras.
              </p>
            </motion.div>
          )}
          {selectedCells.length > 0 && !isGameWon && (
            <div className="mt-4 p-2 bg-accent/10 rounded text-center">
                Palabra seleccionada: <span className="font-bold">{selectedCells.map(c => c.char).join('')}</span>
            </div>
          )}
        </>
      );
    };

    export default GameStatus;
  