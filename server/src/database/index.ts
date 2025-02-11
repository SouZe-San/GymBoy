import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
let supabase: SupabaseClient | undefined;
const supabaseConnection = async () => {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
    if (!supabase) {
      throw new Error("THis Is a bitch");
    }
    console.error("Supabase Connected *_* ");
  } catch (error) {
    console.error("Supabase connection failed !!!");
    console.log("Error from Database connection", error);
  }
};

export { supabase, supabaseConnection };
