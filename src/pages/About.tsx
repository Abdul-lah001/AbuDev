
import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import AnimatedText from '@/components/AnimatedText';
import SkillTag from '@/components/SkillTag';

const About = () => {
  const designSkills = ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'User Testing', 'Design Systems'];
  const devSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS',];
  const tools = ['Figma', 'Adobe XD', 'Photoshop', 'VS Code', 'Git', 'GitHub', 'Canva'];

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-8">
              <div>
                <AnimatedText 
                  text="About Me"
                  element="h1"
                  className="text-4xl md:text-5xl font-display font-bold"
                />
                <p className="text-lg text-muted-foreground mt-4">
                My name is Adekilekun Abdullah, a passionate Front-End Developer and UI/UX Designer with three years of hands-on experience, I specialize in building intuitive, visually compelling, and highly responsive digital experiences that prioritize both form and function. My approach merges clean, efficient code with thoughtful design to create interfaces that are not only beautiful but also user-centered and easy to navigate.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                I focus on understanding user behavior to design journeys that feel natural and engaging whether it’s a sleek landing page or a full-scale web application. From wireframes to final implementation, I ensure every detail enhances usability while maintaining a consistent visual language across devices. My work is also rooted in accessibility and performance, ensuring that every user has a seamless experience, regardless of platform or ability.
                </p>
                <p>
                  When I'm not designing or coding, you can find me exploring new design trends,
                  contributing to open-source projects, or enjoying the outdoors with my camera.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Empathy-Driven Design</h3>
                      <p className="text-muted-foreground">
                        I start every project by deeply understanding the users and their needs. 
                        Through research and empathy mapping, I ensure the final product truly 
                        serves its audience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Collaborative Process</h3>
                      <p className="text-muted-foreground">
                        I believe the best results come from close collaboration with clients 
                        and team members. Regular check-ins and feedback sessions ensure we're 
                        always aligned.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Iterative Refinement</h3>
                      <p className="text-muted-foreground">
                        Great design rarely happens on the first try. I believe in rapid 
                        prototyping, testing, and iterating to continuously improve the 
                        product until it exceeds expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <img 
                  src="/WhatsApp Image 2025-03-29 at 06.31.48_5d1d8d55.jpg." 
                  alt="John Doe - Frontend Developer & UI/UX Designer" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Design Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((skill, index) => (
                    <SkillTag key={index} name={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Development Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {devSkills.map((skill, index) => (
                    <SkillTag key={index} name={skill} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Tools</h2>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <SkillTag key={index} name={tool} />
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a   
                  href="public/ABDULLAH ADEKILEKUN RESUME frontend.pdf" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Download Resume
                  <FileDown size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 bg-secondary/60 p-8 md:p-12 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Ready to work together?</h2>
                <p className="text-muted-foreground mt-2">Let's bring your vision to life with beautiful design and clean code.</p>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
