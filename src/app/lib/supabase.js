import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Supabase URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY; // Supabase public API key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;