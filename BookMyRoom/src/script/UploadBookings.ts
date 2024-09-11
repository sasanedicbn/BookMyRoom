import { currentDate } from "./data-Booking"

export const uploadBookings = async () => {
    const updatedBookings = currentDate()
    console.log(updatedBookings)
}
