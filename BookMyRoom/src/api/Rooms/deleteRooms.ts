import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

export const deleteRooms = async () => {
  let { data: rooms, error } = await supabase
    .from('Bedrooms')
    .delete()
    
  if (error) {
    toast.error('Error fetching rooms');
  }
  return rooms;
};





