import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";
import { NavigateFunction } from "react-router-dom";

export const handleCheckOutDetails = async (bookingId:string, navigate:NavigateFunction) => {
    try {
      const { data, error } = await supabase
        .from('Bookings')
        .update({ status: 'checked-out' })
        .eq('id', bookingId);
  
      if (error) throw error;
   
      console.log('data iz checkouta', data)

      toast.success('Booking successfully checked-out!');
      navigate('/booking')
      return data;
    } catch (error) {
      toast.error('Failed to check in the booking.');
  
    }
  };
  