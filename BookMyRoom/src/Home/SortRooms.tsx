import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { supabase } from '../superbase/superbaseClient';
import { getRooms } from '../store/roomsSlice';
import Button from '../UX/Button';
import Select from '../UX/Select';

const SortRooms = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name-asc');

  useEffect(() => {
    const fetchRooms = async () => {
      let query = supabase.from('Bedrooms').select('*');

      if (filter === 'no-discount') {
        query = query.eq('discount', 0);
      } else if (filter === 'discount') {
        query = query.gt('discount', 0);
      }

      const sortMapping = {
        'name-asc': { column: 'name', ascending: true },
        'name-desc': { column: 'name', ascending: false },
        'price-lowest': { column: 'regularPrice', ascending: true },
        'price-highest': { column: 'regularPrice', ascending: false },
        'created_at': { column: 'created_at', ascending: true }
      };

      const { data, error } = await query.order(sortMapping[sort].column, { ascending: sortMapping[sort].ascending });

      if (error) {
        console.log('Error fetching rooms:', error);
        return;
      }

      dispatch(getRooms(data));
    };

    fetchRooms();
  }, [filter, sort, dispatch]);

  const filterButtons = [
    { label: 'All', filterValue: 'all' },
    { label: 'No discount', filterValue: 'no-discount' },
    { label: 'With discount', filterValue: 'discount' },
  ];
  const sortOptions = [
    { label: 'Sort by name (a-z)', value: 'name-asc' },
    { label: 'Sort by name (z-a)', value: 'name-desc' },
    { label: 'Price (lowest)', value: 'price-lowest' },
    { label: 'Price (highest)', value: 'price-highest' },
  ];

  return (
    <div className="sort-rooms-container">
      <div className="header">
        <h1>Room List</h1>
      </div>
      <div className="controls">
        <div className="filter-buttons">
          {filterButtons.map((btn, index) => (
            <Button
              key={index}
              className={`filter-btn`}
              onClick={() => setFilter(btn.filterValue)}
            >
              {btn.label}
            </Button>
          ))}
        </div>
        <div className="sort-options">
        <Select
            options={sortOptions}
            onChange={(e) => setSort(e.target.value)}
            className="sort-select"
          />
        </div>
      </div>
    </div>
  );
};

export default SortRooms;
