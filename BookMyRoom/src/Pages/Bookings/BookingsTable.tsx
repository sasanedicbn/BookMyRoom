import { useState, useEffect, useRef } from 'react';
import TableHeadBookings from './TableHeadBookings';
import { formatNumber } from '../../constants/constnsts';
import OptionsMenu from '../../UX/OptionsMenu';
import { FaCheck, FaEye, FaTrash } from 'react-icons/fa';

const BookingsTable = ({ bookings }) => {
    console.log(bookings, 'BOOKINGS')
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);
    const modalRef = useRef(null); 

    // Definišite sve moguće akcije
    const handleOpenModal = (booking) => {
        setCurrentBooking(booking);
        setOpenMenuModal(true);
    };

    const handleCloseModal = () => {
        setOpenMenuModal(false);
        setCurrentBooking(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        if (openMenuModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenuModal]);

    const modalsActions = [
        { key: 'delete', icon: <FaTrash />, label: 'Delete', /* onClick: handleDelete */ },
        { key: 'check-out', icon: <FaCheck />, label: 'Check Out', /* onClick: handleCheckOut */ },
        { key: 'check-in', icon: <FaCheck />, label: 'Check In', /* onClick: handleCheckIn */ },
        { key: 'see-details', icon: <FaEye />, label: 'See Details', /* onClick: handleSeeDetails */ },
    ];

    const getModalOptions = (status) => {
        switch (status) {
            case 'checked-in':
                return ['check-out', 'see-details', 'delete'];
            case 'checked-out':
                return ['see-details', 'delete'];
            case 'unconfirmed':
                return ['check-in', 'see-details', 'delete'];
            default:
                return [];
        }
    };

    const getModalsActions = (options) => {
        return modalsActions.filter(action => options.includes(action.key));
    };

    return (
        <div>
            <table className="table">
                <TableHeadBookings/>
                <tbody className="table-body">
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{formatNumber(booking.Bedrooms?.id)}</td>
                            <td className="table-body-guest">
                                {booking.Guests?.fullName} <span>{booking.Guests?.email}</span>
                            </td>
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
                            <td className="totalPrice-table">
                                ${booking.totalPrice + ',00'}
                            </td>
                            <td>
                                <svg 
                                    className='' 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    stroke-width="0" 
                                    viewBox="0 0 24 24" 
                                    height="1em" 
                                    width="1em" 
                                    cursor="pointer"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleOpenModal(booking);
                                    }}>
                                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                                {openMenuModal && currentBooking?.id === booking.id && (
                                    <div ref={modalRef} className='optionsMenu-container'>
                                        <OptionsMenu 
                                            modalsActions={getModalsActions(getModalOptions(currentBooking.status))}
                                        />
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookingsTable;
