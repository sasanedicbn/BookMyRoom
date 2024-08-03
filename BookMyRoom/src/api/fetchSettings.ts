import { supabase } from "../superbase/superbaseClient";

export const fetchSettings = async () => { 
    let { data: Settings, error } = await supabase
     .from('Settings')
     .select('*')
        
    
    if (error) {
        console.log('Error fetching settings:', error);
        return 
    }
    
    if (Settings.length === 0) {
        console.log('No settings found');
    } else {
        console.log('Settings fetched:', Settings);
    }
    
    return Settings;
}
