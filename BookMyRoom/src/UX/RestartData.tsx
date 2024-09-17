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
      <Button type="success" onClick={uploadBookings}>Upload bookings</Button>
      <Button type="success" onClick={uploadAllData}>Upload rooms</Button>
    </div>
  );
};

export default RestartData;


// const uploadAllData = async () => {
//   try {    
//     const removeRooms = await deleteRooms();
//     const removeGuests = await deleteGuests();
//     const removeBooking = await deleteAllBookings();

//     if (removeRooms && removeGuests && removeBooking) {
//       console.log('All data deleted successfully, now uploading new data...');
//       const successRooms = await fetchRooms(cabins);
//       const successGuests = await fetchGuests(dataGuest);
//       console.log(successRooms, successGuests)
//       if(successRooms && successGuests){
//         const successBookings = await addBookingsData(bookings);
//         console.log('PROSLO OBA')
//         console.log('successBooking', successBookings)
//         if (successRooms && successGuests && successBookings) {
//           console.log('All data uploaded successfully');
//         } 
//       }else {
//         console.error('Failed to upload all data');
//       }
//     }
//      else {
//       console.error('Failed to delete rooms, guests, or bookings');
//     }
//   } catch (error) {
//     console.error('Error uploading all data:', error);
//   }
// };