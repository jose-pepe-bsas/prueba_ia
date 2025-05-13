
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { BookOpen, Users, Zap, Award, Smile } from 'lucide-react';
    import TopicCard from '@/components/TopicCard';
    import { grammarTopics } from '@/data/grammarTopics';

    const HomePage = () => {
      const featuredTopics = grammarTopics.slice(0, 2).flatMap(category => category.topics.slice(0, 1));

      return (
        <div className="space-y-12">
          <motion.section 
            className="text-center py-16 md:py-24 rounded-xl professional-gradient text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tu camino al Éxito comienza acá. Are you ready?
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explora lecciones interactivas, practica con ejercicios divertidos y alcanza la fluidez en inglés a tu propio ritmo.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/topics">
                <Button size="lg" className="bg-white text-primary hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" /> Empezar a Aprender
                </Button>
              </Link>
              <Link to="/kids">
                <Button size="lg" className="bg-white text-primary hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto">
                  <Smile className="mr-2 h-5 w-5" /> Rincón Infantil
                </Button>
              </Link>
            </motion.div>
          </motion.section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">¿Por qué elegir Inglés con Mati?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Zap className="h-10 w-10 text-primary mb-4" />, title: "Aprendizaje Interactivo", description: "Ejercicios dinámicos que te mantienen motivado." },
                { icon: <Users className="h-10 w-10 text-primary mb-4" />, title: "Para Todas las Edades", description: "Contenido adaptado para niños y adultos." },
                { icon: <BookOpen className="h-10 w-10 text-primary mb-4" />, title: "Variedad de Temas", description: "Desde gramática básica hasta vocabulario avanzado." },
                { icon: <Award className="h-10 w-10 text-primary mb-4" />, title: "Seguimiento de Progreso", description: "Observa tu mejora y alcanza tus metas." },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center glass-effect"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200">Temas Destacados</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredTopics.map((topic, index) => (
                 <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TopicCard topic={topic} categoryName={grammarTopics.find(cat => cat.topics.includes(topic))?.category || "General"} />
                 </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/topics">
                <Button size="lg" className="professional-gradient text-white hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 shadow-md">
                  Ver Todos los Temas
                </Button>
              </Link>
            </div>
          </section>

          <motion.section 
            className="py-16 md:py-24 rounded-xl bg-gradient-to-r from-accent to-orange-400 text-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar tu Aventura Lingüística?</h2>
              <p className="text-lg mb-8">
                Únete a miles de estudiantes y transforma tu manera de aprender inglés. ¡Es gratis y divertido!
              </p>
              <Link to="/topics">
                <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-100 transition-all duration-300 transform hover:scale-105 shadow-md">
                  Comenzar Ahora
                </Button>
              </Link>
            </div>
          </motion.section>
        </div>
      );
    };

    export default HomePage;
  