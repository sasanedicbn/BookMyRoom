import { useDispatch } from 'react-redux';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { openModal } from '../store/modalSlice';

const Room = ({ room }) => {
  const dispatch = useDispatch();
  const { name, maxCapacity, regularPrice, image, discount,  } = room;

  const handleOpenModal = () => {
    dispatch(openModal(room));
  };

  const 
  return (
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
  );
};

export default Room;

