import { supabase } from "../superbase/superbaseClient";

export const fetchRooms = async () => {
  let { data: rooms, error } = await supabase
    .from('Bedrooms')
    .select('*');
  if (error) {
    console.log('Error fetching rooms:', error);
  }
  return rooms;
};





