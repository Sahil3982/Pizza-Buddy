import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const project_url = process.env.PROJECT_URL
const supabase_key = process.env.SUPABASE_KEY
const supabase = createClient(project_url ,supabase_key)
    