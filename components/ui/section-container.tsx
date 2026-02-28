import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  background?: 'default' | 'gray' | 'dark' | 'gradient';
  invertText?: boolean;
}

export function SectionContainer({
  children,
  className,
  id,
  fullWidth = false,
  background = 'default',
}: SectionContainerProps) {
  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-soul-dark text-white',
    gradient: 'bg-gradient-to-br from-soul-teal/5 to-soul-green/5',
  };

  return (
    <section
      id={id}
      className={cn(
        'section-padding',
        backgroundClasses[background],
        className
      )}
    >
      <div className={cn(!fullWidth && 'container')}>
        {children}
      </div>
    </section>
  );
}