const Room = ({ room }) => {
  const { id, name, description, maxCapacity, regularPrice, image, discount, created_at } = room;

  return (
    <tr className="room-container">
      <td>{image && <img className="room-image" src={image} alt={name} />}</td>
      <td>{name}</td>
      <td>{maxCapacity}</td>
      <td>${regularPrice}</td>
      <td>{discount ? `${discount}%` : 'N/A'}</td>
      <td className="ellipsis-cell">...</td>
    </tr>
  );
};

export default Room;
