import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://knlyiqdohqeqyqcvhszd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubHlpcWRvaHFlcXlxY3Zoc3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0NDYwODgsImV4cCI6MjAzNjAyMjA4OH0.9E1U_61eo28tQpSFprggan_x9f0gPyGOEEq-3GfBe5s';
export const supabase = createClient(supabaseUrl, supabaseKey);
