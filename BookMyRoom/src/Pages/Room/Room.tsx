import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from '../../UX/Modals';
import NewEditRoom from './newEditRoom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import OptionsMenu from '../../UX/OptionsMenu';
import { handleDelete } from '../../api/Rooms/handleDelete';

const Room = ({ room }:any) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenMenuModal = () => {
    setOpenMenuModal(state => !state);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setOpenMenuModal(false); 
  };


  const modalsActions = [
     {
      icon: <FaEdit />,
      onClick: handleOpenEditModal,
      label: 'Edit'
    },
     {
      icon: <FaTrash />,
      onClick:() => handleDelete(room, dispatch),
      label: 'Delete'
    },
  ]

  return (
    <>
      <tr className="room-container">
        <td>{image && <img className="room-image" src={image} alt={name} />}</td>
        <td >{name}</td>
        <td>Fits up to {maxCapacity} guests</td>
        <td>${regularPrice}</td>
        <td>{discount ? `${discount}%` : '/'}</td>
        <td className="ellipsis-cell">
          <BiDotsVerticalRounded onClick={handleOpenMenuModal} />
        </td>
      </tr>

      {openMenuModal && (
        <OptionsMenu modalsActions={modalsActions}/>
      )}

      {openEditModal && (
        <Modals type="addNewRoom">
          <NewEditRoom
            room={room}
            closeMenuModal={setOpenEditModal}
          />
        </Modals>
      )}
    </>
  );
};

export default Room;

