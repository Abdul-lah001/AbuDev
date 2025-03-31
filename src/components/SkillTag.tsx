
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  name: string;
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, className }) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium",
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillTag;
