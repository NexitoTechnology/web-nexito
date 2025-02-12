import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = './public/images/';
const MAX_SIZE_KB = 100; // 100KB máximo
const BLOG_WIDTH = 800;
const BLOG_HEIGHT = 600;

async function optimizeImage(inputPath, outputPath, initialQuality = 80) {
  let quality = initialQuality;
  let fileSize = MAX_SIZE_KB + 1; // Inicializamos por encima del máximo
  
  while (quality > 10 && fileSize > MAX_SIZE_KB) {
    try {
      await sharp(inputPath)
        .resize(BLOG_WIDTH, BLOG_HEIGHT, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality })
        .toFile(outputPath);

      const stats = await fs.stat(outputPath);
      fileSize = stats.size / 1024; // Convertir a KB

      if (fileSize > MAX_SIZE_KB) {
        quality -= 5; // Reducimos la calidad gradualmente
        console.log(`Imagen demasiado grande (${fileSize.toFixed(2)}KB), reintentando con calidad ${quality}`);
      }
    } catch (err) {
      console.error('Error en la optimización:', err);
      break;
    }
  }

  return fileSize;
}

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
          const finalSize = await optimizeImage(inputPath, outputPath);
          
          if (finalSize <= MAX_SIZE_KB) {
            await fs.unlink(inputPath);
            console.log(`Convertida y optimizada: ${file} -> ${finalSize.toFixed(2)}KB`);
          } else {
            console.warn(`No se pudo reducir ${file} por debajo de ${MAX_SIZE_KB}KB (tamaño final: ${finalSize.toFixed(2)}KB)`);
          }
        } catch (err) {
          console.error(`Error procesando ${file}:`, err);
        }
      });

    await Promise.all(conversions);
    console.log('Proceso completado');
  } catch (err) {
    console.error('Error leyendo el directorio:', err);
  }
}

convertImages();