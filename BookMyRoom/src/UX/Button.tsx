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

// import { useDispatch } from 'react-redux';
// import Button from '../../ui/Button';
// import { deleteItem } from './cartSlice';

// const DeleteItem = ({ id }) => {
//   const dispatch = useDispatch();
//   return (
//     <Button type='small' onClick={() => dispatch(deleteItem(id))}>
//       Delete
//     </Button>
//   );
// };

// export default DeleteItem;
// import { useDispatch } from 'react-redux';
// import Button from '../../ui/Button';
// import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

// const UpdateItemQuantity = ({ id, currentQuantity }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className='flex gap-2 items-center md:gap-3'>
//       <Button type='round' onClick={() => dispatch(decreaseItemQuantity(id))}>
//         -
//       </Button>
//       <span className='text-sm font-medium'>{currentQuantity}</span>
//       <Button type='round' onClick={() => dispatch(increaseItemQuantity(id))}>
//         +
//       </Button>
//     </div>
//   );
// };

// export default UpdateItemQuantity;