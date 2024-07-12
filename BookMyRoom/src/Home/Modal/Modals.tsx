import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditModal, closeModal, openEditModal } from '../../store/modalSlice';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Modals = ({ setOpenMenu }) => {
  const dispatch = useDispatch();
  const { isEditModalOpen, currentRoom } = useSelector((state) => state.modals);

  const handleDelete = () => {
    dispatch(closeModal());
    setOpenMenu(false); // Zatvaranje lokalnog modala
  };

  const handleEdit = () => {
    dispatch(openEditModal());
    setOpenMenu(false); // Zatvaranje lokalnog modala
  };

  const handleCloseEditModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className='modal-content-child'>
            <FaEdit />
            <button className="edit-button" onClick={handleEdit}>Edit</button>
          </div>
          <div className='modal-content-child'>
            <FaTrash />
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>

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
