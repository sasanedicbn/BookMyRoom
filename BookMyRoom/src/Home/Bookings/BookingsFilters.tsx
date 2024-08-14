import { useEffect, useState } from "react";
import { bookingStatuses, selectOptions } from "../../constants/constnsts";
import Button from "../../UX/Button";
import Select from "../../UX/Select";
import { supabase } from "../../superbase/superbaseClient";
import BookingsTable from "./BookingsTable";

const BookingsFilters = () => {
    const [bookings, setBookings] = useState([]);
    const [filter, setFilter] = useState('all')
    console.log('filter',filter)
    
    useEffect(() => {
        const fetchBookings = async () => {
            let query = supabase.from('Bookings').select(`*,
                Bedrooms (id),
                Guests (fullName, email)
            `);
            console.log('query', query)
            if (filter === 'checked-in') {
                query = query.eq('status', 'checked-in');
                console.log('query checked-in', query)
            } else if (filter === 'checked-out') {
                query = query.eq('status', 'checked-out');
            } else if (filter === 'unconfirmed') {
                query = query.eq('status', 'unconfirmed');
            }

            const { data, error } = await query;

            if (error) {
                console.error('Error fetching bookings:', error);
            } else {
                setBookings(data);
            }
        };

        fetchBookings();
    }, [filter]);

    return (
        <div className="bookings-container">
        <div className="bookings-filters">
            <h1>Bookings</h1>
            {bookingStatuses.map((status, index) => (
                <Button key={index} type="success" onClick={(() => setFilter(status.filterValue))} >
                    {status.label}
                </Button>
            ))}
            <Select options={selectOptions} />
        </div>
         <BookingsTable bookings={bookings}/>
         </div>
    );
};

export default BookingsFilters;