import { BiDotsVerticalRounded } from "react-icons/bi";

const Room = ({ room }) => {
  const { name, maxCapacity, regularPrice, image, discount } = room;

  return (
    <tr className="room-container">
      <td>{image && <img className="room-image" src={image} alt={name} />}</td>
      <td>{name}</td>
      <td>{maxCapacity} people</td>
      <td>${regularPrice}</td>
      <td>{discount ? `${discount}%` : '/'}</td>
      <td className="ellipsis-cell"><BiDotsVerticalRounded /></td>
    </tr>
  );
};

export default Room;
