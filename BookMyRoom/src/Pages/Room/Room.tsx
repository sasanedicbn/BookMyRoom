import  { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from '../../UX/Modals';
import NewEditRoom from './newEditRoom';

const Room = ({ room }) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const handleOpenModal = () => {
    setOpenMenuModal(state => !state);
  };

  return (
    <>
    <tr className="room-container">
      <td>{image && <img className="room-image" src={image} alt={name} />}</td>
      <td>{name}</td>
      <td>{maxCapacity}</td>
      <td>${regularPrice}</td>
      <td>{discount ? `${discount}%` : '/'}</td>
      <td className="ellipsis-cell">
        <BiDotsVerticalRounded onClick={handleOpenModal} />
      </td>
    </tr>
     {openMenuModal && (
      <Modals type="addNewRoom">
        <NewEditRoom
          room={room}
          closeMenuModal={setOpenMenuModal}
        />
      </Modals>
    )}
    </>
  );
};

export default Room;
{/* <NewEditRoom setOpenEditModal={setAddNewRoom} 
closeEditNewRoom={handleAddNewRoom} closeMenuModal={handleAddNewRoom} /> */}