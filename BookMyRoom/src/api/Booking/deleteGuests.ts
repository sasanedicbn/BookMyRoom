import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

export const deleteGuests = async () => {
  let { data: rooms, error } = await supabase
    .from('Guests')
    .delete()
    
  if (error) {
    toast.error('Error fetching rooms');
  }
  return rooms;
};





