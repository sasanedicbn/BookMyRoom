
const Room = ({ room }) => {
  const { id, name, description, maxCapacity, regularPrice, image, created_at } = room;

  return (
    <li key={id} className="room-container">
      {image && <img className="room-image" src={image} />}
      {/* <h2>{name}</h2> */}
      <div className="room-details">
       <p className="room-details-description">{description}</p>
       <p className="room-details-capacity">Max Capacity: {maxCapacity} people</p>
       <p className="room-details-price">Regular Price: ${regularPrice}</p>
       <p className="room-details-created">Posted: {created_at}</p>
       <button className="btn-show-more">Show more...</button>
      </div>
    </li>
  );
};

export default Room;
