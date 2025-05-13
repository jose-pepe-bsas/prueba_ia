
    import React from 'react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      return (
        <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="py-6 border-t border-border/40"
        >
          <div className="container text-center text-sm text-muted-foreground">
            © {currentYear} Grammar Practice App. Todos los derechos reservados. Creado con ❤️ para aprender inglés.
          </div>
        </motion.footer>
      );
    };

    export default Footer;
  