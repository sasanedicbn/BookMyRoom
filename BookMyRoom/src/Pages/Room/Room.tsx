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
    <tr className="room-container">
      <td>{image && <img className="room-image" src={image} alt={name} />}</td>
      <td>{name}</td>
      <td>{maxCapacity}</td>
      <td>${regularPrice}</td>
      <td>{discount ? `${discount}%` : '/'}</td>
      <td className="ellipsis-cell">
        <BiDotsVerticalRounded onClick={handleOpenModal} />
        {openMenuModal && (
          <Modals type="two-options">
            <NewEditRoom
              room={room}
              setOpenMenuModal={setOpenMenuModal}
            />
          </Modals>
        )}
      </td>
    </tr>
  );
};

export default Room;
