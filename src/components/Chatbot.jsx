
    import React from 'react';
    import { motion } from 'framer-motion';
    import { X, Bot } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Chatbot = ({ onClose }) => {
      return (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-20 right-6 w-full max-w-sm h-[70vh] max-h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 z-50"
        >
          <header className="professional-gradient text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={24} />
              <h2 className="text-lg font-semibold">Asistente Virtual</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X size={20} />
            </Button>
          </header>

          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <Bot size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">¡Hola! Soy tu asistente.</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Actualmente estoy aprendiendo y mejorando. Pronto podré ayudarte con tus dudas sobre gramática, traducciones y explicaciones de los ejercicios.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
              ¡Vuelve pronto para ver mis nuevas habilidades!
            </p>
          </div>
          
          <footer className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Funcionalidad en desarrollo..."
                disabled
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
              />
              <Button disabled className="professional-gradient text-white cursor-not-allowed">Enviar</Button>
            </div>
          </footer>
        </motion.div>
      );
    };

    export default Chatbot;
  