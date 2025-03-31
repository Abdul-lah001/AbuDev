
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(10px)';
      
      const timeout = setTimeout(() => {
        element.style.transition = 'opacity 500ms ease, transform 500ms ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  return (
    <div ref={elementRef} className="min-h-[calc(100vh-80px)] w-full">
      {children}
    </div>
  );
};

export default PageTransition;
