import { useEffect, useState } from 'react';
import { supabase } from './superbase/superbaseClient';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase
        .from('Badrooms')
        .select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setRooms(data);
        console.log(rooms)
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Room List</h1>
      <ul>
        {rooms.map(room => {
          console.log(room); 
          return (
           <div>S</div>
          );
        })}
      </ul>
    </div>
  );
};

export default RoomList;
