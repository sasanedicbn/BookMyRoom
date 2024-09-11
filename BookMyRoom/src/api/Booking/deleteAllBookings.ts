import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

type SupabaseResponse = boolean;

export const deleteAllBookings = async (): Promise<SupabaseResponse> => {
  try {
    const { error } = await supabase
      .from("Bookings")
      .delete(); 

    if (error) {
      console.error("Error deleting bookings:", error.message);
      return false;
    }

    toast.success('All bookings have been deleted successfully!');
    return true;

  } catch (error: any) {
    toast.error("Error! You can't delete all bookings");
    return false;
  }
};
