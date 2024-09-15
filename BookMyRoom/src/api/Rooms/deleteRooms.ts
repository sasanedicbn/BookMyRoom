import { supabase } from "../../supabase/supabaseClient";

export const deleteRooms = async () => {
  let { data: rooms, error } = await supabase
    .from('Bedrooms')
    .delete()
    
  if (error) {
    console.log('Error fetching rooms:', error);
  }
  return rooms;
};





