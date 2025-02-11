import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
let supabase: SupabaseClient;

const databaseConnection = async () => {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);

    if (!supabase) {
      throw new Error("THis Is a bitch");
    }
  } catch (error) {
    console.log("Error from Database connection");
  }
};

export { supabase, databaseConnection };
