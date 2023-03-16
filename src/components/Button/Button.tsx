'use client';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`
        bg-gradient-to-r from-blue-500 to-blue-700
        text-white px-4 py-2 rounded-md
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
