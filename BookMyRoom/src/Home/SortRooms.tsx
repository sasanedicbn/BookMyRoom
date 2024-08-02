import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../superbase/superbaseClient';
import { getRooms } from '../store/roomsSlice';

const SortRooms = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('created_at');

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
        'created_at': { column: 'created_at', ascending: true } // Default sort
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

  return (
    <div className="sort-rooms-container">
      <div className="header">
        <h1>Room List</h1>
      </div>
      <div className="controls">
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('no-discount')}>No discount</button>
          <button onClick={() => setFilter('discount')}>With discount</button>
        </div>
        <div className="sort-options">
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="name-asc">Sort by name (a-z)</option>
            <option value="name-desc">Sort by name (z-a)</option>
            <option value="price-lowest">Price (lowest)</option>
            <option value="price-highest">Price (highest)</option>
            <option value="created_at">Default sort</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortRooms;
