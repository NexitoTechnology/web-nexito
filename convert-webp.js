import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/images/';

// Leer archivos del directorio
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error leyendo el directorio:', err);
    return;
  }

  files.forEach(file => {
    // Procesar solo imágenes
    if (['.jpg', '.png', '.jpeg'].some(ext => file.toLowerCase().endsWith(ext))) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(inputDir, `${path.parse(file).name}.webp`);

      sharp(inputPath)
        .webp({ quality: 80 }) // Calidad de compresión
        .toFile(outputPath)
        .then(() => {
          // Borrar el archivo original
          fs.unlinkSync(inputPath);
          console.log(`Convertida y reemplazada: ${file} por WebP`);
        })
        .catch(err => {
          console.error(`Error convirtiendo ${file}:`, err);
        });
    }
  });
});