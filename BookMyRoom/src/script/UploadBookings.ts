import { useDispatch } from "react-redux";
import { addBookingsData } from "../api/Booking/addBookings";
import { deleteAllBookings } from "../api/Booking/deleteAllBookings";
import { bookings } from "./data-Booking";
import { setBookings } from "../store/bookingsSlice";

export const uploadBookings = async () => {
  const dispatch = useDispatch()
  const removeBooking = await deleteAllBookings();
  if (removeBooking) {
    const success = await addBookingsData(bookings);
    if (success) {
      console.log('New bookings have been added successfully');
      dispatch(setBookings(bookings))
    } else {
      console.error('Failed to add new bookings');
    }
  } else {
    console.error('Failed to delete all bookings');
  }
};
