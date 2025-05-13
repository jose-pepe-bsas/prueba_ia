
    import React from 'react';

    const WordSearchGrid = ({ grid, gridSize, getCellClasses, handleCellClick }) => {
      if (!grid || grid.length === 0) {
        return <p className="text-center">Cargando cuadrícula...</p>;
      }

      return (
        <div 
          className="grid gap-0.5 bg-background p-1 rounded shadow-inner overflow-auto flex-grow"
          style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(20px, 1fr))`}}
        >
          {grid.map((row, rowIndex) =>
            row.map((char, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={getCellClasses(rowIndex, colIndex)}
                onClick={() => handleCellClick(rowIndex, colIndex, char)}
              >
                {char}
              </div>
            ))
          )}
        </div>
      );
    };

    export default WordSearchGrid;
  