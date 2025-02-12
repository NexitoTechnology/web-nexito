import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = './public/images/';
const outputDir = './public/images_new/';
const MAX_SIZE_KB = 100;
const BLOG_WIDTH = 800;
const BLOG_HEIGHT = 600;

// Función para esperar un tiempo determinado
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function processImages() {
  try {
    console.log('Iniciando proceso...');

    // Creamos la carpeta de salida si no existe
    await fs.mkdir(outputDir, { recursive: true });

    // Obtenemos la lista de archivos WebP
    const files = await fs.readdir(inputDir);
    const webpFiles = files.filter(file => file.toLowerCase().endsWith('.webp'));
    console.log(`Encontrados ${webpFiles.length} archivos WebP`);

    for (const file of webpFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);

      try {
        // Obtenemos metadatos y tamaño del archivo original
        const metadata = await sharp(inputPath).metadata();
        const stats = await fs.stat(inputPath);
        const sizeKB = stats.size / 1024;

        console.log(`\nProcesando: ${file}`);
        console.log(`Dimensiones actuales: ${metadata.width}x${metadata.height}`);
        console.log(`Tamaño actual: ${sizeKB.toFixed(2)}KB`);

        // Si la imagen supera el tamaño máximo o no tiene las dimensiones deseadas, se procesa
        if (sizeKB > MAX_SIZE_KB || metadata.width !== BLOG_WIDTH || metadata.height !== BLOG_HEIGHT) {
          const imageBuffer = await sharp(inputPath)
            .resize(BLOG_WIDTH, BLOG_HEIGHT, { fit: 'fill' })
            .webp({
              quality: Math.min(Math.floor(MAX_SIZE_KB / sizeKB * 80), 80),
              effort: 6
            })
            .toBuffer();

          await fs.writeFile(outputPath, imageBuffer);
          console.log(`Optimizado y guardado: ${file}`);
        } else {
          // Si ya está optimizada, simplemente la copiamos a la carpeta nueva
          await fs.copyFile(inputPath, outputPath);
          console.log(`Archivo ya optimizado, copiado: ${file}`);
        }
      } catch (err) {
        console.error(`Error procesando ${file}:`, err.message);
      }

      // Esperamos un segundo entre archivos (opcional)
      await wait(1000);
    }

    console.log('\nProceso completado');
  } catch (err) {
    console.error('Error en el proceso:', err.message);
  }
}

processImages();
