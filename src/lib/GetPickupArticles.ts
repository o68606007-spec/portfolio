import { supabase } from "../utils/supabase";

export const GetPickupArticles = async() => {
    const { data, error } = await supabase.from('pickup_articles').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data
}