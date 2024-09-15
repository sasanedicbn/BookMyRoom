import { supabase } from "../../supabase/supabaseClient";

export const fetchRooms = async (rooms) => {
  let data, error;

  if (rooms) {
    ({ data, error } = await supabase
      .from('Bedrooms')
      .insert(rooms));
  } else {
    ({ data, error } = await supabase
      .from('Bedrooms')
      .select('*'));
  }

  if (error) {
    console.log('Error:', error);
  }

  return data;
};


