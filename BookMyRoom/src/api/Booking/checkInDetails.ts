import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";
import { NavigateFunction } from "react-router-dom";

export const handleCheckInDetails = async (bookingId:number, navigate: NavigateFunction) => {
    try {
      const { data, error } = await supabase
        .from('Bookings')
        .update({ status: 'checked-in' })
        .eq('id', bookingId);
    
      if (error) throw error;

      toast.success('Booking successfully checked in!');
      navigate('/booking')
      return data;
    } catch (error) {
      toast.error('Failed to check in the booking.');
    }
  };