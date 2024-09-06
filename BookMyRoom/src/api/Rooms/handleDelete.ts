import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";
import { getRooms } from "../../store/roomsSlice";

export const handleDelete = async (room:any, dispatch:any,) => {
    try {
      const { error: bookingsError } = await supabase
        .from('Bookings')
        .delete()
        .eq('cabinId', room.id);
  
      if (bookingsError) {
        console.error('Error deleting bookings:', bookingsError);
        return;
      }
  
      const { error: roomError } = await supabase
        .from('Bedrooms')
        .delete()
        .eq('id', room.id);
  
      if (roomError) {
        toast.error('You can not delete room!')

      } else {
        toast.success('Room deleted successfully!')
        const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
        if (!fetchError) {
          dispatch(getRooms(rooms));
        }
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };
  