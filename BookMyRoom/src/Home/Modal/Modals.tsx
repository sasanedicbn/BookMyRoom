import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openEditModal, closeEditModal } from '../store/modalsSlice';

const Modals = () => {
  const dispatch = useDispatch();
  const { isModalOpen, isEditModalOpen, currentRoom } = useSelector((state) => state.modals);

  const handleDelete = () => {
    dispatch(closeModal());
  };

  const handleEdit = () => {
    dispatch(openEditModal());
  };

  const handleCloseEditModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Options for {currentRoom.name}</h2>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            <button className="close-button" onClick={() => dispatch(closeModal())}>Close</button>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit {currentRoom.name}</h2>
            <p>OVDJE STAVITI FORMU ZA EDIT</p>
            <button className="close-button" onClick={handleCloseEditModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modals;
