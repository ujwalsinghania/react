import React, { forwardRef, useId } from 'react';
import { cn } from '../utils/cn';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={cn('flex items-center gap-2', className)}>
        <input
          id={inputId}
          type="checkbox"
          ref={ref}
          className={cn(
            'w-4 h-4 text-blue-600 bg-white border-slate-300 rounded',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'transition-colors cursor-pointer'
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-slate-700 cursor-pointer select-none',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
