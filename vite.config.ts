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
  content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.iubenda.com https://*.iubenda.com https://translate.google.com https://*.googleapis.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.iubenda.com https://*.iubenda.com https://translate.google.com https://*.googleapis.com https://*.gstatic.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: https://cdn.iubenda.com https://*.iubenda.com https://translate.google.com https://*.googleapis.com https://*.gstatic.com; connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://analytics.google.com https://cdn.iubenda.com https://*.iubenda.com https://translate.google.com https://*.googleapis.com https://*.gstatic.com; frame-src 'self' https://www.iubenda.com https://embeds.iubenda.com https://*.iubenda.com;"
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
