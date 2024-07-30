import { useDispatch } from 'react-redux';
import { getRooms } from '../store/roomsSlice';
import { fetchDiscountedRooms } from '../api/fetchDiscountedRooms';
import { fetchNonDiscountedRooms } from '../api/fetchNonDiscountRooms';
import { fetchSortedRooms } from '../api/fetchSortedRooms';
import { fetchRooms as fetchAllRooms  } from '../api/fetchRooms';

const SortRooms = () => {
  const dispatch = useDispatch();

  const handleFilter = async (filterType) => {
    let filteredRooms;
    if (filterType === 'all') {
      filteredRooms = await fetchAllRooms();
    } else if (filterType === 'discount') {
      filteredRooms = await fetchDiscountedRooms();
    } else {
      filteredRooms = await fetchNonDiscountedRooms();
    }
    dispatch(getRooms(filteredRooms));
  };

  // agregacija podataka

  const handleSort = async (sortType) => {
    console.log('handleSortValue', sortType)
    const sortMapping = {
      'name-asc': { column: 'name', ascending: true },
      'name-desc': { column: 'name', ascending: false },
      'price-lowest': { column: 'regularPrice', ascending: true },
      'price-highest': { column: 'regularPrice', ascending: false }
    };
    const sortedRooms = await fetchSortedRooms(sortMapping[sortType]);
    dispatch(getRooms(sortedRooms));
  };

  return (
    <div className="sort-rooms-container">
      <div className="header">
        <h1>Room List</h1>
      </div>
      <div className="controls">
        <div className="filter-buttons">
          <button onClick={() => handleFilter('all')}>All</button>
          <button onClick={() => handleFilter('no-discount')}>No discount</button>
          <button onClick={() => handleFilter('discount')}>With discount</button>
        </div>
        <div className="sort-options">
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="name-asc">Sort by name (a-z)</option>
            <option value="name-desc">Sort by name (z-a)</option>
            <option value="price-lowest">Price (lowest)</option>
            <option value="price-highest">Price (highest)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortRooms;
