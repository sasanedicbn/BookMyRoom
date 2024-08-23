import { FaCheck, FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Modals from './Modals';
import ModalButton from './ModalButton';

interface OptionsMenuProps {
  options: string[];
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ options, ref }) => {
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

  const modalType = options.length === 2 ? 'two-options' : 'three-options';

  return (
    <Modals type={modalType}>
      {options.map((option) => {
        const action = modalsActions[option];
        return action ? (
          <ModalButton key={option} onClick={action.onClick}>
            {action.label}
            {action.icon}
          </ModalButton>
        ) : null;
      })}
    </Modals>
  );
};

export default OptionsMenu;
