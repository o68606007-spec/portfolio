import { supabase } from "../utils/supabase";

export const GetPortfolioData = async() => {
    const { data, error } = await supabase.from('portfolio').select('id, title, image, describe, portfolio_details(technology)');
    if (error) {
      throw new Error(error.message);
    }
    return data
}