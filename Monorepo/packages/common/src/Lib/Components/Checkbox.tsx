// react
import { useId, type InputHTMLAttributes, type Ref } from 'react';

// utils
import { cn } from '../Utils/Cn';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  ref?: Ref<HTMLInputElement>;
}

export const Checkbox = ({ label, className, id, ref, ...props }: CheckboxProps) => {
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
