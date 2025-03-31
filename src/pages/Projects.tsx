
import React from 'react';
import PageTransition from '@/components/PageTransition';
import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <AnimatedText 
              text="My Projects"
              element="h1"
              className="text-4xl md:text-5xl font-display font-bold"
            />
            <p className="text-lg text-muted-foreground mt-4">
              A curated showcase of my work in UI/UX design and frontend development. 
              Each project represents a unique challenge and solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
