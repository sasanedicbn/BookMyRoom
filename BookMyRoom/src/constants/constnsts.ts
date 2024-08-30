import { toast } from "react-toastify";
import { deleteBookingById } from "../api/deleteBookingById";
import { supabase } from "../supabase/supabaseClient";
import { BtnsMap } from "../types/types";

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
export const handlerOpenEditModal = () => {
  console.log('Open Edit Modal');
};
const handleDeleteBooking = async (bookingId: string): Promise<void> => {
  await deleteBookingById(bookingId);
};


export const handleDelete = () => {
  console.log('Delete functionality here');
};

export const handleCheckOut = () => {
  console.log('Check-out functionality here');
};

export const handleCheckIn = () => {
  console.log('Check-in functionality here');
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


const handleCheckInDetails = async (bookingId:string) => {
  try {
    const { data, error } = await supabase
      .from('Bookings')
      .update({ status: 'checked-in' })
      .eq('id', bookingId);

    if (error) throw error;

    console.log('Booking checked in:', data);
    toast.success('Booking successfully checked in!');
  } catch (error) {
    toast.error('Failed to check in the booking.');
  }
};

 const handleCheckOutDetails = async (bookingId:string) => {
  try {
    const { data, error } = await supabase
      .from('Bookings')
      .update({ status: 'checked-out' })
      .eq('id', bookingId);

    if (error) throw error;

    console.log('booking chekcked out', data)
    toast.success('Booking successfully checked-out!');
  } catch (error) {
    toast.error('Failed to check in the booking.');

  }
};

// hash map
export const btnsMap:BtnsMap = {
  'Check-out': {
    type: 'success',
    handler: handleCheckOutDetails,
    content: ['Delete booking'],
  },
  'Check-in': {
    type: 'success',
    handler: handleCheckInDetails,
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
