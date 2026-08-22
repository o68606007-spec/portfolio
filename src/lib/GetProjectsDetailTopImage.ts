import { supabase } from "../utils/supabase";

export const GetProjectsDetailTopImage = (data: any) => {
    const topImageUrl = data.app_top_image
    const topImageData = supabase.storage.from('images').getPublicUrl(topImageUrl);
    return topImageData.data.publicUrl
}