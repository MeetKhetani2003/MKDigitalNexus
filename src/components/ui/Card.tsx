import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = true, ...props }: CardProps) {
  return (
    <div className={`card ${hoverable ? '' : 'hover:translate-y-0 hover:shadow-none'} ${className}`} {...props}>
      {children}
    </div>
  );
}
