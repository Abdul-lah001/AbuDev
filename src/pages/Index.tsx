
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import AnimatedText from '@/components/AnimatedText';
import { projects } from '@/data/projects';

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="py-24 px-6 md:px-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <AnimatedText 
                text="Featured Projects"
                element="h2"
                className="text-3xl md:text-4xl font-display font-bold"
              />
              <p className="text-muted-foreground mt-3 max-w-lg">
                A selection of my recent work in UI/UX design and frontend development.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View all projects
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Workspace" 
                className="rounded-xl shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="space-y-6">
              <AnimatedText 
                text="Let's create something amazing together"
                element="h2"
                className="text-3xl md:text-4xl font-display font-bold"
              />
              <p className="text-muted-foreground">
                I'm passionate about creating thoughtful digital experiences that solve real problems. 
                With expertise in both design and development, I bring a holistic approach to every project.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">User-Centered Design</h3>
                    <p className="text-sm text-muted-foreground">Every design decision is made with the user in mind, ensuring intuitive and accessible experiences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Clean, Efficient Code</h3>
                    <p className="text-sm text-muted-foreground">I write maintainable, semantic code that performs well and scales with your business needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Thoughtful Interactions</h3>
                    <p className="text-sm text-muted-foreground">Small details and subtle animations create delightful, memorable user experiences.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                >
                  Learn more about my approach
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText 
            text="Ready to bring your vision to life?"
            element="h2"
            className="text-3xl md:text-4xl font-display font-bold"
          />
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            I'm currently available for freelance projects and job opportunities. 
            Let's create something amazing together.
          </p>
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
