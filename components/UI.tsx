import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-500',
    secondary: 'bg-nature-500 text-white hover:bg-nature-600 focus:ring-nature-400',
    outline: 'border border-brand-600 text-brand-700 hover:bg-brand-50 focus:ring-brand-500',
    ghost: 'text-brand-700 hover:bg-brand-100 hover:text-brand-900',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Badge = ({ children, color = 'brand', className = '' }: { children?: React.ReactNode; color?: 'brand' | 'green' | 'red'; className?: string }) => {
  const colors = {
    brand: 'bg-brand-100 text-brand-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

export const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-serif font-bold text-brand-900 sm:text-4xl mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-brand-700 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);