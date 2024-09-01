import { supabase } from "../../supabase/supabaseClient";

type SupabaseResponse = boolean;

export const deleteBookingById = async (bookingId: string): Promise<SupabaseResponse> => {
  try {
    const { error } = await supabase
      .from("Bookings")
      .delete()
      .eq("id", bookingId);

    if (error) {
      console.error("Error deleting booking:", error.message);
      return false;
    }

    console.log("Booking deleted successfully");
    return true;

  } catch (error: any) {
    console.error("Unexpected error deleting booking:", error.message);
    return false;
  }
};

