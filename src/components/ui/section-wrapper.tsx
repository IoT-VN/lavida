import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
  variant?: 'default' | 'light' | 'primary';
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, containerClassName, id, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white',
      light: 'bg-neutral-50',
      primary: 'bg-primary-500 text-white',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn('py-16 md:py-24', variants[variant], className)}
        {...props}
      >
        <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl', containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export { SectionWrapper };
