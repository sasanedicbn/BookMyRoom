export const findGuestByEmail = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from("Guest")
        .select("id")
        .eq("email", email)
        .single(); 
  
      if (error) {
        console.error("Error finding guest:", error.message);
        return null;
      }
  
      return data ? data.id : null;
    } catch (error: any) {
      console.error("Error! You can't find guest:", error.message);
      return null;
    }
  };