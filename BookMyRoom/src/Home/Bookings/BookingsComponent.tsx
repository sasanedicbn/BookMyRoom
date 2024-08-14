import { useEffect, useState } from "react";
import Button from "../../UX/Button";
import Select from "../../UX/Select";
import { supabase } from "../../superbase/superbaseClient";
import BookingsTable from "./BookingsTable";
import { bookingStatuses, selectOptions } from "../../constants/constnsts";

const BookingsComponent = () => {
    const [bookings, setBookings] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('date-desc');

    const sortMapping = {
        'date-desc': { column: 'created_at', ascending: false },
        'date-asc': { column: 'created_at', ascending: true },
        'amount-high': { column: 'totalPrice', ascending: false },
        'amount-low': { column: 'totalPrice', ascending: true }
    };
    
    useEffect(() => {
        const fetchBookings = async () => {
            let query = supabase.from('Bookings').select(`*,
                Bedrooms (id),
                Guests (fullName, email)
            `);

            if(filter !== 'all'){
                query = query.eq('status', filter)
            }
    
            const { data, error } = await query.order(sortMapping[sort].column, { ascending: sortMapping[sort].ascending });

            if (error) {
                console.error('Error fetching bookings:', error);
            } else {
                setBookings(data);
            }
        };

        fetchBookings();
    }, [filter, sort]);

    return (
        <div className="bookings-container">
            <div className="bookings-filters">
                <h1>Bookings</h1>
                {bookingStatuses.map((status, index) => (
                    <Button key={index} type="success" onClick={() => setFilter(status.filterValue)}>
                        {status.label}
                    </Button>
                ))}
                <Select
                    options={selectOptions}
                    onChange={(e) => setSort(e.target.value)}
                />
            </div>
            <BookingsTable bookings={bookings} />
        </div>
    );
};

export default BookingsComponent;
