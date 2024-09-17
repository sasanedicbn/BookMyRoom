import { supabase } from "../../supabase/supabaseClient";

export const fetchRooms = async (rooms) => {
  let data, error;

  console.log('rooms koji je proslijeden prvi', rooms)
  if (rooms) {
    const response = await supabase
      .from('Bedrooms')
      .insert(rooms);

    data = response.data;
    error = response.error;

    if (error) {
      console.error('Error inserting rooms:', error);
      return null; 
    }
  } else {
    const response = await supabase
      .from('Bedrooms')
      .select('*');

    data = response.data;
    error = response.error;

    if (error) {
      console.error('Error fetching rooms:', error);
      return null;
    }
  }

  console.log('finnall result rooms',data)
  return data;
  
};
