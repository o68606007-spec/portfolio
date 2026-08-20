import { supabase } from "../utils/supabase";

export const GetPortfolioDataBigFive = () => {
    const data = supabase.storage.from('images').getPublicUrl('portfolio/big5.png');
    return data
}