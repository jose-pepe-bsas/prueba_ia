
    import React, { useState, useMemo } from 'react';
    import { motion } from 'framer-motion';
    import { grammarTopics, getTopicById } from '@/data/grammarTopics';
    import TopicCard from '@/components/TopicCard';
    import { Input } from '@/components/ui/input';
    import { Button } from '@/components/ui/button';
    import { Filter, X } from 'lucide-react';

    const TopicsPage = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('Todos');

      const topicCategories = useMemo(() => {
        const categories = ['Todos', ...new Set(grammarTopics.map(cat => cat.category))];
        return categories;
      }, []);

      const filteredTopics = useMemo(() => {
        return grammarTopics
          .map(category => ({
            ...category,
            topics: category.topics.filter(topic =>
              topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              topic.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              category.category.toLowerCase().includes(searchTerm.toLowerCase())
            )
          }))
          .filter(category => 
            (selectedCategory === 'Todos' || category.category === selectedCategory) &&
            category.topics.length > 0
          );
      }, [searchTerm, selectedCategory]);

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      };

      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Explora Nuestros Temas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sumérgete en una variedad de temas de gramática inglesa, desde los tiempos verbales hasta el vocabulario avanzado. ¡Encuentra lo que necesitas para mejorar tu inglés!
            </p>
          </div>

          <div className="mb-8 p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border/20">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full sm:w-auto">
                <Input
                  type="text"
                  placeholder="Buscar temas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-base py-6 rounded-lg shadow-inner focus:ring-2 focus:ring-primary"
                />
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              {searchTerm && (
                  <Button variant="ghost" onClick={() => setSearchTerm('')} className="p-2">
                      <X className="h-5 w-5" />
                  </Button>
              )}
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2 text-foreground">Filtrar por categoría:</p>
              <div className="flex flex-wrap gap-2">
                {topicCategories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs sm:text-sm transition-all duration-200 ease-in-out hover:shadow-md"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredTopics.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <img  alt="No results found illustration" className="mx-auto mb-4 w-48 h-48 text-muted-foreground" src="https://images.unsplash.com/photo-1696744404432-d829841194f4" />
              <p className="text-xl text-muted-foreground">No se encontraron temas que coincidan con tu búsqueda.</p>
              <p className="text-sm text-muted-foreground mt-2">Intenta con otras palabras clave o ajusta los filtros.</p>
            </motion.div>
          )}

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {filteredTopics.map((categoryData) => (
              <motion.section key={categoryData.category} variants={itemVariants} className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 pb-2 border-b-2 border-primary/30 text-primary">
                  {categoryData.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryData.topics.map((topic) => (
                    <motion.div key={topic.id} variants={itemVariants}>
                       <TopicCard topic={topic} categoryColor={categoryData.color} />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </motion.div>
      );
    };

    export default TopicsPage;
  