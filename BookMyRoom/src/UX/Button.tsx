import { Link } from "react-router-dom";

const Button = ({ type, onClick, children, to }) => {
    const base = 'base';  

    const styles = {
        primary: `${base} primary-btn`,
        secondary: `${base} secondary-btn`,
        danger: `${base} danger-btn`,
        success: `${base} success-btn`
    }

    if (to)
        return (
          <Link to={to} className={styles[type]}>
            {children}
          </Link>
        );

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

