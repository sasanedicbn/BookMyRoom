import { useEffect, useState } from "react";
import Button from "../../UX/Button";
import Select from "../../UX/Select";
import { supabase } from "../../supabase/supabaseClient";
import BookingsTable from "./BookingsTable";
import { bookingStatuses, selectOptions } from "../../constants/constnsts";
import Spinner from "../../global/Spinner";

type Booking = {
    id: string;
    status: string;
    created_at: string;
    totalPrice: number;
    Bedrooms: {
        id: string;
    };
    Guests: {
        fullName: string;
        email: string;
    }[];
};

type SortOption = 'date-desc' | 'date-asc' | 'amount-high' | 'amount-low';
type FilterOption = 'all' | string;

const BookingsComponent = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [filter, setFilter] = useState<FilterOption>('all');
    const [sort, setSort] = useState<SortOption>('date-desc');
    const [loading, setLoading] = useState<boolean>(true); 

    const sortMapping: Record<SortOption, { column: string; ascending: boolean }> = {
        'date-desc': { column: 'created_at', ascending: false },
        'date-asc': { column: 'created_at', ascending: true },
        'amount-high': { column: 'totalPrice', ascending: false },
        'amount-low': { column: 'totalPrice', ascending: true }
    };
    
    useEffect(() => {
        setLoading(true);
        const fetchBookings = async () => {
            let query = supabase.from('Bookings').select(`
                *,
                Bedrooms (id),
                Guests (fullName, email)
            `);

            if (filter !== 'all') {
                query = query.eq('status', filter);
            }
    
            const { data, error } = await query.order(sortMapping[sort].column, { ascending: sortMapping[sort].ascending });
            setLoading(false);
            if (error) {
                console.error('Error fetching bookings:', error);
            } else {
                setBookings(data || []);
            }
        };

        fetchBookings();
    }, [filter, sort]);

    return (
        <div className="bookings-container">
            <div className="bookings-filters">
                <h1>Bookings</h1>
                {bookingStatuses.map((status, index) => (
                    <Button key={index} type="success" onClick={() => setFilter(status.filterValue as FilterOption)}>
                        {status.label}
                    </Button>
                ))}
                <Select
                    options={selectOptions}
                    onChange={(e : React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value as SortOption)}
                />
            </div>
            {loading ? ( 
                <Spinner />
            ) : (
                <BookingsTable bookings={bookings} setBookings={setBookings} />
            )}
        </div>
    );
};

export default BookingsComponent;
