import { useEffect, useState } from "react";
import Button from "../../UX/Button";
import Select from "../../UX/Select";
import { supabase } from "../../supabase/supabaseClient";
import BookingsTable from "./BookingsTable";
import { bookingStatuses, selectOptions } from "../../constants/constnsts";
import Spinner from "../../global/Spinner";
import { SortOption } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setBookings } from "../../store/bookingsSlice";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";

const BookingsComponent = () => {
    const dispatch = useDispatch();
    const bookings = useSelector((booking) => booking.bookings.bookings); 
    console.log('BOOKINGS IZ SLAJSA', bookings);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get('status') || 'all'; 
    let query = supabase.from('Bookings').select(`
        *,
        Bedrooms (id),
        Guests (fullName, email)
    `); 

    const fetchBookings = async (filter: string = 'all') => {
        setLoading(true);

        // Dodaj filtriranje na status
        if (filter !== 'all') {
            query = query.eq('status', filter);
        }

        const { data, error } = await query;
        setLoading(false);

        if (error) {
            console.error('Error fetching bookings:', error);
        } else {
            dispatch(setBookings(data)); // Ubacuje bookings u Redux store
        }
    };

    useEffect(() => {
        fetchBookings(filterValue); // Pozovi preuzimanje bookings sa filterom
    }, [filterValue]); // Ponovo pozovi kada se promeni filter

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSort = e.target.value as SortOption;
        fetchBookings(selectedSort); 
    };

    return (
        <div className="bookings-container">
            <div className="bookings-filters">
                <h1>Bookings</h1>
                
                <Filter options={['all', 'checked-out', 'checked-in', 'unconfirmed']} />
                <Select
                    options={selectOptions}
                    onChange={handleSortChange} // Pozovi promenu sort opcije
                />
            </div>
            {loading ? (
                <Spinner /> 
            ) : (
                <BookingsTable bookings={bookings} /> // Prikazivanje bookings u tabeli
            )}
        </div>
    );
};

export default BookingsComponent;
