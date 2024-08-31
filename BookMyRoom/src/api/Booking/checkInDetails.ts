import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

export const handleCheckInDetails = async (bookingId:string) => {
    try {
      const { data, error } = await supabase
        .from('Bookings')
        .update({ status: 'checked-in' })
        .eq('id', bookingId);
  
      if (error) throw error;
      
      console.log('Booking checked in:', data);
      toast.success('Booking successfully checked in!');
    } catch (error) {
      toast.error('Failed to check in the booking.');
    }
  };