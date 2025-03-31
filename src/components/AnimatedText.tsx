
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  element: Element = 'h1',
  delay = 0 
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spans = entry.target.querySelectorAll('span');
            spans.forEach((span, index) => {
              setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
              }, delay + index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  const words = text.split(' ');

  return (
    <div ref={textRef} className={cn("overflow-hidden", className)}>
      <Element className="inline">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block mr-2 opacity-0"
            style={{
              transform: 'translateY(30px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease'
            }}
          >
            {word}
          </span>
        ))}
      </Element>
    </div>
  );
};

export default AnimatedText;
