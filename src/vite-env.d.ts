/// <reference types="vite/client" />

interface TurnstileStatic {
  render: (container: HTMLElement | string, params: Record<string, unknown>) => string | undefined
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
}

interface Window {
  turnstile?: TurnstileStatic
}

interface ImportMetaEnv {
  readonly VITE_WAITLIST_API_URL?: string
  readonly VITE_TURNSTILE_SITE_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
