import { supabase } from "../utils/supabase";

export const GetProjectsDetailData = async(id: string) => {
    const portfolioDetailsData = await supabase.from('portfolio_details').select('*').eq('id', Number(id));
    if (portfolioDetailsData.error) {
      throw new Error(portfolioDetailsData.error.message);
    }
    return portfolioDetailsData.data
}