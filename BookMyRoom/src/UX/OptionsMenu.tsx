import Modals from './Modals';
import ModalButton from './ModalButton';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface OptionsMenuProps {
  options: string[];
  modalsActions: any[];
}
// const modalsActions = [
//   { key: 'delete', icon: <FaTrash />, label: 'Delete', /* onClick: handleDelete */ },
//   { key: 'check-out', icon: <FaCheck />, label: 'Check Out', /* onClick: handleCheckOut */ },
//   { key: 'check-in', icon: <FaCheck />, label: 'Check In', /* onClick: handleCheckIn */ },
//   { key: 'see-details', icon: <FaEye />, label: 'See Details', /* onClick: handleSeeDetails */ },
// ];

 export const optionsAction = [
  {key: 'edit', icon: <FaEdit/>, label: 'Edit'},
  {key: 'delete', icon: <FaTrash/>, label: 'Delete'}
 ]

const OptionsMenu: React.FC<OptionsMenuProps> = ({  modalsActions }) => {
  console.log('modalsActions', modalsActions)
  const modalType = modalsActions.length === 2 ? 'two-options' : 'three-options';
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

 
  return (
    <Modals type={modalType} >
      {modalsActions.map((option) => {
        return  (
          <ModalButton key={option.label} onClick={option.onClick}>
            {option.label}
            {option.icon}
          </ModalButton>
        ) 
      })}
    </Modals>
  );
};

export default OptionsMenu;
