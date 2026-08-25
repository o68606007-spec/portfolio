import { supabase } from "../utils/supabase";

export const GetProjectsDetailScreenData = async(id: string) => {
    const portfolioProjectsScreenDetailsData = await supabase.from('portfolio_screens').select('*').eq('portfolio_detail_id', Number(id)).order('id', {ascending: true});
    if (portfolioProjectsScreenDetailsData.error) {
      throw new Error(portfolioProjectsScreenDetailsData.error.message);
    }
    return portfolioProjectsScreenDetailsData.data
}