import { supabase } from "../superbase/superbaseClient";

export const fetchRooms = async () => {
    const { data, error } = await supabase
      .from('Bedrooms')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
      return [];
    } 
    return data
  };


  // const handleDelete = async () => {
  //   const { error } = await supabase
  //     .from('Bedrooms')
  //     .delete()
  //     .eq('id', room.id);

  //   if (error) {
  //     console.error('Error deleting row:', error);
  //   } else {
  //     console.log('Room deleted successfully');
  //     const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
  //     if (!fetchError) {
  //       dispatch(getRooms(rooms));
  //     }
  //     dispatch(closeModal());
  //     setOpenMenuModal(false);
  //   }
  // };

  // const handleEditSubmit = async (updatedRoom) => {
  //   console.log('updateRoom', updatedRoom)
  //   const { error } = await supabase
  //     .from('Bedrooms')
  //     .update(updatedRoom)
  //     .eq('id', updatedRoom.id);

  //   if (error) {
  //     console.error('Error updating row:', error);
  //   } else {
  //     console.log('Room updated successfully');
  //     const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
  //     if (!fetchError) {
  //       dispatch(getRooms(rooms));
  //     }
  //     dispatch(closeEditModal());
  //     setOpenMenuModal(false);
  //   }
  // };