
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import AnimatedText from '@/components/AnimatedText';
import SkillTag from '@/components/SkillTag';
import { projects, Project } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!project) {
    return (
      <PageTransition>
        <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold">Project not found</h1>
            <p className="mt-4 text-muted-foreground">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/projects" className="inline-flex items-center mt-6 text-primary hover:underline">
              <ArrowLeft size={16} className="mr-2" />
              Back to projects
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
            <Link to="/projects" className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to projects
            </Link>
            <div className="flex items-center gap-4">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}
              {project.githubRepo && (
                <a 
                  href={project.githubRepo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors"
                >
                  GitHub
                  <Github size={14} />
                </a>
              )}
            </div>
          </div>

          <div className="mb-12">
            <p className="text-sm font-medium text-muted-foreground">{project.role}</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold mt-2">{project.title}</h1>
          </div>

          <div className="aspect-video bg-secondary rounded-xl overflow-hidden mb-12">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-8">
              <div>
                <AnimatedText 
                  text="The Challenge"
                  element="h2"
                  className="text-2xl font-bold mb-4"
                />
                <p className="text-muted-foreground">{project.challengeDescription}</p>
              </div>
              
              <div>
                <AnimatedText 
                  text="The Solution"
                  element="h2"
                  className="text-2xl font-bold mb-4"
                />
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
              
              <div>
                <AnimatedText 
                  text="The Results"
                  element="h2"
                  className="text-2xl font-bold mb-4"
                />
                <p className="text-muted-foreground">{project.results}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <SkillTag key={index} name={tool} />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Process</h3>
                <ul className="space-y-2">
                  {project.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary font-medium mr-1">{index + 1}.</span>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-6">More Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((p, index) => (
                  <Link 
                    key={p.id} 
                    to={`/projects/${p.id}`}
                    className="group block bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={p.thumbnail} 
                        alt={p.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{p.role}</p>
                      <h3 className="font-medium">{p.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
