/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DATABASE_URL: string
  readonly SUPABASE_URL: string
  readonly SUPABASE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
