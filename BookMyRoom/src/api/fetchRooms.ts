import { supabase } from "../superbase/superbaseClient";

export const fetchRooms = async () => {
    const { data, error } = await supabase
      .from('Badrooms')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    } 
    return data
  };
