
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
export const formatNumber = (number) => {
  return number.toString().padStart(3, '0');
};
export const handlerOpenEditModal = () => {
  console.log('Open Edit Modal');
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


export const formatBookingDate = (isoDate)  =>{
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

export const getButtonType = (btn) => {
  switch (btn) {
      case 'Check-out':
      case 'Check-in':
          return 'success';
      case 'Delete booking':
          return 'danger';
      case 'Back':
          return 'back';
      default:
          return 'default'; 
  }
};

const handleCheckOutDetails = () => {
  console.log("Check-out action");
};

const handleCheckInDetails = () => {
  console.log("Check-in action");
};

const handleDeleteBookingDetails = () => {
  console.log("Delete booking action");
};

const handleBackDetails = () => {
  console.log("Back action");
};

export const getButtonAction = (btn) => {
  switch (btn) {
      case 'Check-out':
          return handleCheckOutDetails;
      case 'Check-in':
          return handleCheckInDetails;
      case 'Delete booking':
          return handleDeleteBookingDetails;
      case 'Back':
          return handleBackDetails;
      default:
          return () => {}; 
  }
};

export  const getSeeDetailsBtns = (status) => {
  switch (status) {
      case 'checked-in':
          return ['Check-out', 'Delete booking', 'Back'];
      case 'checked-out':
          return ['Delete booking', 'Back'];
      case 'unconfirmed':
          return ['Check-in', 'Delete booking', 'Back'];
      default:
          return [];
  }
};