import { supabase } from "../utils/supabase";

export const GetPrivateImage = () => {
    const data = supabase.storage.from('images').getPublicUrl('portfolio/running_profile.png');
    return data
}