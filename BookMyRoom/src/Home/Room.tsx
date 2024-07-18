import  { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Modals from './Modal/Modals';
import { supabase } from '../superbase/superbaseClient';
import { getRooms } from '../store/roomsSlice';
import { useDispatch } from 'react-redux';
// import NewRoom from './Room/NewRoom';

const Room = ({ room }) => {
  const dispatch = useDispatch()
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
        {openMenuModal && <Modals  setOpenMenuModal={setOpenMenuModal} room={room}  />}
      </td>
    </tr>
  );
};


export default Room;
