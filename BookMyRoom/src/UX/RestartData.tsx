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
import { toast } from "react-toastify";
import { getRooms } from "../store/roomsSlice";

const RestartData = () => {
  const dispatch = useDispatch(); 

  const uploadBookings = async () => {
    try {
      const removeBooking = await deleteAllBookings();
      console.log('Bookings deletion status:', removeBooking);

      if (removeBooking) {
        const success = await addBookingsData(bookings);
        console.log('success iz bookinga', success)
        if (success) {
          console.log('New bookings have been added successfully');
          dispatch(setBookings(bookings));
        } else {
          console.error('Failed to add new bookings');
        }
      } else {
        console.error('Failed to delete all bookings');
      }
    } catch (error) {
      console.error('Error uploading bookings:', error);
    }
  };

  const uploadAllData = async () => {
    try {
      await deleteRooms(); 
      await deleteGuests(); 
      await fetchRooms(cabins);
      await fetchGuests(dataGuest);
      dispatch(getRooms(cabins))
    } catch (error) {
      toast.error('Error uploading rooms data')
    }
  };
  

  return (
    <div className="restartData-container">
       <Button type="restartData" onClick={uploadBookings}>Upload bookings</Button>
      <Button type="restartData" onClick={uploadAllData}>Upload rooms</Button>
    </div>
  );
};

export default RestartData;


