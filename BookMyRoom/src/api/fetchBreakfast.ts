const fetchBreakfastSetting = async () => {
    try {
      const { data, error } = await supabase
        .from('Settings')
        .select('breakfast');
  
      if (error) {
        console.error('Greška pri dohvaćanju podataka:', error);
        return;
      }
  
      console.log('Podaci:', data);
      return data;
    } catch (error) {
      console.error('Došlo je do greške:', error);
    }
  };
  
  
 
  