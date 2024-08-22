import { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from '../../UX/Modals';
import Button from '../../UX/Button';
import NewEditRoom from './newEditRoom';

const Room = ({ room }) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenMenuModal = () => {
    setOpenMenuModal(state => !state);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setOpenMenuModal(false); 
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
          <BiDotsVerticalRounded onClick={handleOpenMenuModal} />
        </td>
      </tr>

      {openMenuModal && (
        <Modals type="two-options">
          <Button type="edit" onClick={handleOpenEditModal}>
            Edit
          </Button>
          <Button type="delete" onClick={() => { /* implement delete logic */ }}>
            Delete
          </Button>
          <Button type="secondary" onClick={handleOpenMenuModal}>
            Cancel
          </Button>
        </Modals>
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

