/**
 * Script mejorado para la optimización de imágenes
 * 
 * Este script:
 * 1. Convierte imágenes a formato WebP
 * 2. Optimiza la calidad
 * 3. Genera múltiples tamaños para responder a diferentes dispositivos
 * 4. Mantiene el aspect ratio
 * 5. Procesa imágenes en lotes para evitar sobrecarga de memoria
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createPool } from 'workerpool';

// Configuración
const config = {
  inputDir: './public/images/',
  outputDir: './public/images_optimized/',
  // Calidad de WebP (0-100)
  quality: {
    default: 80,
    lossless: false
  },
  // Tamaños a generar
  sizes: [
    { name: 'sm', width: 640 },
    { name: 'md', width: 768 },
    { name: 'lg', width: 1024 },
    { name: 'xl', width: 1280 },
    { name: '2xl', width: 1536 }
  ],
  // Tamaños específicos para imágenes de blog
  blogSizes: {
    width: 800,
    height: 450,
    thumbnail: {
      width: 400,
      height: 225
    }
  },
  // Extensiones a procesar
  extensions: ['.jpg', '.jpeg', '.png', '.webp', '.avif'],
  // Número máximo de imágenes a procesar en paralelo
  concurrency: 4,
  // Tiempo de espera entre lotes (ms)
  batchDelay: 500,
  // Evitar reoptimización si ya existe
  skipExisting: true
};

// Crear directorio de salida si no existe
async function ensureOutputDirs() {
  try {
    // Crear directorio principal
    await fs.mkdir(config.outputDir, { recursive: true });
    
    // Crear directorios para cada tamaño
    for (const size of config.sizes) {
      await fs.mkdir(path.join(config.outputDir, size.name), { recursive: true });
    }
    
    // Crear directorio para blog
    await fs.mkdir(path.join(config.outputDir, 'blog'), { recursive: true });
    await fs.mkdir(path.join(config.outputDir, 'blog', 'thumbs'), { recursive: true });
    
    console.log('✅ Directorios de salida creados');
  } catch (err) {
    console.error('Error al crear directorios:', err.message);
    throw err;
  }
}

// Función para determinar si una ruta es una imagen a procesar
function isProcessableImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return config.extensions.includes(ext);
}

// Detectar si la imagen es para el blog (por convención de nombre o ruta)
function isBlogImage(filePath) {
  return filePath.includes('/blog/') || filePath.includes('blog-');
}

// Función de espera
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Procesar una imagen individual
async function processImage(inputPath, isBlog = false) {
  try {
    const fileName = path.basename(inputPath);
    const fileNameWithoutExt = path.basename(inputPath, path.extname(inputPath));
    
    // Obtener metadatos de la imagen original
    const metadata = await sharp(inputPath).metadata();
    
    // Verificar tamaño del archivo original para estadísticas
    const stats = await fs.stat(inputPath);
    const originalSizeKB = stats.size / 1024;
    
    console.log(`\nProcesando: ${fileName}`);
    console.log(`Dimensiones originales: ${metadata.width}x${metadata.height}`);
    console.log(`Tamaño original: ${originalSizeKB.toFixed(2)}KB`);
    
    // Si es una imagen de blog, procesarla con dimensiones específicas
    if (isBlog) {
      const outputPath = path.join(config.outputDir, 'blog', `${fileNameWithoutExt}.webp`);
      const thumbPath = path.join(config.outputDir, 'blog', 'thumbs', `${fileNameWithoutExt}.webp`);
      
      // Verificar si ya existe (para evitar reprocesamiento)
      if (config.skipExisting) {
        try {
          await fs.access(outputPath);
          await fs.access(thumbPath);
          console.log(`Imagen de blog ya procesada: ${fileName}`);
          return {
            file: fileName,
            skipped: true
          };
        } catch (err) {
          // No existe, continuar con el procesamiento
        }
      }
      
      // Procesar imagen principal de blog
      await sharp(inputPath)
        .resize({
          width: config.blogSizes.width,
          height: config.blogSizes.height,
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: config.quality.default,
          lossless: config.quality.lossless
        })
        .toFile(outputPath);
        
      // Procesar miniatura
      await sharp(inputPath)
        .resize({
          width: config.blogSizes.thumbnail.width,
          height: config.blogSizes.thumbnail.height,
          fit: 'cover',
          position: 'center'
        })
        .webp({
          quality: config.quality.default,
          lossless: config.quality.lossless
        })
        .toFile(thumbPath);
        
      console.log(`✅ Imagen de blog optimizada: ${fileName}`);
      
      return {
        file: fileName,
        originalSize: originalSizeKB,
        optimized: true
      };
    }
    
    // Para imágenes regulares, procesar en todos los tamaños configurados
    const results = [];
    
    for (const size of config.sizes) {
      const outputPath = path.join(config.outputDir, size.name, `${fileNameWithoutExt}.webp`);
      
      // Verificar si ya existe (para evitar reprocesamiento)
      if (config.skipExisting) {
        try {
          await fs.access(outputPath);
          console.log(`Tamaño ${size.name} ya procesado para: ${fileName}`);
          continue;
        } catch (err) {
          // No existe, continuar con el procesamiento
        }
      }
      
      // Calcular altura proporcional
      const resizedHeight = Math.round((size.width / metadata.width) * metadata.height);
      
      // Redimensionar y optimizar
      await sharp(inputPath)
        .resize({
          width: size.width,
          height: resizedHeight,
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({
          quality: config.quality.default,
          lossless: config.quality.lossless
        })
        .toFile(outputPath);
        
      results.push({
        size: size.name,
        width: size.width,
        height: resizedHeight
      });
    }
    
    console.log(`✅ Imagen optimizada en ${results.length} tamaños: ${fileName}`);
    
    return {
      file: fileName,
      originalSize: originalSizeKB,
      sizes: results,
      optimized: true
    };
  } catch (err) {
    console.error(`❌ Error procesando ${inputPath}:`, err.message);
    return {
      file: path.basename(inputPath),
      error: err.message
    };
  }
}

// Procesar todas las imágenes
async function processAllImages() {
  try {
    console.log('🚀 Iniciando optimización de imágenes...');
    
    // Asegurar que existan los directorios de salida
    await ensureOutputDirs();
    
    // Obtener lista de todos los archivos recursivamente
    const getAllFiles = async (dir) => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      const files = await Promise.all(
        entries.map(async (entry) => {
          const fullPath = path.join(dir, entry.name);
          return entry.isDirectory() ? getAllFiles(fullPath) : fullPath;
        })
      );
      
      return files.flat();
    };
    
    const allFiles = await getAllFiles(config.inputDir);
    const imagesToProcess = allFiles.filter(isProcessableImage);
    
    console.log(`📊 Encontradas ${imagesToProcess.length} imágenes para procesar`);
    
    // Crear un pool de trabajadores para procesamiento en paralelo
    const pool = createPool(config.concurrency);
    
    // Procesar en lotes para evitar sobrecarga
    const batchSize = 10;
    const results = [];
    
    for (let i = 0; i < imagesToProcess.length; i += batchSize) {
      const batch = imagesToProcess.slice(i, i + batchSize);
      console.log(`\nProcesando lote ${Math.floor(i/batchSize) + 1} de ${Math.ceil(imagesToProcess.length/batchSize)}`);
      
      const batchPromises = batch.map(imagePath => {
        const isBlog = isBlogImage(imagePath);
        return pool.exec(processImage, [imagePath, isBlog]);
      });
      
      const batchResults = await Promise.allSettled(batchPromises);
      
      // Agregar resultados
      batchResults.forEach(result => {
        if (result.status === 'fulfilled') {
          results.push(result.value);
        } else {
          console.error(`❌ Error en procesamiento: ${result.reason}`);
        }
      });
      
      // Esperar un poco entre lotes para evitar saturación
      if (i + batchSize < imagesToProcess.length) {
        await wait(config.batchDelay);
      }
    }
    
    // Cerrar pool
    pool.terminate();
    
    // Estadísticas finales
    const optimizedCount = results.filter(r => r.optimized).length;
    const skippedCount = results.filter(r => r.skipped).length;
    const errorCount = results.filter(r => r.error).length;
    
    console.log('\n🎉 Proceso completado');
    console.log(`📊 Estadísticas:
- Total de imágenes procesadas: ${results.length}
- Optimizadas correctamente: ${optimizedCount}
- Saltadas (ya existían): ${skippedCount}
- Errores: ${errorCount}
    `);
    
    // Opcionalmente, guardar log de resultados
    await fs.writeFile(
      path.join(config.outputDir, 'optimization-log.json'),
      JSON.stringify({
        timestamp: new Date().toISOString(),
        config,
        results
      }, null, 2)
    );
    
  } catch (err) {
    console.error('❌ Error en el proceso principal:', err.message);
    process.exit(1);
  }
}

// Ejecutar el proceso
processAllImages();