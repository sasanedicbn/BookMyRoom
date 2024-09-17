import { supabase } from "../../supabase/supabaseClient";

export const fetchRooms = async (rooms) => {
  let data, error;

  if (rooms) {
    const response = await supabase
      .from('Bedrooms')
      .insert(rooms);

    data = response.data;
    error = response.error;

    if (error) {
      console.error('Error inserting rooms:', error);
      return null; // Dodaj povratnu vrednost za slučaj greške
    }
  } else {
    const response = await supabase
      .from('Bedrooms')
      .select('*');

    data = response.data;
    error = response.error;

    if (error) {
      console.error('Error fetching rooms:', error);
      return null; // Dodaj povratnu vrednost za slučaj greške
    }
  }

  return data;
};
