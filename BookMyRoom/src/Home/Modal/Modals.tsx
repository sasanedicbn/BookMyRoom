import { FaEdit, FaTrash, FaEye, FaCheck } from 'react-icons/fa';
import NewEditRoom from '../Room/newEditRoom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../store/roomsSlice';
import { supabase } from '../../superbase/superbaseClient';
import Button from '../../UX/Button';

const Modals = ({ room, setOpenMenuModal, options }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const handlerOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleDelete = async () => {
    const { error } = await supabase
      .from('Bedrooms')
      .delete()
      .eq('id', room.id);

    if (error) {
      console.error('Error deleting row:', error);
    } else {
      console.log('Room deleted successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      setOpenMenuModal(false);
    }
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
const baseClass = 'table-base'
  const styleModal = {
    primary: `${baseClass} two-items`,
    secondary: `${baseClass} three-items`,
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          {options.map((option) => (
            <div className="modal-content-child" key={option}>
              {modalsActions[option].icon}
              <Button type={option} onClick={modalsActions[option].onClick}>
                {modalsActions[option].label}
              </Button>
            </div>
          ))}
          {openEditModal && (
            <NewEditRoom
              room={room}
              setOpenEditModal={setOpenEditModal}
              closeMenuModal={setOpenMenuModal}
              handleEditSubmit={handleEditSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Modals;




