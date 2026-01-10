import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kxlwcahygjcetnoivcgf.supabase.co";
const supabaseAnonKey = "sb_publishable_Gn07Dko2S3ZlwsasHCr2pg_DgeVOVFi";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
