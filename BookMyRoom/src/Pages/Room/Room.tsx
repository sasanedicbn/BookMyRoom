import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from '../../UX/Modals';
import NewEditRoom from './newEditRoom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { supabase } from '../../supabase/supabaseClient';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../store/roomsSlice';
import { toast } from 'react-toastify';
import OptionsMenu from '../../UX/OptionsMenu';
import { handleDelete } from '../../api/Rooms/handleDelete';

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

  const modalsActions = [
     {
      icon: <FaEdit />,
      onClick: handleOpenEditModal,
      label: 'Edit'
    },
     {
      icon: <FaTrash />,
      onClick:() => handleDelete(room, dispatch, setOpenMenuModal),
      label: 'Delete'
    },
  ]

  return (
    <>
      <tr className="room-container">
        <td>{image && <img className="room-image" src={image} alt={name} />}</td>
        <td >{name}</td>
        <td>Fits up to {maxCapacity} guests</td>
        <td>${regularPrice}</td>
        <td>{discount ? `${discount}%` : '/'}</td>
        <td className="ellipsis-cell">
          <BiDotsVerticalRounded onClick={handleOpenMenuModal} />
        </td>
      </tr>

      {openMenuModal && (
        <OptionsMenu modalsActions={modalsActions}/>
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

