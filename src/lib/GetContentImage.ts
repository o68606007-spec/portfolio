import { supabase } from "../utils/supabase";

export const GetContentImage = (content: any) => {
    const contentUrl = content.image_url
    const contentData = supabase.storage.from('images').getPublicUrl(contentUrl);
    return contentData.data.publicUrl
}