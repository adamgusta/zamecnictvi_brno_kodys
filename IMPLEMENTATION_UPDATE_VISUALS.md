# Revised Implementation Plan - Visual Masterpiece & Refactoring

This updated plan details the integration of the beautiful Czech-localized visuals for **"Zámečnictví Brno - Petr Kodýs"**, moving all components into a standard folder structure, and elevating the entire design into a unified, **ultra-premium "Midnight Gold" Dark Theme** with custom fonts, glassmorphism, ambient glows, micro-animations, and a new interactive FAQ accordion.

---

## User Review Required

> [!IMPORTANT]
> **Complete Shift to Midnight Gold Theme**
> We are fully upgrading all components (including previously light ones like `Services`, `AboutUs`, and `Reviews`) to a dark, cohesive palette. The canvas will be `slate-950` with glassmorphic cards (`bg-slate-900/40 backdrop-blur-md border border-slate-800/80`) and glowing gold-amber accents.

> [!TIP]
> **Google Fonts & Typography**
> We will import **"Outfit"** from Google Fonts directly in `index.html` as the primary brand font. Its wide geometric letters offer an exceptionally clean, modern, and expensive feel compared to standard system fonts.

> [!NOTE]
> **Component Relocation**
> We will delete the obsolete English templates in `src/components/`, move all premium Czech components from `src/components/zamecnictvi/` directly to `src/components/`, and add a brand new interactive component: `FAQ.tsx`.

---

## Proposed Changes

### 1. Style & Font Foundation

#### [MODIFY] [index.html](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/index.html)
* Add the Google Fonts preconnect and stylesheet links for **Outfit** (weights 300, 400, 500, 600, 700, 800, 900).
* Update `html` class to use default dark scrollbars and select text styles.

#### [MODIFY] [src/styles/index.css](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/src/styles/index.css)
* Set **Outfit** as the primary `font-family`.
* Define core animations and utilities:
  * Custom pulsating gold aura (`@keyframes pulse-gold`) for primary emergency buttons.
  * Soft ambient glowing spots class (`.ambient-glow`).
  * Custom hover shadow classes.

---

### 2. Component Refactoring & Relocation

We will clean up the codebase by removing the old English templates and putting all new Czech components at the root of `src/components/`.

* **[DELETE]** Defunct English files:
  * `src/components/AboutUs.tsx`
  * `src/components/ContactForm.tsx`
  * `src/components/FinalCTA.tsx`
  * `src/components/Footer.tsx`
  * `src/components/Header.tsx`
  * `src/components/HeroSlider.tsx`
  * `src/components/HowItWorks.tsx`
  * `src/components/Reviews.tsx`
  * `src/components/Services.tsx`
  * `src/components/TrustBar.tsx`

* **[MOVE & UPGRADE]** Move Czech components from `src/components/zamecnictvi/` directly to `src/components/` and apply the visual upgrades:
  * `src/components/Header.tsx` (Use elegant glassmorphism, gold underline hovers)
  * `src/components/Hero.tsx` (Add gradient title, pulsating CTA button, ambient glows)
  * `src/components/TrustBar.tsx` (Style with gold highlights, place immediately below Hero)
  * `src/components/Services.tsx` (Rebuild as dark glassmorphic cards with glowing border hovers)
  * `src/components/AboutUs.tsx` (Rebuild as dark, add absolute glowing orb behind photo)
  * `src/components/HowItWorks.tsx` (Add gold gradients to numbered circles and glowing timeline line)
  * `src/components/Reviews.tsx` (Rebuild as dark, stars micro-scaling, glassmorphic quote bubbles)
  * `src/components/FinalCTA.tsx` (Luxury amber glow, double pulsating phone buttons)
  * `src/components/Contact.tsx` (Incorporate glassmorphic contact form inputs, high contrast card)
  * `src/components/BrandFooter.tsx` (Deep slate footer with full corporate details, IČO)

* **[NEW]** Create the interactive FAQ accordion:
  * **[NEW]** [FAQ.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/src/components/FAQ.tsx): High-conversion Czech accordion containing crucial FAQs about arrival times, emergency pricing, and safety guarantees.

---

### 3. App Entrypoint Reorganization

#### [MODIFY] [App.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/src/App.tsx)
* Delete the defunct, broken `OldPage()` and the "Stará stránka" button toggles.
* Statically import all newly refactored components from `src/components/`.
* Assemble the single, unified, masterpiece Czech landing page:
  ```tsx
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-white">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <AboutUs />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Contact />
      <BrandFooter />
    </div>
  );
  ```

---

## Verification Plan

### Automated Verification
* Execute `npm run build` locally to verify that all modules are imported correctly, type checking passes, and Vite bundles the production assets flawlessly.

### Manual Verification
* Run `npm run dev` and navigate through all anchor links in the header.
* Verify responsive design on mobile (mobile drawer header, text wrapping, and spacing adjustments).
* Test the interactive FAQ accordion to ensure items expand and contract with smooth CSS transitions.
* Click phone CTAs to confirm correct `tel:+420777818339` link protocol launch.
