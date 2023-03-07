/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_KEY : number
}

interface ImportMeta{
    readonly env: ImportMeta
}
