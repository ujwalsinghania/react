// react
import { useState, useRef, useEffect, type ReactNode } from 'react';

// utils
import { cn } from '../Utils/Cn';

export interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  align?: 'left' | 'right';
}

export const Popover = ({ trigger, content, align = 'right' }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-[200px] bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
