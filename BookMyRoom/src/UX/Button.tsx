import React from 'react';

type ButtonType =  string;

type ButtonProps = {
  type: ButtonType;
  onClick?: () => void; 
  children: React.ReactNode; 
  disabled?: boolean; // Dodajemo prop za disabled stanje
};

const Button: React.FC<ButtonProps> = ({ type, onClick, children, disabled = false }) => {
  const baseClass = 'base';

  const styles: { [key in ButtonType]: string } = {
    primary: `${baseClass} primary-btn`,
    secondary: `${baseClass} secondary-btn`,
    danger: `${baseClass} danger-btn`,
    success: `${baseClass} success-btn`,
    back: `back-btn`,
    edit: `edit-btn`,
    delete: `delete-btn`,
    options: `options-btn`,
    optionRoom: `options-btn options-room`,
  };

  const buttonClass = `${styles[type]} ${disabled ? 'not-allowed' : ''}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
