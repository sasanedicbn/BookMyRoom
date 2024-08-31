import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from '../../UX/Modals';
import Button from '../../UX/Button';
import NewEditRoom from './newEditRoom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { supabase } from '../../supabase/supabaseClient';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../store/roomsSlice';
import { toast } from 'react-toastify';

const Room = ({ room }) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenMenuModal = () => {
    setOpenMenuModal(state => !state);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setOpenMenuModal(false); 
  };

  const handleDelete = async () => {
    try {
      const { error: bookingsError } = await supabase
        .from('Bookings')
        .delete()
        .eq('cabinId', room.id);
  
      if (bookingsError) {
        console.error('Error deleting bookings:', bookingsError);
        return;
      }
  
      const { error: roomError } = await supabase
        .from('Bedrooms')
        .delete()
        .eq('id', room.id);
  
      if (roomError) {
        toast.error('You can not delete room!')

      } else {
        toast.success('Room deleted successfully!')
        const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
        if (!fetchError) {
          dispatch(getRooms(rooms));
        }
        setOpenMenuModal(false);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };
  

  const handleEditSubmit = async (updatedRoom) => {
    console.log('updatedRoom', updatedRoom);

    const { error } = await supabase
      .from('Bedrooms')
      .update(updatedRoom)
      .eq('id', room.id);

    if (error) {
      console.error('Error updating room:', error);
    } else {
      console.log('Room updated successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      setOpenEditModal(false);
    }
  };

  const modalsActions = {
    'edit': {
      icon: <FaEdit />,
      onClick: handleOpenEditModal,
      label: 'Edit'
    },
    'delete': {
      icon: <FaTrash />,
      onClick: handleDelete,
      label: 'Delete'
    },
  };

  return (
    <>
      <tr className="room-container">
        <td>{image && <img className="room-image" src={image} alt={name} />}</td>
        <td>{name}</td>
        <td>{maxCapacity}</td>
        <td>${regularPrice}</td>
        <td>{discount ? `${discount}%` : '/'}</td>
        <td className="ellipsis-cell">
          <BiDotsVerticalRounded onClick={handleOpenMenuModal} />
        </td>
      </tr>

      {openMenuModal && (
        <Modals>
          <div className={`options-menu two-options`}>
            {Object.values(modalsActions).map(action => (
              <Button key={action.label} type={'optionRoom'} onClick={action.onClick}>
                {action.icon} {action.label}
              </Button>
            ))}
          </div>
        </Modals>
      )}

      {openEditModal && (
        <Modals type="addNewRoom">
          <NewEditRoom
            room={room}
            closeMenuModal={setOpenEditModal}
            handleEditSubmit={handleEditSubmit} 
            closeEditNewRoom={() => setOpenEditModal(false)}
          />
        </Modals>
      )}
    </>
  );
};

export default Room;

