import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import TableHeadBookings from './TableHeadBookings';
import { formatNumber } from '../../constants/constnsts';
import OptionsMenu from '../../UX/OptionsMenu';
import { FaCheck, FaEye, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Booking,  } from '../../types/types';
import { format } from 'date-fns';
import { deleteBookingById } from '../../api/Booking/deleteBookingById';
import { setBookings } from '../../store/bookingsSlice';

const BookingsTable = () => {
    const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);
    const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null); 
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const bookings = useSelector((state) => state.bookings.bookings); 

    console.log('//////////', bookings)
    const handleSeeDetails = (id: number | undefined) => {
        if (id) {
            navigate(`/booking/${id}`);
        }
    };

    const handleOpenModal = (booking: Booking) => {
        setCurrentBooking(booking);
        setOpenMenuModal(true);
    };

    const handleCloseModal = () => {
        setOpenMenuModal(false);
        setCurrentBooking(null);
    };
     
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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

    const handleDeleteBooking = async () => {
        if (currentBooking?.id) {
            const success = await deleteBookingById(currentBooking.id, navigate);
            if (success) {
                handleCloseModal(); 
                dispatch(setBookings(bookings.filter((booking:Booking) => booking.id !== currentBooking.id)));
            }
        }
    };
    
    const modalsActions = [
        { key: 'delete', icon: <FaTrash />, label: 'Delete', onClick: handleDeleteBooking },
        { key: 'check-out', icon: <FaCheck />, label: 'Check Out', onClick: () => {console.log('check out')} },
        { key: 'check-in', icon: <FaCheck />, label: 'Check In', onClick: () => {console.log('check in')} },
        { key: 'see-details', icon: <FaEye />, label: 'See Details', onClick: () => handleSeeDetails(Number(currentBooking?.id)) }, 
    ];

    const getModalOptions = (status: string) => {
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

    const getModalsActions = (options: string[]) => {
        return modalsActions.filter(action => options.includes(action.key));
    };

    return (
        <div>
            <table className="table">
                <TableHeadBookings />
                <tbody className="table-body">
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{formatNumber(booking.Bedrooms?.id)}</td>
                            <td className="table-body-guest">
                                {booking.Guests?.fullName} <span>{booking.Guests?.email}</span>
                            </td>
                            <td>
                                {booking.create_booking ? format(new Date(booking.create_booking), "d MMM yyyy") : 'Invalid date'}
                                 — {booking.finish_booking ? format(new Date(booking.finish_booking), "d MMM yyyy") : 'Invalid date'}
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
                                    strokeWidth="0" 
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
};

export default BookingsTable;
