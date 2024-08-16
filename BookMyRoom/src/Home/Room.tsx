import  { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from './Modal/Modals';

const Room = ({ room }) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;
  const [openMenuModal, setOpenMenuModal] = useState(false);
  

  const handleOpenModal = () => {
    setOpenMenuModal(true);
  };


  return (
    <tr className="room-container">
      <td>{image && <img className="room-image" src={image} alt={name} />}</td>
      <td>{name}</td>
      <td>{maxCapacity}</td>
      <td>${regularPrice}</td>
      <td>{discount ? `${discount}%` : '/'}</td>
      <td className="ellipsis-cell">
        <BiDotsVerticalRounded onClick={handleOpenModal} />
        {openMenuModal && <Modals  setOpenMenuModal={setOpenMenuModal} room={room}  options={['edit', 'delete',]}  />}
      </td>
    </tr>
  );
};


export default Room;
