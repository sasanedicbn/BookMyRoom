// import { useDispatch, useSelector } from 'react-redux';
// import { closeEditModal, closeModal, openEditModal } from '../../store/modalSlice';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import NewEditRoom from '../Room/newEditRoom';
// import { singleRoom, getRooms } from '../../store/roomsSlice';
// import { supabase } from '../../superbase/superbaseClient';

// const Modals = ({ room , setOpenMenuModal}) => {

//   // provjeravam samo da li ima props ili ne ako ima -> onda je to edit ako nema onda je to create form


//   return (
//     <>
//       <div className="modal">
//         <div className="modal-content">
//           {!isEditModalOpen ? (
//             <>
//               <div className="modal-content-child">
//                 <FaEdit />
//                 <button className="edit-button" onClick={handleEdit}>Edit</button>
//               </div>
//               <div className="modal-content-child">
//                 <FaTrash />
//                 <button className="delete-button" onClick={handleDelete}>Delete</button>
//               </div>
//             </>
//           ) : (
//             <NewEditRoom handleCloseEditModal={handleCloseEditModal} handleEditSubmit={handleEditSubmit} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modals;

