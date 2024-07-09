
const Room = ({ room }) => {
  const { id, name, description, maxCapacity, regularPrice, image } = room;

  return (
    <li key={id}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Max Capacity: {maxCapacity}</p>
      <p>Regular Price: ${regularPrice}</p>
      {image && <img src={image} alt={`Room ${name}`} />}
    </li>
  );
};

export default Room;
