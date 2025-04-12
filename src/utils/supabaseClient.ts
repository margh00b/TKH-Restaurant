import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const customFetch = (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(input.toString(), {
    ...init,
    cache: "no-store",
  });
};
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: customFetch,
  },
});
