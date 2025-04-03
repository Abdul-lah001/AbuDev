
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SkillTag from './SkillTag';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('translate-y-10');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 opacity-0 translate-y-10 border border-border"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{project.role}</p>
          <h3 className="text-xl font-bold mt-1">{project.title}</h3>
        </div>
        
        <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.slice(0, 3).map((tool, idx) => (
            <SkillTag key={idx} name={tool} />
          ))}
          {project.tools.length > 3 && (
            <span className="text-sm text-muted-foreground flex items-center">
              +{project.tools.length - 3} more
            </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center mt-2 text-sm font-medium text-primary group-hover:underline"
        >
          View Case Study
          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
