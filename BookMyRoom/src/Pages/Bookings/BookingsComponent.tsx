import { useEffect, useState } from "react";
import Button from "../../UX/Button";
import Select from "../../UX/Select";
import { supabase } from "../../supabase/supabaseClient";
import BookingsTable from "./BookingsTable";
import { bookingStatuses, selectOptions } from "../../constants/constnsts";
import Spinner from "../../global/Spinner";
import {  SortOption } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setBookings } from "../../store/bookingsSlice";

const BookingsComponent = () => {
    const dispatch = useDispatch()
    const bookings = useSelector((booking) => booking.bookings.bookings)
    console.log('BOOKINGS IZ SLAJSA', bookings)
    const [loading, setLoading] = useState<boolean>(true);

    const sortMapping: Record<SortOption, { column: string; ascending: boolean }> = {
        'date-desc': { column: 'created_at', ascending: false },
        'date-asc': { column: 'created_at', ascending: true },
        'amount-high': { column: 'totalPrice', ascending: false },
        'amount-low': { column: 'totalPrice', ascending: true }
    };

    const fetchBookings = async (sort: SortOption = 'date-desc', filter: string = 'all') => {
        setLoading(true);

        let query = supabase.from('Bookings').select(`
            *,
            Bedrooms (id),
            Guests (fullName, email)
        `);

        if (filter !== 'all') {
            query = query.eq('status', filter);
        }

        const { column, ascending } = sortMapping[sort];
        console.log('column', column , 'ascending', ascending)

        const { data, error } = await query.order(column, { ascending });
        setLoading(false);
        if (error) {
            console.error('Error fetching bookings:', error);
        } else {
            dispatch(setBookings(data));
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = e.target.value as SortOption;
        fetchBookings(selectedSort);
    };

    const handleFilterChange = (filter: string) => {
        fetchBookings(undefined, filter);
    };

    return (
        <div className="bookings-container">
            <div className="bookings-filters">
                <h1>Bookings</h1>
                {bookingStatuses.map((status, index) => (
                    <Button key={index} type="success" onClick={() => handleFilterChange(status.filterValue)}>
                        {status.label}
                    </Button>
                ))}
                <Select
                    options={selectOptions}
                    onChange={handleSortChange}
                />
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <BookingsTable />
            )}
        </div>
    );
};

export default BookingsComponent;

