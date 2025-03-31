
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Dribbble, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Abdul-lah001', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/abdullah-adekilekun-b69a24246', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'https://mail.google.com/mail/u/0/#inbox', label: 'Email' }
  ];

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link to="/" className="font-display font-bold text-xl">AbuDev</Link>
            <p className="text-sm text-muted-foreground mt-1">Frontend Developer & UI/UX Designer</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-secondary"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AbuDev. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
