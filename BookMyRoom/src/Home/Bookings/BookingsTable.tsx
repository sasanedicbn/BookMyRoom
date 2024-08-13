const BookingsTable = ({ bookings }) => {
    return (
        <table style={tableStyle}>
            
            <tbody>
                {bookings.map((booking, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{booking.Bedrooms?.id}</td>
                        <td style={tdStyle}>{booking.Guests?.fullName}</td>
                        <td style={tdStyle}>{booking.Guests?.email}</td>
                        <td style={tdStyle}>
                            {new Date(booking.checkInDate).toLocaleDateString()} — {new Date(booking.checkOutDate).toLocaleDateString()}
                        </td>
                        <td style={tdStyle}>{booking.status}</td>
                        <td style={tdStyle}>${booking.totalPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '18px',
    textAlign: 'left'
};


const tdStyle = {
    padding: '12px 15px',
    borderBottom: '1px solid #dddddd'
};

export default BookingsTable;
