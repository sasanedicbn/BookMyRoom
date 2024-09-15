import { deleteAllBookings } from "../api/Booking/deleteAllBookings";
import { useDispatch } from 'react-redux'; 
import Button from "./Button";
import { bookings } from "../script/data-Booking";
import { setBookings } from "../store/bookingsSlice";
import { addBookingsData } from "../api/Booking/addBookings";
import { deleteRooms } from "../api/Rooms/deleteRooms";
import { deleteGuests } from "../api/Booking/deleteGuests";
import { fetchGuests } from "../api/Booking/fetchGuests";
import { cabins } from "../script/data-cabins";
import { dataGuest } from "../script/data-guests";
import { fetchRooms } from "../api/Rooms/fetchRooms";

const RestartData = () => {
  const dispatch = useDispatch(); 

  const uploadBookings = async () => {
    const removeBooking = await deleteAllBookings();
    console.log('treba da bude boolean', removeBooking)
    if (removeBooking) {
      const success = await addBookingsData(bookings);
      console.log('success', success)
      if (success) {
        console.log('New bookings have been added successfully');
        
        dispatch(setBookings(bookings));
      } else {
        console.error('Failed to add new bookings');
      }
    } else {
      console.error('Failed to delete all bookings');
    }
  };
  const uploadAllData = async () => {
      const removeRooms = await deleteRooms()
      const removeGuests = await deleteGuests()
      if(removeRooms && removeGuests){
       const removeBooking = await deleteAllBookings()
      if(removeBooking && removeGuests && removeRooms){
        const successRooms = fetchRooms(cabins)
        const succesGuests = fetchGuests(dataGuest)
        const successBookings = addBookingsData(bookings)
        console.log('successRooms', successRooms, 'successuests', succesGuests, 'successBookings', successBookings)
      
      // if(succesGuests && successRooms && successBookings){
      //   console.log(' VEOMA DOBRO')
      // }
      }
    }
  }

  return (
    <div className="restartData-container">
      <Button type="success" onClick={uploadBookings}>Upload bookings ONLY</Button>
      <Button type="success" onClick={uploadAllData}>Upload All</Button>
    </div>
  );
}

export default RestartData;
