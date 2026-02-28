// /home/project/lib/supabase.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

/**
 * Retorna um cliente do Supabase ou null se as envs não estiverem definidas.
 * Assim o app continua funcionando com o mock sem quebrar build/deploy.
 */
export function getSupabase(): SupabaseClient | null {
  if (!url || !anon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[supabase] NEXT_PUBLIC_SUPABASE_URL/ANON_KEY ausentes — usando mock.'
      );
    }
    return null;
  }
  return createClient(url, anon);
}