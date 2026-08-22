import { supabase } from "../utils/supabase";

export const GetArchitectureImage = (data: any) => {
    const architectureImage = data.architecture
    const architectureImageData = supabase.storage.from('images').getPublicUrl(architectureImage);
    return architectureImageData.data.publicUrl
}