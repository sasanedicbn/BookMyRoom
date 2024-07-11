import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../store/roomsSlice";
import { fetchRooms } from "../api/fetchRooms";
import Room from "./Room";
import TableHead from "./TableHead";
import Modals from "./Modal/Modals";

const RoomsList = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.rooms); 
  const isOpenModal = useSelector((state) => state.modals.isModalOpen)

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
      {isOpenModal && <Modals/>}
    </div>
  );
};

export default RoomsList;
