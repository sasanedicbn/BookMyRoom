import { addBookingsData } from "../api/Booking/addBookings";
import { deleteAllBookings } from "../api/Booking/deleteAllBookings";
import { bookings } from "./data-Booking";
import { dataGuest } from "./data-guests";

// const bookingsToAdd = dataGuest.map((guest) => ({
//   fullName: guest.fullName,
//   email: guest.email,
// }));

export const uploadBookings = async () => {
  const removeBooking = await deleteAllBookings();
  if (removeBooking) {
    const success = await addBookingsData(bookings);
    if (success) {
      //  addBookingsData(bookingsToAdd)
      //  console.log('guest fullname and email',bookingsToAdd)
        console.log('succes bookings', bookings)
      console.log('New bookings have been added successfully');
    } else {
      console.error('Failed to add new bookings');
    }
  } else {
    console.error('Failed to delete all bookings');
  }
};
