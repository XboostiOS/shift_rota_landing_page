/** @type {import('next').NextConfig} */
// Served as a GitHub Pages *project* site at /shift_rota_landing_page/, so assets and
// links need that prefix in production. Left empty in dev (next dev serves from root).
const repo = "/shift_rota_landing_page";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Static HTML export → deployable to GitHub Pages.
  output: "export",
  // Emit /privacy/ as privacy/index.html so clean URLs work on a static host.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for the static export.
  images: { unoptimized: true },
  // Project-page subpath prefix (only in the production build).
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
};

export default nextConfig;
