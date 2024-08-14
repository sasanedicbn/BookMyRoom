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
