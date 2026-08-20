import { supabase } from "../utils/supabase";

export const GetProfileImage = () => {
    const data = supabase.storage.from('images').getPublicUrl('portfolio/profile.png');
    return data
}