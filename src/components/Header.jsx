
    import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { BookOpen, Search, Smile, ChevronDown, ExternalLink, Menu } from 'lucide-react';
    import { motion } from 'framer-motion';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
      DropdownMenuGroup,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent
    } from "@/components/ui/dropdown-menu";
    import { grammarTopics } from '@/data/grammarTopics';

    const Header = () => {
      const navigate = useNavigate();

      const handleCategoryNavigation = (categoryId) => {
        navigate(`/topics/${categoryId}`);
      };
      
      const handleAllTopicsNavigation = () => {
        navigate('/topics');
      };

      return (
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Inglés con Mati</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground/80 hover:text-primary transition-colors">
                      Temas <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64">
                    <DropdownMenuLabel>Categorías de Temas</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleAllTopicsNavigation}>
                      Todos los Temas
                    </DropdownMenuItem>
                    {grammarTopics.map((categoryGroup) => (
                      <DropdownMenuSub key={categoryGroup.id}>
                        <DropdownMenuSubTrigger onClick={() => handleCategoryNavigation(categoryGroup.id)}>
                          <span>{categoryGroup.category}</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="p-0">
                           <DropdownMenuLabel>{categoryGroup.category}</DropdownMenuLabel>
                           <DropdownMenuSeparator />
                          {categoryGroup.topics.map((topic) => (
                            <DropdownMenuItem key={topic.id} onClick={() => navigate(`/exercise/${topic.id}`)}>
                              {topic.name}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link to="/kids">
                  <Button variant="ghost" className="text-foreground/80 hover:text-primary transition-colors flex items-center space-x-1">
                    <Smile size={18} />
                    <span>Niños</span>
                  </Button>
                </Link>

                <a href="https://inglesconmati.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="text-foreground/80 hover:text-primary transition-colors border-primary/50 hover:border-primary professional-gradient text-white">
                    Estudiá gratis
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
                
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar tema..." className="pl-8 w-[150px] lg:w-[250px]" />
                </div>
            </nav>

            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Navegación</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleAllTopicsNavigation}>
                    Todos los Temas
                  </DropdownMenuItem>
                  {grammarTopics.map((categoryGroup) => (
                    <DropdownMenuSub key={categoryGroup.id}>
                      <DropdownMenuSubTrigger onClick={() => handleCategoryNavigation(categoryGroup.id)}>
                        <span>{categoryGroup.category}</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent className="p-0">
                        <DropdownMenuLabel>{categoryGroup.category}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {categoryGroup.topics.map((topic) => (
                          <DropdownMenuItem key={topic.id} onClick={() => navigate(`/exercise/${topic.id}`)}>
                            {topic.name}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/kids" className="flex items-center">
                      <Smile size={16} className="mr-2" /> Niños
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://inglesconmati.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink size={16} className="mr-2" /> Estudiá gratis
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                   <div className="p-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar tema..." className="pl-8 w-full" />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.header>
      );
    };

    export default Header;
  