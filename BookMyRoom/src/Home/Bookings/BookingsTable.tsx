import { useState } from 'react';
import Modals from '../Modal/Modals';
import TableHeadBookings from './TableHeadBookings';
import { formatNumber } from '../../constants/constnsts';

const BookingsTable = ({ bookings }) => {
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);

    const handleOpenModal = (booking) => {
        setCurrentBooking(booking);
        setOpenMenuModal(true);
    };
   
    const getModalOptions = (status) => {
        switch (status) {
            case 'checked-in':
                return ['check-out', 'see-details', 'delete'];
            case 'checked-out':
                return ['see-details', 'delete'];
            case 'unconfirmed':
                return ['checked-in', 'see-details', 'delete'];
            default:
                return [];
        }
    };

    return (
        <div>
            <table className="table">
                <TableHeadBookings/>
                <tbody className="table-body">
                    {bookings.map((booking, index) => (
                        <>
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
                                <td className="totalPrice-table">${booking.totalPrice + ',00'}</td>
                                <td>
                                    <svg className='' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick={() => handleOpenModal(booking)}>
                                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                </td>
                            </tr>
                            {openMenuModal && currentBooking?.id === booking.id && (
                                        <Modals 
                                            room={currentBooking} 
                                            setOpenMenuModal={setOpenMenuModal} 
                                            options={getModalOptions(currentBooking.status)} 
                                        />
                            )}
                        </>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}

export default BookingsTable;
