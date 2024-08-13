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
                Guests (name, email),
                Cabins (cabinNumber)
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
        <ComponentWrapper>
            <h2>BOOKINGS</h2>
            <BookingsTable bookings={bookings} />
        </ComponentWrapper>
    );
}

export default Bookings;