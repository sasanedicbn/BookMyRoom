import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../store/roomsSlice";
import { fetchRooms } from "../api/fetchRooms";
import Room from "./Room";

const RoomsList = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms); 

  useEffect(() => {
    const roomsListHandler = async () => {
      const rooms = await fetchRooms();
      console.log(rooms)
      if (rooms) {
        dispatch(getRooms(rooms));
      }
    };
    roomsListHandler();
  }, []);

  return (
    <div>
      <h1>Room List</h1>
      <table className="rooms-table">
        <thead>
          <tr>
            <th></th> 
            <th>Cabin</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Discount</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomsList;
