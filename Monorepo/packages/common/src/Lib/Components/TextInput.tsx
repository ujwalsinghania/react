// react
import { useId, type InputHTMLAttributes, type Ref } from 'react';

// utils
import { cn } from '../Utils/Cn';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  ref?: Ref<HTMLInputElement>;
}

export const TextInput = ({
  label,
  error,
  className,
  containerClassName,
  id,
  ref,
  ...props
}: TextInputProps) => {
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
          'focus:ring-2',
          'disabled:opacity-50 disabled:bg-slate-50 disabled:cursor-not-allowed',
          {
            'border-red-500 focus:ring-red-500/20 focus:border-red-500': error,
            'border-slate-300 focus:ring-blue-500/20 focus:border-blue-500':
              !error,
          },
          className
        )}
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
