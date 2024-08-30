
const Button = ({ type, onClick, children }) => {
  const baseClass = 'base'; 

  const styles = {
    primary: `${baseClass} primary-btn`,
    secondary: `${baseClass} secondary-btn`,
    danger: `${baseClass} danger-btn`,
    success: `${baseClass} success-btn`,
    back: `${baseClass}  back-btn`,
    edit: ` edit-btn`, 
    delete: ` delete-btn`,
    options: ` options-btn`,
    optionRoom: `options-btn options-room`,
  };

  const buttonClass = `${styles[type]} `; 

 

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;


