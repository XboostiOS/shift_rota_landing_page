// Mirrors basePath in next.config.mjs — the GitHub Pages project-page prefix,
// applied in production builds only. Needed for raw <img>/<a> tags: unlike
// next/link and next/image, plain HTML tags are NOT auto-prefixed by basePath.
export const bp =
  process.env.NODE_ENV === "production" ? "/shift_rota_landing_page" : "";
