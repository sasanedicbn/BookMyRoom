import TableHead from "../TableHead";

const BookingsTable = ({ bookings }) => {
    return (
        <table className="table">
            <TableHead/>
            <tbody className="table-body">
                {bookings.map((booking, index) => (
                    <tr key={index}>
                        <td>{booking.Bedrooms?.id}</td>
                        <td>{booking.Guests?.fullName}</td>
                        <td>{booking.Guests?.email}</td>
                        <td>
                            {new Date(booking.checkInDate).toLocaleDateString()} — {new Date(booking.checkOutDate).toLocaleDateString()}
                        </td>
                        <td>{booking.status}</td>
                        <td>${booking.totalPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BookingsTable;