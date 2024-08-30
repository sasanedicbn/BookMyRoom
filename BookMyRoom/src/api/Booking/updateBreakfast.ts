import { supabase } from "../../supabase/supabaseClient";
import { SupabaseResponse } from "../../types/types";



export const updateHasBreakfast = async (bookingId: string, hasBreakfast: boolean): Promise<void> => {
    try {
        const { error }: SupabaseResponse = await supabase
            .from('Bookings')
            .update({ hasBreakfast })
            .eq('id', bookingId);
        
        if (error) throw error;

        console.log('Booking updated successfully');
    } catch (error: any) {
        console.error('Error updating booking:', error.message);
    }
};
