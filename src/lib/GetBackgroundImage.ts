import { supabase } from "../utils/supabase";

export const GetBackgroundImage = (data: any) => {
    const background = data.background
    const backgroundData = supabase.storage.from('images').getPublicUrl(background);
    return backgroundData.data.publicUrl
}