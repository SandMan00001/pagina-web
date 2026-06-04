import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Inserisce il meta tag CSP solo in produzione
const injectCSP = () => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml(html: string) {
    const cspMeta = `
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://analytics.google.com;"
/>`.trim()

    return html.replace('</head>', `  ${cspMeta}\n</head>`)
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    injectCSP(),
  ],
  base: '/',
  build: {
    sourcemap: false,
  },
})
