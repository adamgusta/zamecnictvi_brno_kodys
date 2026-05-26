# Implementation Plan - Robust Metadata, SEO, and Premium Social Sharing

This plan details the upgrade of the **"Zámečnictví Brno - Petr Kodýs"** website metadata. It replaces the default/bolt.new previews with a premium, tailored **Midnight Gold social preview image**, and establishes a complete, robust, and SEO-optimized metadata structure—covering search engines, social media (Open Graph, Twitter Cards), Apple/iOS mobile devices, and PWAs.

---

## User Review Required

> [!IMPORTANT]
> **Production Website Domain Name**
> Open Graph and Twitter metadata specifications highly recommend **absolute URLs** for the sharing image and canonical link.
> In the proposed tags, we are defaulting to the domain **`https://zamecnictvi-brno-kodys.cz`**.
> * **If your production domain is different, please let me know so I can adjust the URLs in the final implementation.**

> [!TIP]
> **Generated Social Sharing Image (OG Image)**
> To replace the default bolt previews with a premium snapshot matching your brand, we have generated a high-quality sharing image. It aligns perfectly with the **Midnight Gold** theme, displaying Czech branding, core services, and your direct contact phone number.
>
> **Preview of your new Open Graph image:**
> ![Locksmith Social Preview Image](file:///C:/Users/adamh/.gemini/antigravity-ide/brain/7d706110-4896-4e01-8889-ac762cf54e57/locksmith_og_preview_1779801629975.png)
>
> During execution, this image will be optimized and saved to the project's root asset directory as `/public/og-image.png`.

---

## Proposed Changes

We will create a clean and robust metadata foundation at the Vite entry point. In Vite, files placed inside the root `public` directory are automatically served at the domain root (e.g. `/og-image.png`), which is ideal for social crawlers, search engines, and browser icons.

### 1. Root & Public Assets

#### [NEW] [og-image.png](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/public/og-image.png)
* We will copy the generated premium Midnight Gold preview image to `public/og-image.png`.

#### [NEW] [site.webmanifest](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/public/site.webmanifest)
* Create a modern web app manifest that helps mobile platforms recognize the web application, select appropriate branding colors, and display correct home-screen launcher names.
```json
{
  "name": "Zámečnictví Brno - Petr Kodýs",
  "short_name": "Zámečnictví Brno",
  "description": "Profesionální zámečnické služby v Brně. Non-stop pohotovost 24/7.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#020617",
  "theme_color": "#020617",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "32x32",
      "type": "image/x-icon"
    }
  ]
}
```

---

### 2. Vite Entry Point Upgrade

#### [MODIFY] [index.html](file:///c:/Users/adamh/OneDrive/Plocha/Coding/zamecnictvi_brno_kodys/zamecnictvi_brno_kodys/index.html)
We will expand the `<head>` to include a complete set of SEO, Open Graph, Twitter Card, and mobile integration tags:

* **Primary SEO Tags:**
  * Define precise page description and target search queries.
  * Add the standard `<link rel="canonical" href="https://zamecnictvi-brno-kodys.cz/" />` to prevent search ranking dilution.
  * Explicitly tell search crawlers they are welcome to index and follow (`robots` tag).

* **Open Graph (OG) Tags (Facebook, LinkedIn, Slack, WhatsApp):**
  * `og:type` -> `website`
  * `og:title` -> `Zámečnictví Brno - Petr Kodýs | Non-stop Pohotovost 24/7`
  * `og:description` -> `Rychlá a profesionální zámečnická pohotovost v Brně a okolí. Nouzové otevírání dveří, aut a výměna zámků. Příjezd do 30 min. Volejte non-stop!`
  * `og:image` -> `https://zamecnictvi-brno-kodys.cz/og-image.png`
  * `og:url` -> `https://zamecnictvi-brno-kodys.cz/`
  * `og:site_name` -> `Zámečnictví Brno - Petr Kodýs`
  * `og:locale` -> `cs_CZ`

* **Twitter Cards (Twitter/X Previews):**
  * `twitter:card` -> `summary_large_image` (displays a beautiful, large preview of our custom image)
  * `twitter:title` -> `Zámečnictví Brno - Petr Kodýs | Non-stop Pohotovost 24/7`
  * `twitter:description` -> `Zámečnická pohotovost v Brně a okolí. Rychlý příjezd do 30 minut, férové otevírání dveří i aut. Volejte 24/7.`
  * `twitter:image` -> `https://zamecnictvi-brno-kodys.cz/og-image.png`

* **Mobile & UX Customization:**
  * `<meta name="theme-color" content="#020617" />` - Automatically sets the mobile browser address bar color to match our **slate-950 Midnight Gold background** for a native-app appearance.
  * Custom links for standard icons, mobile web app capability, and the manifest.

---

## Verification Plan

### Automated Verification
* Run `npm run build` locally to confirm that the asset-bundler processes the updated `index.html` and public files successfully without compilation errors.
* We can use a standard metadata validator logic locally or compile and inspect the output.

### Manual Verification
* Run `npm run dev` to preview the local environment.
* View page source (`Ctrl + U`) or use browser developer tools to verify that all Open Graph, Twitter, and SEO tags are correctly rendered in the HTML `<head>`.
* Verify that the social sharing image resolves at `/og-image.png` and matches the generated design.
* Test that the manifest loads correctly in the application network tab.
