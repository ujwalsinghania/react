import React, { forwardRef, useId } from 'react';
import { cn } from '../utils/cn';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, className, containerClassName, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-slate-700"
          >
            {label} {props.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'px-3.5 py-2.5 bg-white border rounded-lg text-slate-900 text-sm',
            'placeholder:text-slate-400',
            'transition-all duration-200 outline-none',
            'focus:ring-2', // Keep focus:ring-2 always
            'disabled:opacity-50 disabled:bg-slate-50 disabled:cursor-not-allowed',
            {
              'border-red-500 focus:ring-red-500/20 focus:border-red-500':
                error,
              'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500':
                !error,
            },
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-xs font-medium text-red-500 mt-0.5 animate-in fade-in slide-in-from-top-1"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
