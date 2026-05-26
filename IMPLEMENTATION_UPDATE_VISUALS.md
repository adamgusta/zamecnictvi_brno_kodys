# Implementation Plan - Visual Update & Refactoring

This plan outlines the integration of the beautiful Czech-localized visuals for "Zámečnictví Brno - Petr Kodýs", cleaning up defunct English template files, and repairing broken layout features (such as Vite crashes caused by CommonJS `require()` calls in the old template switch).

## User Review Required

> [!IMPORTANT]
> **Complete Migration to Czech Design**
> We recommend fully promoting the new Czech design as the single primary page, deleting the old English components (such as `Elite AK Locksmith` layout). The current English page utilizes CommonJS `require()` which crashes the Vite development server. Removing the "Stará stránka" button and clean-deleting the unused files keeps the codebase pristine.

> [!TIP]
> **Component Relocation**
> Instead of keeping the Czech components nested under `src/components/zamecnictvi/`, we plan to move them to the root `src/components/` folder and delete the nested folder to adhere to industry standard React structure.

## Proposed Changes

### 1. File Cleanup & Relocation (Deletion and Moves)

We will delete the old English components and replace them by moving the premium Czech components from `src/components/zamecnictvi/` to `src/components/`.

* **[DELETE]** Old English Components:
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

* **[MOVE]** Premium Czech Components to `src/components/`:
  * `src/components/zamecnictvi/AboutUs.tsx` -> `src/components/AboutUs.tsx`
  * `src/components/zamecnictvi/BrandFooter.tsx` -> `src/components/BrandFooter.tsx`
  * `src/components/zamecnictvi/Contact.tsx` -> `src/components/Contact.tsx`
  * `src/components/zamecnictvi/FinalCTA.tsx` -> `src/components/FinalCTA.tsx`
  * `src/components/zamecnictvi/Footer.tsx` -> Delete entirely (as `BrandFooter.tsx` is the superior, highly premium footer)
  * `src/components/zamecnictvi/Header.tsx` -> `src/components/Header.tsx`
  * `src/components/zamecnictvi/Hero.tsx` -> `src/components/Hero.tsx`
  * `src/components/zamecnictvi/HowItWorks.tsx` -> `src/components/HowItWorks.tsx`
  * `src/components/zamecnictvi/Reviews.tsx` -> `src/components/Reviews.tsx`
  * `src/components/zamecnictvi/Services.tsx` -> `src/components/Services.tsx`
  * `src/components/zamecnictvi/TrustBar.tsx` -> `src/components/TrustBar.tsx`

---

### 2. Main Entrypoint Integration

#### [MODIFY] [App.tsx](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/src/App.tsx)
* Remove the `currentPage` state toggle, the fixed switch button, and the helper `OldPage()` function with the broken `require()` blocks.
* Convert the default view to import and render all premium components from the newly refactored `src/components/` paths.
* Incorporate all sections sequentially to build a fully featured, stunning production-ready landing page:
  1. `<Header />` (Sticky Top Navigation)
  2. `<Hero />` (Interactive Main Section)
  3. `<TrustBar />` (Trust indicators: 30 min arrival, etc.)
  4. `<Services />` (Detailed breakdown of core solutions)
  5. `<AboutUs />` (Petr Kodýs introduction with experience metrics)
  6. `<HowItWorks />` (The simple 3-step timeline)
  7. `<Reviews />` (Client feedback and ratings)
  8. `<FinalCTA />` (Direct call-to-action block)
  9. `<Contact />` (Inquiry form & coordinates)
  10. `<BrandFooter />` (Comprehensive site footer)

---

## Verification Plan

### Automated Verification
* Run `npm run build` locally to guarantee that the TypeScript compilation and Vite build succeed without errors.
* Monitor standard dev server console output for any unresolved imports or warnings.

### Manual Verification
* Visually check the landing page layout on multiple viewport sizes.
* Verify navigation drawer on mobile and smooth scrolling to anchors (`#sluzby`, `#o-nas`, `#jak-to-funguje`, `#reference`, `#kontakt`).
* Confirm all link paths (e.g. click-to-call phone numbers `tel:+420777818339` and email paths) function perfectly.
