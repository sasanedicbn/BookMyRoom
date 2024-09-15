import { supabase } from "../../supabase/supabaseClient";

export const deleteGuests = async () => {
  let { data: rooms, error } = await supabase
    .from('Guests')
    .delete()
    
  if (error) {
    console.log('Error fetching rooms:', error);
  }
  return rooms;
};





