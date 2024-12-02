import React from 'react';

type ButtonProps = {
    custom: string;
    children: React.ReactNode;
    onClick?: () => void;
    colorado?: string;
};

function Button ({ custom, children, onClick, colorado }: ButtonProps) {
  return (
    <button onClick={onClick} className={custom} style={{color:`${colorado}`}}>
        {children}
    </button>
  );
}

export default Button;
