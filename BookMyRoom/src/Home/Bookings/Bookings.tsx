import { useState, useEffect } from "react";
import ComponentWrapper from "../../UX/ComponentWrapper";
import BookingsTable from "./BookingsTable";
import { supabase } from "../../superbase/superbaseClient";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    const getBookings = async () => {
        let { data: bookings, error } = await supabase
            .from('Bookings')
            .select(`*,
                Bedrooms (id),
                Guests (fullName, email)
            `);
        if (!error) {
            setBookings(bookings);
        } else {
            console.error(error);
        }
    }

    useEffect(() => {
        getBookings();
    }, []);

    return (
        <div>
            <BookingsTable bookings={bookings} />
        </div>
    );
}

export default Bookings;