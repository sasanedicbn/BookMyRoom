import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../store/roomsSlice";
import { fetchRooms } from "../api/fetchRooms";

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
      <ul>
        {rooms.map((room) => (
          <Room room={room} />
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;
