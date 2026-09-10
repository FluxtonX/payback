import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'yellow' | 'blue' | 'white' | 'link' | 'header';
  fullWidth?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'yellow',
  fullWidth = false,
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium text-center transition-all duration-200 cursor-pointer select-none text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] py-[12px] lg:py-[14px] px-6';

  const variantStyles = {
    yellow: 'bg-[#ffd700] text-[#112152] border border-[#ffd700] hover:bg-[#ffe661] hover:border-[#ffe661]',
    blue: 'bg-[#112152] text-white border border-[#112152] hover:bg-[#1b2f69]',
    white: 'bg-transparent text-[#030e31] border border-[#112152] hover:bg-[#f4f4f4]',
    link: 'bg-transparent text-[#616267] hover:text-[#030e31] p-0 py-0 lg:py-0 px-0',
    header: 'bg-[#112152] text-[#edf2ff] border border-[#edf2ff] w-[228px] py-[12px] text-[16px] hover:bg-[#edf2ff] hover:text-[#112152]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
