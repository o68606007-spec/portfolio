import { supabase } from "../utils/supabase";

export const GetPrivateImage = () => {
    let data = []
    const privateData = supabase.storage.from('images').getPublicUrl('portfolio/running_profile.png');
    const privateMovie = supabase.storage.from('images').getPublicUrl('portfolio/IMG_3283.mov');
    data = [privateData, privateMovie]
    return data
}