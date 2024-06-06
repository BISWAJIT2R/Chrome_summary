import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://zimtgqasxoahlmlhbfki.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbXRncWFzeG9haGxtbGhiZmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5OTAwNjAsImV4cCI6MjAzMjU2NjA2MH0._OOcxiQHikE0Ce56dcKIujPQ-utfHOf-isSaAljcZyo"
export const supabase = createClient(supabaseUrl, supabaseKey)

