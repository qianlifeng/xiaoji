import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://zkuuucadscdqtaptjswq.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprdXV1Y2Fkc2NkcXRhcHRqc3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjAyNTAsImV4cCI6MjAwODg5NjI1MH0.9Gw0o7oli8wnQEA3Oql9bnj_ACyUovxxKY4w_yV248A"
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
