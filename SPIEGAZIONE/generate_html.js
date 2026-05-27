const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'spiegazione.md');
const htmlPath = path.join(__dirname, 'visualizza.html');

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Escape backticks and backslashes in markdown text so it can safely sit inside a JS template literal
const escapedMd = mdContent
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\${/g, '\\${');

const htmlTemplate = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documentazione Tecnica - FounDreams</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Marked.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <!-- Mermaid.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800&family=Fira+Code:wght@400;500&display=swap">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #0b0f19;
      color: #e2e8f0;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Outfit', sans-serif;
      color: #ffffff;
    }
    /* Style markdown elements inside output */
    .prose h1 {
      font-size: 2.25rem;
      font-weight: 800;
      margin-top: 2rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 0.5rem;
      background: linear-gradient(90deg, #a5e7ff, #d1bcff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .prose h2 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 0.25rem;
      color: #a5e7ff;
    }
    .prose h3 {
      font-size: 1.35rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
      color: #d1bcff;
    }
    .prose h4 {
      font-size: 1.15rem;
      font-weight: 600;
      margin-top: 1.25rem;
      margin-bottom: 0.5rem;
      color: #b9c7e4;
    }
    .prose p {
      margin-bottom: 1rem;
      line-height: 1.7;
      color: #cbd5e1;
    }
    .prose ul, .prose ol {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
    .prose ol {
      list-style-type: decimal;
    }
    .prose ul {
      list-style-type: disc;
    }
    .prose li {
      margin-bottom: 0.35rem;
      line-height: 1.6;
    }
    .prose code {
      font-family: 'Fira Code', monospace;
      font-size: 0.9em;
      background-color: rgba(255, 255, 255, 0.08);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      color: #f43f5e;
    }
    .prose pre {
      background-color: #0f172a;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      margin-bottom: 1.25rem;
    }
    .prose pre code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      color: #f8fafc;
      font-size: 0.9rem;
    }
    .prose blockquote {
      border-left: 4px solid #a5e7ff;
      padding-left: 1rem;
      margin: 1.5rem 0;
      color: #94a3b8;
      background-color: rgba(165, 231, 255, 0.03);
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      border-radius: 0 8px 8px 0;
    }
    .prose hr {
      border-color: rgba(255, 255, 255, 0.1);
      margin: 2.5rem 0;
    }
    .prose table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1.5rem;
    }
    .prose th, .prose td {
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 0.75rem;
      text-align: left;
    }
    .prose th {
      background-color: rgba(255, 255, 255, 0.05);
      font-weight: 600;
    }
    .prose tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.02);
    }
  </style>
</head>
<body class="flex flex-col min-h-screen">
  <!-- Top cyber bar -->
  <div class="h-1 w-full bg-gradient-to-r from-[#a5e7ff] via-[#d1bcff] to-[#b9c7e4]"></div>
  
  <header class="bg-[#0e1322] border-b border-white/5 py-6 px-6 sticky top-0 z-40 backdrop-blur-lg bg-opacity-95">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a5e7ff] to-[#d1bcff] flex items-center justify-center font-bold text-[#0b0f19]">F</div>
        <div>
          <h1 class="text-xl font-bold tracking-tight text-white m-0">FounDreams Spiegazione</h1>
          <p class="text-xs text-slate-400">Documentazione Tecnica e Architettura</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="inline-flex items-center gap-2 px-3 py-1 bg-[#a5e7ff]/10 text-[#a5e7ff] border border-[#a5e7ff]/30 rounded text-xs font-mono uppercase tracking-wide">
          <span class="w-2 h-2 rounded-full bg-[#a5e7ff] animate-pulse"></span>
          Ready to view
        </span>
      </div>
    </div>
  </header>

  <main class="flex-grow max-w-6xl w-full mx-auto px-6 py-10 flex gap-8">
    <!-- Sidebar Navigation -->
    <aside class="w-64 hidden lg:block shrink-0 sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4 border-r border-white/5">
      <h3 class="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">Indice Contenuti</h3>
      <nav id="toc" class="flex flex-col gap-2 text-sm text-slate-400">
        <!-- populated dynamically -->
      </nav>
    </aside>

    <!-- Document Content Area -->
    <article class="flex-grow min-w-0 prose max-w-none">
      <div id="content" class="bg-[#0e1322] border border-white/5 p-8 rounded-2xl shadow-xl">
        Caricamento in corso...
      </div>
    </article>
  </main>

  <footer class="bg-[#060913] border-t border-white/5 py-8 text-center text-xs text-slate-500">
    <p>FounDreams Technical Guide - Creato per scopi didattici ITS e sviluppo DevOps.</p>
  </footer>

  <script>
    // Initialize Mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      themeVariables: {
        background: '#0e1322',
        primaryColor: '#1e293b',
        primaryTextColor: '#f8fafc',
        lineColor: '#475569',
        signalColor: '#a5e7ff',
        signalTextColor: '#f8fafc',
        actorBkg: '#1e293b',
        actorBorder: '#475569',
        actorTextColor: '#f8fafc',
        stateBkg: '#1e293b',
        stateBorder: '#475569',
        transitionColor: '#a5e7ff',
        transitionLabelColor: '#cbd5e1'
      }
    });

    const markdownText = \`${escapedMd}\`;

    // Render markdown
    document.getElementById('content').innerHTML = marked.parse(markdownText);

    // Build Table of Contents
    const toc = document.getElementById('toc');
    const headings = document.getElementById('content').querySelectorAll('h2, h3');
    headings.forEach((h, index) => {
      const id = 'heading-' + index;
      h.setAttribute('id', id);
      
      const link = document.createElement('a');
      link.setAttribute('href', '#' + id);
      link.className = 'hover:text-[#a5e7ff] transition-colors py-1 truncate ' + (h.tagName === 'H3' ? 'pl-4 text-xs' : 'font-medium');
      link.textContent = h.textContent;
      toc.appendChild(link);
    });

    // Render mermaid diagrams
    const renderMermaid = async () => {
      // Find all pre elements containing code blocks of language mermaid
      const preBlocks = document.querySelectorAll('pre code.language-mermaid');
      for (let i = 0; i < preBlocks.length; i++) {
        const codeBlock = preBlocks[i];
        const preElement = codeBlock.parentElement;
        const rawCode = codeBlock.textContent;

        const container = document.createElement('div');
        container.className = 'mermaid my-6 p-4 rounded-xl border border-white/5 bg-[#080c14] flex justify-center overflow-x-auto';
        const id = 'mermaid-svg-' + i;
        
        try {
          const { svg } = await mermaid.render(id, rawCode);
          container.innerHTML = svg;
          preElement.parentNode.replaceChild(container, preElement);
        } catch (error) {
          console.error('Error rendering diagram:', error);
          const errorContainer = document.createElement('pre');
          errorContainer.className = 'text-red-400 text-xs bg-red-950/20 border border-red-500/20 p-4 rounded-lg';
          errorContainer.textContent = 'Errore rendering diagramma: ' + error.message;
          preElement.parentNode.replaceChild(errorContainer, preElement);
        }
      }
    };

    renderMermaid();
  </script>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlTemplate);
console.log('Successfully generated visualizza.html!');
