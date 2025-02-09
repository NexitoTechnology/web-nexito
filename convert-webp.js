import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = './public/images/';

// Tamaño fijo para imágenes de blog
const BLOG_WIDTH = 800;
const BLOG_HEIGHT = 600;

async function convertImages() {
  try {
    const files = await fs.readdir(inputDir);
    
    const conversions = files
      .filter(file => ['.jpg', '.png', '.jpeg']
        .some(ext => file.toLowerCase().endsWith(ext)))
      .map(async file => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(inputDir, `${path.parse(file).name}.webp`);

        try {
          await sharp(inputPath)
            .resize(BLOG_WIDTH, BLOG_HEIGHT, {
              fit: 'inside', // Mantiene la proporción de aspecto
              withoutEnlargement: true // No agranda imágenes más pequeñas
            })
            .webp({ quality: 80 })
            .toFile(outputPath);
          
          await fs.unlink(inputPath);
          console.log(`Convertida y reemplazada: ${file} por WebP`);
        } catch (err) {
          console.error(`Error convirtiendo ${file}:`, err);
        }
      });

    await Promise.all(conversions);
    console.log('Proceso completado');
  } catch (err) {
    console.error('Error leyendo el directorio:', err);
  }
}

convertImages();