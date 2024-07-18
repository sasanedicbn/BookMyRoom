import { FaEdit, FaTrash } from 'react-icons/fa';
import NewEditRoom from '../Room/newEditRoom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../store/roomsSlice';
import { supabase } from '../../superbase/superbaseClient';

const Modals = ({ room, setOpenMenuModal }) => {
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

  const handleEditSubmit = async (updatedRoom) => {
    console.log('updateRoom', updatedRoom);

    const roomData = updatedRoom;

    const { error } = await supabase
      .from('Bedrooms')
      .update(roomData)
      .eq('id', updatedRoom.id);

    if (error) {
      console.error('Error updating row:', error);
    } else {
      console.log('Room updated successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      setOpenMenuModal(false);
    }
  };

  const handleAddSubmit = async (newRoom) => {
    console.log('newRoom', newRoom);

    const { error } = await supabase
      .from('Bedrooms')
      .insert(newRoom);

    if (error) {
      console.error('Error adding row:', error);
    } else {
      console.log('Room added successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      setOpenMenuModal(false);
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <>
            <div className="modal-content-child">
              <FaEdit />
              <button className="edit-button" onClick={handlerOpenEditModal}>Edit</button>
            </div>
            <div className="modal-content-child">
              <FaTrash />
              <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
          </>
          {openEditModal && <NewEditRoom room={room} setOpenEditModal={setOpenEditModal} closeMenuModal={setOpenMenuModal} handleEditSubmit={handleEditSubmit} handleAddSubmit={handleAddSubmit} />}
        </div>
      </div>
    </>
  );
};

export default Modals;



