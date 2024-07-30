import { supabase } from "../superbase/superbaseClient";

export const fetchDiscountedRooms = async () => {
  let { data: rooms, error } = await supabase
    .from('Bedrooms')
    .select('*')
    .not('discount', 'is', null)
    .not('discount', 'eq', 0); 
  if (error) {
    console.log('Error fetching discounted rooms:', error);
  }
  return rooms;
};