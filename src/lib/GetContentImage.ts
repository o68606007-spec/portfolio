import { supabase } from "../utils/supabase";

export const GetContentImage = (data: any) => {
    const contentUrl = data.content_1
    const contentData = supabase.storage.from('images').getPublicUrl(contentUrl);
    return contentData.data.publicUrl
}