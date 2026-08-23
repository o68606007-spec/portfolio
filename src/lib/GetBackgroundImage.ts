import { supabase } from "../utils/supabase";

export const GetBackgroundImage = (data: any) => {
    let Image = []
    const background = data.background
    const backgroundData = supabase.storage.from('images').getPublicUrl(background);

    const architectureImage = data.architecture
    const architectureImageData = supabase.storage.from('images').getPublicUrl(architectureImage);

    Image = [backgroundData, architectureImageData]

    return Image

}