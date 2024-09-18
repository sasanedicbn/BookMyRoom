import { toast } from "react-toastify";
import { supabase } from "../../supabase/supabaseClient";

export const fetchSettings = async () => { 
    let { data:Settings, error } = await supabase
     .from('Settings')
     .select()
        
    
    if (error) {
        toast.error('Error fetching settings:');
        return 
    }
    return Settings;
}
