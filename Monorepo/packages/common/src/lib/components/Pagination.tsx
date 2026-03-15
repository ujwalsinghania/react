import React from 'react';
import { cn } from '../utils/cn';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string; // Add optional className prop
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={cn('flex justify-center items-center gap-2 mt-8', className)}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-4 h-4 fill-none stroke-current stroke-[3px]"
        >
          <path d="M20 28L8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
        </svg>
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer',
            currentPage === page
              ? 'bg-[#222222] text-white'
              : 'text-[#222222] hover:bg-gray-100'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-4 h-4 fill-none stroke-current stroke-[3px]"
        >
          <path d="M12 4l11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
        </svg>
      </button>
    </div>
  );
};
