import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
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

  const handleEditSubmit = async (updatedRoom) => {
    console.log('updateRoom', updatedRoom);

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
      setOpenMenuModal(false);
    }
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
    details: {
      icon: <FaEye />,
      onClick: () => console.log('See details'),
      label: 'See Details'
    }
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




