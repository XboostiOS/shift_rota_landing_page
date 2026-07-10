// GitHub Pages serves files by extension, but Next's file-based OG route exports
// an extensionless `out/opengraph-image` (correct on Node hosts, wrong content-type
// on a static host). Give it a `.png` copy and point the meta tags at it so social
// scrapers get an `image/png` response.
import { readFile, writeFile, copyFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
const src = join(OUT, "opengraph-image");
const dest = join(OUT, "opengraph-image.png");

await copyFile(src, dest);
console.log("postbuild-og: copied opengraph-image → opengraph-image.png");

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

let patched = 0;
for await (const file of htmlFiles(OUT)) {
  const html = await readFile(file, "utf8");
  if (html.includes("/opengraph-image?")) {
    await writeFile(file, html.replaceAll("/opengraph-image?", "/opengraph-image.png?"));
    patched++;
  }
}
console.log(`postbuild-og: rewrote og:image URL in ${patched} HTML file(s)`);
