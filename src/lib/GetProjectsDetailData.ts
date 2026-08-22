import { supabase } from "../utils/supabase";

export const GetProjectsDetailData = async(id: string) => {
    const { data, error } = await supabase.from('portfolio_details').select('*').eq('id', Number(id));
    if (error) {
      throw new Error(error.message);
    }
    return data
}