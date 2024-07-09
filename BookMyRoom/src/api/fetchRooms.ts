import { supabase } from "../superbase/superbaseClient";

export const fetchRooms = async () => {
    const { data, error } = await supabase
      .from('Badrooms')
      .select('*');
    
      console.log(data,error)
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setRooms(data);
      console.log(rooms)
    }
  };