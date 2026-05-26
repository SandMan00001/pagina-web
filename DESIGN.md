---
name: Visione Digitale
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c5c6cd'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8f9097'
  outline-variant: '#44474d'
  surface-tint: '#b9c7e4'
  primary: '#b9c7e4'
  on-primary: '#233148'
  primary-container: '#0a192f'
  on-primary-container: '#74829d'
  inverse-primary: '#515f78'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#d1bcff'
  on-tertiary: '#3c0090'
  tertiary-container: '#200055'
  on-tertiary-container: '#9362ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

Il design system è concepito per proiettare un'immagine di **eccellenza tecnica, sicurezza incrollabile e innovazione visionaria**. L'obiettivo è ispirare fiducia nei servizi di cybersecurity pur mantenendo l'energia creativa necessaria per lo sviluppo web e la gestione dei social media.

Lo stile visivo fonde il **Corporate Moderno** con accenti di **Glassmorphism**. La struttura è rigorosa e pulita, riflettendo la precisione del codice e della protezione dati, mentre l'uso di trasparenze e gradienti vibranti evoca la natura dinamica e trasformativa dei sogni digitali. L'interfaccia deve risultare ariosa, con ampi spazi bianchi (o negativi) che permettono ai contenuti di respirare, trasmettendo un senso di chiarezza e controllo.

## Colors

La palette cromatica è costruita su un contrasto dinamico tra solidità e luce:

- **Primary (Midnight Navy):** Utilizzato per sfondi profondi e superfici principali. Rappresenta la stabilità, l'autorità e la sicurezza informatica.
- **Secondary (Electric Blue):** Un colore d'accento ad alta energia utilizzato per le chiamate all'azione (CTA) e gli elementi interattivi legati alla tecnologia.
- **Tertiary (Vivid Violet):** Utilizzato per elementi legati alla creatività e al social media management, aggiungendo un tocco di ispirazione e calore umano.
- **Neutral (Slate Gray & White):** Una scala di grigi freddi e bianchi puri per garantire una leggibilità impeccabile e una gerarchia pulita.

Il sistema predilige la **modalità scura (Dark Mode)** per enfatizzare l'estetica high-tech, ma deve mantenere un contrasto elevato per l'accessibilità.

## Typography

La tipografia di questo design system utilizza un approccio duale per bilanciare personalità e funzione:

- **Outfit (Headlines):** Una scelta geometrica e moderna che comunica innovazione. Le intestazioni devono avere un peso deciso e una spaziatura leggermente ridotta per un impatto visivo massimo.
- **Inter (Body & UI):** Utilizzato per la sua leggibilità eccezionale e il tono sistematico. È il carattere ideale per i dati complessi della cybersecurity e per la narrazione fluida dei blog.

Le gerarchie devono essere rispettate rigorosamente: i titoli grandi sono riservati ai messaggi ispirazionali, mentre il corpo del testo deve mantenere un'altezza di linea generosa (1.6) per favorire la scansione visiva.

## Layout & Spacing

Il layout si basa su una **griglia fluida a 12 colonne** per desktop, che si riduce a 4 colonne su mobile. La filosofia di spaziatura segue un ritmo di 8px, garantendo proporzioni armoniose in ogni componente.

- **Desktop:** Margini laterali ampi (64px) per focalizzare l'attenzione al centro.
- **Tablet:** Transizione a 8 colonne con gutters da 24px.
- **Mobile:** Margini da 16px per massimizzare lo spazio utile sullo schermo.

L'uso dello spazio deve essere "generoso": non temere il vuoto. Gli elementi correlati devono essere raggruppati chiaramente, mentre le sezioni principali devono essere separate da spaziature `xl` (80px) per creare una narrazione visiva strutturata.

## Elevation & Depth

La gerarchia visiva è definita attraverso la stratificazione tonale e il **Glassmorphism**:

1.  **Livello Base (Sfondo):** Deep Navy solido.
2.  **Livello Superficie (Cards/Contenitori):** Utilizzare un effetto vetro smerigliato con una opacità del 10-15% del colore neutro, un `backdrop-blur` di 12px e un bordo sottile (1px) semi-transparente per definire i confini senza appesantire.
3.  **Livello Interattivo (Hover/Modali):** Elevazione tramite ombre ambientali diffuse, leggermente tinte di blu elettrico per simulare una luminescenza digitale piuttosto che un'ombra fisica.

Questo approccio crea un senso di profondità tecnologica, come se l'interfaccia fosse composta da pannelli di luce fluttuanti.

## Shapes

Il linguaggio delle forme in questo design system è **morbido ma strutturato**. L'impostazione `2 (Rounded)` fornisce un raggio di curvatura di 0.5rem (8px) per i componenti standard, come input e piccole card.

- **Bottoni e Badge:** Possono evolvere verso forme più arrotondate (fino a 1rem) per apparire più amichevoli e invitanti al tocco.
- **Contenitori Grandi:** Utilizzare raggi di curvatura di 1.5rem (24px) per ammorbidire le sezioni più ampie del sito.

I bordi devono rimanere sempre nitidi e sottili, evitando tratti pesanti che potrebbero compromettere l'estetica pulita.

## Components

I componenti sono progettati per essere ad alto impatto e tecnicamente impeccabili:

- **Buttons:** Le CTA primarie utilizzano un gradiente lineare da Electric Blue a Violet. Effetto hover con leggera espansione e bagliore esterno. Le CTA secondarie sono "ghost buttons" con bordo sottile.
- **Cards:** Sfruttano l'effetto vetro (glassmorphism) descritto nella sezione Elevation. Il titolo della card deve sempre spiccare in Outfit Bold.
- **Input Fields:** Sfondo scuro con bordo grigio chiaro. Al focus, il bordo diventa Electric Blue con una sottile luminescenza.
- **Chips:** Piccoli elementi arrotondati per taggare tecnologie o categorizzazione social, con colori pastello desaturati su sfondo scuro.
- **Cyber-Indicators:** Indicatori di stato (es. "Secure", "Live") che utilizzano icone minimali e colori neon per comunicare istantaneamente lo stato del sistema.

Ogni componente deve rispondere all'interazione con transizioni fluide (200-300ms), rafforzando la sensazione di un prodotto digitale reattivo e moderno.