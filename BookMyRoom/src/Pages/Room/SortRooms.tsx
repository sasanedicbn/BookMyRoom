import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { supabase } from '../../supabase/supabaseClient';
import { getRooms } from '../../store/roomsSlice';
import Button from '../../UX/Button';
import Select from '../../UX/Select';
import { filterButtons, sortMapping, sortOptions } from '../../constants/constnsts';

const SortRooms = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('name-asc');

  useEffect(() => {
    const fetchRooms = async () => {
      let query = supabase.from('Bedrooms').select('*');

      query = filter === 'no-discount' 
        ? query.eq('discount', 0) 
        : filter === 'discount' 
        ? query.gt('discount', 0) 
        : query;

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
          {filterButtons.map((btn, index) => (
            <Button
              key={index}
              type={'success'}
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
          />
        </div>
      </div>
    </div>
  );
};

export default SortRooms;
