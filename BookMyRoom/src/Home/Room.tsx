import  { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from './Modal/Modals';
import NewRoom from './Room/NewRoom';

const Room = ({ room }) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenModal = () => {
    setOpenMenu((prev) => !prev);
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
        {openMenu && <Modals setOpenMenu={setOpenMenu} room={room} />}
      </td>
    </tr>
  );
};

export default Room;
