
    import React from 'react';
    import { motion } from 'framer-motion';

    const ExercisePageLayout = ({ children }) => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="container mx-auto px-4 py-8"
        >
          {children}
        </motion.div>
      );
    };

    export default ExercisePageLayout;
  