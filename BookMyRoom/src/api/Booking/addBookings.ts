import { supabase } from "../../supabase/supabaseClient";

export const addBookingsData = async (bookings: any[]) => {
  try {
    const { data, error } = await supabase
      .from("Bookings")
      .insert(bookings);

    if (error) {
      console.error("Error adding bookings:", error.message);
      return false;
    }
    return true;

  } catch (error: any) {
    console.error("Error! You can't add bookings");
    return false;
  }
};
