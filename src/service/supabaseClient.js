import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://zwkhzqfvxbihzpyzjkxb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3a2h6cWZ2eGJpaHpweXpqa3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMTkzNDYsImV4cCI6MjA0NTU5NTM0Nn0.zBXvLKExhrO_uyp5aB53K2LODHOLnALdkcsLLworl60"
);
