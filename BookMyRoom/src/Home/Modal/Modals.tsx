
import { FaEdit, FaTrash } from 'react-icons/fa';
import NewEditRoom from '../Room/newEditRoom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../../store/roomsSlice';
import { supabase } from '../../superbase/superbaseClient';


const Modals = ({ room , setOpenMenuModal}) => {
  // provjeravam samo da li ima props ili ne ako ima -> onda je to edit ako nema onda je to create form
 const [openEditModal, setOpenEditModal] = useState(false)
 const dispatch = useDispatch()
 
 function handlerOpenEditModal () {
  setOpenEditModal(true)
 }
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
            {openEditModal && <NewEditRoom room={room} setOpenEditModal={setOpenEditModal} closeMenuModal={setOpenMenuModal}/>}
        </div>
      </div>
    </>
  );
};

export default Modals;

