import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../store/roomsSlice";
import { fetchRooms } from "../api/fetchRooms";
import Room from "./Room";
import TableHead from "./TableHead";

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
    <div className="roomsList-container">
      <h1>Room List</h1>
      <table className="rooms-table">
      <TableHead/>
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
