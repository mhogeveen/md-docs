import { writable, Writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

export const userData: Writable<User | null> = writable(null);