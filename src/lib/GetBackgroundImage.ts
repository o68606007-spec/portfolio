import { supabase } from "../utils/supabase";

export const GetBackgroundImage = (data: any) => {
    let Image = []

    const architectureImage = data.architecture
    const architectureImageData = supabase.storage.from('images').getPublicUrl(architectureImage);

    const tblImage = data.tbl_image
    const tblImageData =tblImage ? supabase.storage.from('images').getPublicUrl(tblImage) : null;

    Image = [architectureImageData, tblImageData]

    return Image

}