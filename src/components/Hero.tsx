
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = heroRef.current;
    if (element) {
      element.style.opacity = '0';
      
      const timeout = setTimeout(() => {
        element.style.transition = 'opacity 800ms ease-out';
        element.style.opacity = '1';
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col justify-center relative px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-secondary px-3 py-1 rounded-full">
                <p className="text-sm font-medium text-primary">Frontend Developer & UI/UX Designer</p>
              </div>
              <AnimatedText 
                text="Crafting Seamless Digital Experiences Through Code & Design"
                element="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance"
              />
              <AnimatedText 
                text="I transform ideas into intuitive, beautiful user interfaces that solve real problems."
                element="p"
                className="text-lg text-muted-foreground max-w-md mt-4"
                delay={400}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Workspace with computer"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary opacity-70"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
