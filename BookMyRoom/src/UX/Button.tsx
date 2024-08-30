import React from 'react';

type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'back' | 'edit' | 'delete' | 'options' | 'optionRoom';

interface ButtonProps {
  type: ButtonType;
  onClick?: () => void; 
  children: React.ReactNode; 
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  const baseClass = 'base';

  const styles: { [key in ButtonType]: string } = {
    primary: `${baseClass} primary-btn`,
    secondary: `${baseClass} secondary-btn`,
    danger: `${baseClass} danger-btn`,
    success: `${baseClass} success-btn`,
    back: `${baseClass} back-btn`,
    edit: `${baseClass} edit-btn`,
    delete: `${baseClass} delete-btn`,
    options: `${baseClass} options-btn`,
    optionRoom: `${baseClass} options-btn options-room`,
  };

  const buttonClass = styles[type];

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;



