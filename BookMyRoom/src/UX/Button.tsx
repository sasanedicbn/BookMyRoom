import { Link } from 'react-router-dom';

const Button = ({ type, onClick, children, to }) => {
  const baseClass = 'base'; 

  const styles = {
    primary: `${baseClass} primary-btn`,
    secondary: `${baseClass} secondary-btn`,
    danger: `${baseClass} danger-btn`,
    success: `${baseClass} success-btn`,
    edit: ` edit-btn`, 
    delete: ` delete-btn`,
    options: ` options-btn`
  };

  const buttonClass = `${styles[type]} `; 

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;


