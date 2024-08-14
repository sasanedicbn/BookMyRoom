import { useState } from "react";
import { bookingStatuses, selectOptions } from "../../constants/constnsts";
import Button from "../../UX/Button";
import Select from "../../UX/Select";

const BookingsFilters = () => {
    const [filter, setFilter] = useState('all')
    console.log('filter',filter)

    return (
        <div className="bookings-filters">
            <h1>Bookings</h1>
            {bookingStatuses.map((status, index) => (
                <Button key={index} type="success" onClick={(() => setFilter(status.filterValue))} >
                    {status.label}
                </Button>
            ))}
            <Select options={selectOptions} />
        </div>
    );
};

export default BookingsFilters;