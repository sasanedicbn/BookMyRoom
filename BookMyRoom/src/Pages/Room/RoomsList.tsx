import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../store/roomsSlice";
import { fetchRooms } from "../../api/fetchRooms";
import Room from "./Room";
import NewEditRoom from "./newEditRoom";
import SortRooms from "./SortRooms";
import Button from "../../UX/Button";
import ComponentWrapper from "../../UX/ComponentWrapper";
import TableHead from "./TableHead";
import Modals from "../../UX/Modals";
import Spinner from "../../global/Spinner";

const RoomsList = () => {
  const dispatch = useDispatch();
  const [addNewRoom, setAddNewRoom] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const rooms = useSelector((state) => state.rooms.rooms);
  console.log('ROOMS', rooms);

  const handleAddNewRoom = () => {
    setAddNewRoom((prevState) => !prevState);
  };

  useEffect(() => {
    const roomsListHandler = async () => {
      const rooms = await fetchRooms();
      if (rooms) {
        dispatch(getRooms(rooms));
      }
    };
    roomsListHandler();
  }, [dispatch]);

  return (
    <ComponentWrapper type={'tableWrapper'}>
      <div className="roomsList-container">
        <SortRooms/>
        {rooms.length ? (
          <>
            <table className="rooms-table">
              <TableHead/>
              <tbody>
                {rooms.map((room) => (
                  <Room key={room.id} room={room} />
                ))}
              </tbody>
            </table>
            <Button type={'success'} onClick={handleAddNewRoom}>
              Add new room
            </Button>
            {addNewRoom && (
              <Modals type={'addNewRoom'}>
                <NewEditRoom setOpenEditModal={setOpenEditModal} closeMenuModal={handleAddNewRoom} />
              </Modals>
            )}
          </>
        ) : (
          <Spinner/>
        )}
      </div>
    </ComponentWrapper>
  );
};

export default RoomsList;
