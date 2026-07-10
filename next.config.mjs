/** @type {import('next').NextConfig} */
// Served at the root of the custom domain rota.xboostapp.io — so no basePath.
// (A project-page subpath would need basePath/assetPrefix; see git history.)
const nextConfig = {
  // Static HTML export → deployable to GitHub Pages.
  output: "export",
  // Emit /privacy/ as privacy/index.html so clean URLs work on a static host.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for the static export.
  images: { unoptimized: true },
};

export default nextConfig;
