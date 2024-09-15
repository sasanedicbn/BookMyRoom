import { supabase } from "../../supabase/supabaseClient";

export const fetchGuests = async (guests) => {
  let { data: rooms, error } = await supabase
    .from('Guests')
    .insert(guests)
  if (error) {
    console.log('Error fetching rooms:', error);
  }
  return rooms;
};
