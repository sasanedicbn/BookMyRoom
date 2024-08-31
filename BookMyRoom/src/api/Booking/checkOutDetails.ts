import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

export const handleCheckOutDetails = async (bookingId:string) => {
    try {
      const { data, error } = await supabase
        .from('Bookings')
        .update({ status: 'checked-out' })
        .eq('id', bookingId);
  
      if (error) throw error;
  
      console.log('booking chekcked out', data)
      toast.success('Booking successfully checked-out!');
    } catch (error) {
      toast.error('Failed to check in the booking.');
  
    }
  };
  