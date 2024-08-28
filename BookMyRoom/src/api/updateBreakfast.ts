import { supabase } from "../supabase/supabaseClient";

export const updateHasBreakfast = async (bookingId, hasBreakfast) => {
    try {
        const { error } = await supabase
            .from('Bookings')
            .update({ hasBreakfast })
            .eq('id', bookingId);
        
        if (error) throw error;

        console.log('Booking updated successfully');
    } catch (error) {
        console.error('Error updating booking:', error.message);
    }
};
