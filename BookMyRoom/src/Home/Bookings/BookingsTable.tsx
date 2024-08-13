const BookingsTable = ({ bookings }) => {
    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={thStyle}>Cabin</th>
                    <th style={thStyle}>Guest</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Dates</th>
                    <th style={thStyle}>Status</th>
                    <th style={thStyle}>Amount</th>
                </tr>
            </thead>
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

// Stilovi za tabelu
const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    fontSize: '18px',
    textAlign: 'left'
};

const thStyle = {
    backgroundColor: '#f4f4f4',
    padding: '12px 15px',
    borderBottom: '1px solid #dddddd'
};

const tdStyle = {
    padding: '12px 15px',
    borderBottom: '1px solid #dddddd'
};

export default BookingsTable;
