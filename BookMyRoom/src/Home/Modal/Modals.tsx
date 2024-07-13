import { useDispatch, useSelector } from 'react-redux';
import { closeEditModal, closeModal, openEditModal } from '../../store/modalSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NewEditRoom from '../Room/newEditRoom';
import { singleRoom } from '../../store/roomsSlice';

const Modals = ({ setOpenMenu, room }) => {
  const dispatch = useDispatch();
  const { isEditModalOpen } = useSelector((state) => state.modals);

  const handleDelete = () => {
    dispatch(closeModal());
    setOpenMenu(false);
  };

  const handleEdit = () => {
    dispatch(openEditModal());
    dispatch(singleRoom(room)); // Postavi trenutnu sobu
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
            <NewEditRoom handleCloseEditModal={handleCloseEditModal} />
          )}
        </div>
      </div>
    </>
  );
};

export default Modals;

