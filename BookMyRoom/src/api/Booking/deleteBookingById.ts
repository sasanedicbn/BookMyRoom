import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

type SupabaseResponse = boolean;

export const deleteBookingById = async (bookingId: string, navigate): Promise<SupabaseResponse> => {
  try {
    const { error } = await supabase
      .from("Bookings")
      .delete()
      .eq("id", bookingId);

    if (error) {
      console.error("Error deleting booking:", error.message);
      return false;
    }
    navigate('/booking')
    toast.success('Delete Booking, success!')
    return true;

  } catch (error: any) {
    toast.error("Error! You can't delete booking");
    return false;
  }
};

