import { supabase } from "../superbase/superbaseClient";

export const fetchSortedRooms = async (sortType) => {
    let { data: rooms, error } = await supabase
      .from('Bedrooms')
      .select('*')
      .order(sortType.column, { ascending: sortType.ascending });
    if (error) {
      console.log('Error fetching sorted rooms:', error);
    }
    return rooms;
  };