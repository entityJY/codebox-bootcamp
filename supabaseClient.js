import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://byxvrcbpcghvylcdnpix.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eHZyY2JwY2dodnlsY2RucGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNzE0MzUsImV4cCI6MjA3NDk0NzQzNX0.i5OkpB7xYCKOA0MZ3cIy6deNj_uMgFedb97vUV0pfJI"
)

export default supabase