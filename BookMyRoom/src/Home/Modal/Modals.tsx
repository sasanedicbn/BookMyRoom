
import { FaEdit, FaTrash } from 'react-icons/fa';
import NewEditRoom from '../Room/newEditRoom';
import { useState } from 'react';


const Modals = ({ room , setOpenMenuModal}) => {
  // provjeravam samo da li ima props ili ne ako ima -> onda je to edit ako nema onda je to create form
 const [openEditModal, setOpenEditModal] = useState(false)
 
 function handlerOpenEditModal () {
  setOpenEditModal(true)
 }
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
                <button className="delete-button">Delete</button>
              </div>
            </>
            {openEditModal && <NewEditRoom room={room} setOpenEditModal={setOpenEditModal}/>}
        </div>
      </div>
    </>
  );
};

export default Modals;

