import { createClient } from '@supabase/supabase-js'
import { variables } from '$lib/variables';

const supabaseUrl: string = variables.supabaseURL;
const supabaseAnonKey: string = variables.supabaseANON;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);