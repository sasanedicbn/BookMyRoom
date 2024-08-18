import Button from './Button';

const OptionsMenu = ({ options, modalsActions }) => {
    
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
  return (
    <div className="options-menu">
      {options.map((option) => (
        modalsActions[option] && (
          <div className="modal-details" key={option}>
            {modalsActions[option].icon}
            <Button type={option} onClick={modalsActions[option].onClick}>
              {modalsActions[option].label}
            </Button>
          </div>
        )
      ))}
    </div>
  );
};

export default OptionsMenu;
