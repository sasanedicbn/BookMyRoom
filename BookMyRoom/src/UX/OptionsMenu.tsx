import ModalButton from './ModalButton';
import Modals from './Modals';


type ModalAction = {
  icon: JSX.Element;  
  onClick: () => void;
  label: string;
};

type OptionsMenuProps = {
  modalsActions: ModalAction[]; 
};


const OptionsMenu = ({  modalsActions }: OptionsMenuProps) => {
  console.log('modalsActions', modalsActions)
  const modalType = modalsActions.length === 2 ? 'two-options' : 'three-options';
 
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
