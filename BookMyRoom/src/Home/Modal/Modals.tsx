import { useDispatch, useSelector } from 'react-redux';
import { closeEditModal, closeModal, openEditModal } from '../../store/modalSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NewEditRoom from '../Room/newEditRoom';
import { singleRoom, getRooms } from '../../store/roomsSlice';
import { supabase } from '../../superbase/superbaseClient';

const Modals = ({ setOpenMenu, room }) => {
  const dispatch = useDispatch();
  const { isEditModalOpen } = useSelector((state) => state.modals);

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
      dispatch(closeModal());
      setOpenMenu(false);
    }
  };

  const handleEditSubmit = async (updatedRoom) => {
    console.log('updateRoom', updatedRoom)
    const { error } = await supabase
      .from('Bedrooms')
      .update(updatedRoom)
      .eq('id', updatedRoom.id);

    if (error) {
      console.error('Error updating row:', error);
    } else {
      console.log('Room updated successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      dispatch(closeEditModal());
      setOpenMenu(false);
    }
  };

  const handleEdit = () => {
    dispatch(openEditModal());
    dispatch(singleRoom(room));
  };

  const handleCloseEditModal = () => {
    dispatch(closeEditModal());
    setOpenMenu(false);
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          {!isEditModalOpen ? (
            <>
              <div className="modal-content-child">
                <FaEdit />
                <button className="edit-button" onClick={handleEdit}>Edit</button>
              </div>
              <div className="modal-content-child">
                <FaTrash />
                <button className="delete-button" onClick={handleDelete}>Delete</button>
              </div>
            </>
          ) : (
            <NewEditRoom handleCloseEditModal={handleCloseEditModal} handleEditSubmit={handleEditSubmit} />
          )}
        </div>
      </div>
    </>
  );
};

export default Modals;

