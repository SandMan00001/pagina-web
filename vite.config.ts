import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Plugin per inserire il meta tag CSP solo nella build di produzione
const injectCSP = () => {
  return {
    name: 'inject-csp',
    transformIndexHtml(html: string, ctx: any) {
      if (!ctx.server) {
        const cspMeta = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://analytics.google.com;">`;
        return html.replace('</head>', `  ${cspMeta}\n</head>`);
      }
      return html;
    }
  }
}

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
  }
})
