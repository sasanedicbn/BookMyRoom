import TableHeadBookings from "./TableHeadBookings";

const BookingsTable = ({ bookings }) => {
    const formatNumber = (number) => {
        return number.toString().padStart(3, '0');
    };
    
    return (
        <table className="table">
            <TableHeadBookings/>
            <tbody className="table-body">
                {bookings.map((booking, index) => (
                    <tr key={index}>
                        <td>{formatNumber(booking.Bedrooms?.id)}</td>
                        <td className="table-body-guest">{booking.Guests?.fullName} <span>{booking.Guests?.email}</span></td>
                        <td>
                            {new Date(booking.checkInDate).toLocaleDateString()} — {new Date(booking.checkOutDate).toLocaleDateString()}
                        </td>
                        <td>
                            <span className={`${
                                booking.status === 'checked-in' ? 'checked-in' :
                                booking.status === 'unconfirmed' ? 'unconfirmed' :
                                booking.status === 'checked-out' ? 'checked-out' : ''
                            }`}>
                                {booking.status}
                            </span>
                        </td>
                        <td>${booking.totalPrice}</td>
                        <td>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookingsTable;
