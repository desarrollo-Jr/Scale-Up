import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const carpeta = path.join(
  process.cwd(),
  "public",
  "images",
  "carrusel"
);

await mkdir(carpeta, { recursive: true });

const archivos = await readdir(carpeta, {
  withFileTypes: true,
});

const fotos = archivos
  .filter(
    (archivo) =>
      archivo.isFile() &&
      /\.(jpg|jpeg|png|webp|avif)$/i.test(archivo.name)
  )
  .map((archivo) => archivo.name)
  .sort((a, b) =>
    b.localeCompare(a, "es", { numeric: true })
  );

await writeFile(
  path.join(carpeta, "fotos.json"),
  JSON.stringify(fotos, null, 2),
  "utf8"
);

console.log(
  `Galería Scale Up: ${fotos.length} fotografías detectadas.`
);