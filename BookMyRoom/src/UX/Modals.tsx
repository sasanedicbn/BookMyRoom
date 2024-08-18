import { FaEdit, FaTrash, FaEye, FaCheck } from 'react-icons/fa';
import NewEditRoom from '../Pages/Room/newEditRoom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRooms } from '../store/roomsSlice';
import { supabase } from '../supabase/supabaseClient';
import Button from './Button';

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


  const modalClass = options.length === 2 ? 'two-options' : 'three-options';

  return (
    <>
      <div className="modal">
        <div className={`modal-content ${modalClass}`}>
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
