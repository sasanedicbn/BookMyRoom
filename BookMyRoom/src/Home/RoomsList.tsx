import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../store/roomsSlice";
import { fetchRooms } from "../api/fetchRooms";
import Room from "./Room";
import TableHead from "./TableHead";
import NewEditRoom from "./Room/newEditRoom";

const RoomsList = () => {
  const dispatch = useDispatch();
  const [openNewRoom, setOpenNewRoom] = useState(false);
  const rooms = useSelector((state) => state.rooms.rooms);

  useEffect(() => {
    const roomsListHandler = async () => {
      const rooms = await fetchRooms();
      console.log(rooms);
      if (rooms) {
        dispatch(getRooms(rooms));
      }
    };
    roomsListHandler();
  }, [dispatch]);

  return (
    <div className="roomsList-container">
      <h1>Room List</h1>
      <table className="rooms-table">
        <TableHead />
        <tbody>
          {rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </tbody>
      </table>
      <button className="btn-newroom" onClick={() => setOpenNewRoom(true)}>Add new room</button>
      {openNewRoom && <NewEditRoom handleCloseEditModal={() => setOpenNewRoom(false)} />}
    </div>
  );
};

export default RoomsList;
