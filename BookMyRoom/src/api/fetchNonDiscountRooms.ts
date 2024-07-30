import { supabase } from "../superbase/superbaseClient";

export const fetchNonDiscountedRooms = async () => {
    let { data: rooms, error } = await supabase
      .from('Bedrooms')
      .select('*')
      .or('discount.is.null,discount.eq.0'); 
    if (error) {
      console.log('Error fetching non-discounted rooms:', error);
    }
    return rooms;
  };