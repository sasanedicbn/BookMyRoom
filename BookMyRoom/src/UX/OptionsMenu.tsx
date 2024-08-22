import { FaCheck, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Button from './Button';
import Modals from './Modals';

const OptionsMenu = ({ options }) => {
    
  const handlerOpenEditModal = () => {
    console.log('Open Edit Modal');
  };

  const handleDelete = () => {
    console.log('Delete functionality here');
  };

  const handleCheckOut = () => {
    console.log('Check-out functionality here');
  };

  const handleCheckIn = () => {
    console.log('Check-in functionality here');
  };

  const handleSeeDetails = () => {
    console.log('See details functionality here');
  };

  const modalsActions = {
    edit: {
      icon: <FaEdit />,
      onClick: handlerOpenEditModal,
      label: 'Edit'
    },
    delete: {
      icon: <FaTrash />,
      onClick: handleDelete,
      label: 'Delete'
    },
    'check-out': {
      icon: <FaCheck />,
      onClick: handleCheckOut,
      label: 'Check Out'
    },
    'check-in': {
      icon: <FaCheck />,
      onClick: handleCheckIn,
      label: 'Check In'
    },
    'see-details': {
      icon: <FaEye />,
      onClick: handleSeeDetails,
      label: 'See Details'
    }
  };

  
  const modalClass = options.length === 2 ? 'two-options' : 'three-options';
 

  return (
    <Modals>
    <div className={`options-menu ${modalClass}`}>
      {options.map((option) => (
        modalsActions[option] && (
          <div className="modal-details" key={option}>
            {modalsActions[option].icon}
            <Button type={'options'} onClick={modalsActions[option].onClick}>
              {modalsActions[option].label}
            </Button>
          </div>
        )
      ))}
    </div>
    </Modals>
  );
};

export default OptionsMenu;
