// react
import { type HTMLAttributes, type ReactNode, type Ref } from 'react';

// utils
import { cn } from '../Utils/Cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export const Card = ({ children, className, onClick, ref, ...props }: CardProps) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        'bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden',
        'transition-all duration-300',
        onClick
          ? 'cursor-pointer hover:shadow-md hover:border-slate-200'
          : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
