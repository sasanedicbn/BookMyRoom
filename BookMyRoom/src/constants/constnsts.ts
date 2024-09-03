import { BtnsMap } from "../types/types";
import { handleCheckOutDetails } from "../api/Booking/checkOutDetails";
import { deleteBookingById } from "../api/Booking/deleteBookingById";
import { differenceInDays, parseISO } from "date-fns";

export const filterButtons = [
  { label: 'All', filterValue: 'all' },
  { label: 'No discount', filterValue: 'no-discount' },
  { label: 'With discount', filterValue: 'discount' },
];
export const sortOptions = [
  { label: 'Sort by name (a-z)', value: 'name-asc' },
  { label: 'Sort by name (z-a)', value: 'name-desc' },
  { label: 'Price (lowest)', value: 'price-lowest' },
  { label: 'Price (highest)', value: 'price-highest' },
];
export const sortMapping = {
  'name-asc': { column: 'name', ascending: true },
  'name-desc': { column: 'name', ascending: false },
  'price-lowest': { column: 'regularPrice', ascending: true },
  'price-highest': { column: 'regularPrice', ascending: false },
  'created_at': { column: 'created_at', ascending: true }
};
export const bookingStatuses = [
  { label: 'All', filterValue: 'all' },
  { label: 'Checked out', filterValue: 'checked-out' },
  { label: 'Checked in', filterValue: 'checked-in' },
  { label: 'Unconfirmed', filterValue: 'unconfirmed' },
];

export const selectOptions = [
    { value: 'date-desc', label: 'Sort by date (recent first)' },
    { value: 'date-asc', label: 'Sort by date (earlier first)' },
    { value: 'amount-high', label: 'Sort by amount (high first)' },
    { value: 'amount-low', label: 'Sort by amount (low first)' }
];
export const formatNumber = (number:string ) => {
  return number.toString().padStart(3, '0');
};

const handleDeleteBooking = async (bookingId: string): Promise<void> => {
  await deleteBookingById(bookingId);
};

export const formatBookingDate = (isoDate:string)  =>{
  const date = new Date(isoDate);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const day = daysOfWeek[date.getUTCDay()];
  const month = months[date.getUTCMonth()];
  const dayOfMonth = date.getUTCDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; 

  return `Booked ${day}, ${month} ${dayOfMonth} ${year}, ${hours}:${minutes} ${ampm}`;
}


const handleNavigateToCheckIn = (details,navigate) => {
  if (details.id) {
      navigate(`/check-in/${details.id}`);
  }
};

// hash map
export const btnsMap: BtnsMap = {
  'Check-out': {
    type: 'success',
    handler: handleCheckOutDetails,
    content: ['Delete booking'],
  },
  'Check-in': {
    type: 'success',
    handler: handleNavigateToCheckIn,  
    content: ['Check-out', 'Delete booking'],
  },
  'Delete booking': {
    type: 'danger',
    handler: handleDeleteBooking,
    content: [],
  },
};


export  const getSeeDetailsBtns = (status:string) => {
  switch (status) {
      case 'checked-in':
          return ['Check-out', 'Delete booking'];
      case 'checked-out':
          return ['Delete booking'];
      case 'unconfirmed':
          return ['Check-in', 'Delete booking'];
      default:
          return [];
  }
};
export const calculateNights = (created_at: string, finish_booking: string) => {
  const createdAt = parseISO(created_at);
  const finishBooking = parseISO(finish_booking);
  return differenceInDays(finishBooking, createdAt);
};