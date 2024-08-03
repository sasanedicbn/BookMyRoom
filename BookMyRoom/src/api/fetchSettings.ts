import { supabase } from "../superbase/superbaseClient";

export const fetchSettings = async () => { 
    let { data:Settings, error } = await supabase
     .from('Settings')
     .select()
        
    
    if (error) {
        console.log('Error fetching settings:', error);
        return 
    }
    return Settings;
}
