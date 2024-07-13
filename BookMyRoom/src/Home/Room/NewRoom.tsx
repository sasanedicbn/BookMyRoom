const NewRoom = ({setOpenNewRoom}) => {
    const openNewRoomHandler = () => {
        setOpenNewRoom(true)
      }
    return(
        <button className="btn-newroom" onClick={() => openNewRoomHandler}>Add new room</button>
    )
}
export default NewRoom;