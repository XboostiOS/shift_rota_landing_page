/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → deployable to GitHub Pages (served at the apex of a custom domain).
  output: "export",
  // Emit /privacy/ as privacy/index.html so clean URLs work on a static host.
  trailingSlash: true,
  // next/image optimization needs a server; disable it for the static export.
  images: { unoptimized: true },
};

export default nextConfig;
