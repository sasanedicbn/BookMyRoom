import { deleteAllBookings } from "../api/Booking/deleteAllBookings";
import { useDispatch } from 'react-redux'; 
import Button from "./Button";
import { bookings } from "../script/data-Booking";
import { setBookings } from "../store/bookingsSlice";
import { addBookingsData } from "../api/Booking/addBookings";

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

  return (
    <div className="restartData-container">
      <Button type="success" onClick={uploadBookings}>Upload bookings ONLY</Button>
    </div>
  );
}

export default RestartData;
