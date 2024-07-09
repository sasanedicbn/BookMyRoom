
const Room = ({ room }) => {
  const { id, name, description, maxCapacity, regularPrice, image } = room;

  return (
    <li key={id} className="room-container">
      {image && <img className="room-image" src={image} />}
      {/* <h2>{name}</h2> */}
      <div className="room-details">
       <p>{description}</p>
       <p>Max Capacity: {maxCapacity}</p>
       <p>Regular Price: ${regularPrice}</p>
      </div>
    </li>
  );
};

export default Room;
