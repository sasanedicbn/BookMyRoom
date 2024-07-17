import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, singleRoom } from "../store/roomsSlice";
import { fetchRooms } from "../api/fetchRooms";
import Room from "./Room";
import TableHead from "./TableHead";
import NewRoom from "./Room/NewRoom";
import NewEditRoom from "./Room/newEditRoom";
import Modals from "./Modal/Modals";

const RoomsList = () => {
  const dispatch = useDispatch();
  const [addNewRoom, setAddNewRoom] = useState(false)
  const rooms = useSelector((state) => state.rooms.rooms);


  const handleAddNewRoom = () => {
    setAddNewRoom((state) => !state)
  }
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
      <button className="btn-newroom" onClick={handleAddNewRoom}>
        Add new room
      </button>
      {addNewRoom && <NewEditRoom/>}
      {/* {openNewRoom && <NewEditRoom handleCloseEditModal={closeNewRoomModal} handleEditSubmit={''}/>} */}
    </div>
  );
};

export default RoomsList;