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
export const formatNumber = (number) => {
  return number.toString().padStart(3, '0');
};
