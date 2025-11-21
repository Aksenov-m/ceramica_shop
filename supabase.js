import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vwdmhquklsqnfbfnejxo.supabase.co'
// В Vite переменные окружения должны начинаться с VITE_
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || import.meta.env.SUPABASE_KEY

// console.log('Supabase config:', { 
//   url: supabaseUrl, 
//   hasKey: !!supabaseKey,
//   keyLength: supabaseKey?.length 
// })

// if (!supabaseKey) {
//   console.warn('⚠️ Supabase key is missing! Check your .env file')
// }

const supabase = createClient(supabaseUrl, supabaseKey || 'dummy-key')

export { supabase }
export default supabase 