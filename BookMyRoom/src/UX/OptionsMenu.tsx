import Modals from './Modals';
import ModalButton from './ModalButton';

interface OptionsMenuProps {
  options: string[];
  modalsActions: any[];
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({  modalsActions }) => {
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
