
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const TopicCard = ({ topic }) => {
      return (
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 glass-effect dark:glass-effect hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary">{topic.name}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4">
              <Link to={`/exercise/${topic.id}`} className="w-full">
                <Button variant="outline" className="w-full group">
                  Practicar
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default TopicCard;
  