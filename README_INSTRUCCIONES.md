# Instrucciones para Actualizar Imágenes en el Proyecto

## Problema Común: Imágenes No Se Actualizan

Cuando modificas imágenes sin cambiar el nombre del archivo, es común que no se reflejen los cambios en el navegador debido al caché de Next.js y del navegador.

## Proceso Documentado para Actualizar Imágenes

### Paso 1: Terminar Servidor

```powershell
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force
```

### Paso 2: Limpiar Caché de Next.js

```powershell
Remove-Item -Recurse -Force .next
```

### Paso 3: Agregar Parámetros de Versión (Temporalmente)

Modificar los archivos de carruseles:

**En `app/components/landing/about.tsx`:**

```tsx
// Cambiar de:
src={images[currentImageIndex].src}

// A:
src={`${images[currentImageIndex].src}?v=${Date.now()}`}
```

**En `app/components/landing/mi-historia/photo-gallery.tsx`:**

```tsx
// Cambiar de:
src={images[currentIndex].src}

// A:
src={`${images[currentIndex].src}?v=${Date.now()}`}
```

### Paso 4: Reiniciar Servidor

```powershell
pnpm dev
```

### Paso 5: Confirmar Cambios

- Abrir `http://localhost:3000` en el navegador
- Navegar a la sección "Sobre mí" para ver el carrusel principal
- Navegar a `/mi-historia` para ver el carrusel de "Mi Historia"
- Verificar que las imágenes actualizadas se ven correctamente

### Paso 6: Quitar Parámetros de Versión (Para Optimización)

Una vez confirmado que las imágenes se ven correctamente, revertir los cambios del Paso 3:

**En `app/components/landing/about.tsx`:**

```tsx
// Cambiar de:
src={`${images[currentImageIndex].src}?v=${Date.now()}`}

// A:
src={images[currentImageIndex].src}
```

**En `app/components/landing/mi-historia/photo-gallery.tsx`:**

```tsx
// Cambiar de:
src={`${images[currentIndex].src}?v=${Date.now()}`}

// A:
src={images[currentIndex].src}
```

## ¿Por Qué Este Proceso?

1. **Caché de Next.js**: La carpeta `.next` almacena versiones optimizadas de las imágenes
2. **Caché del Navegador**: El navegador cachea las imágenes para mejorar el rendimiento
3. **Parámetros de Versión**: `?v=${Date.now()}` fuerza al navegador a descargar la imagen nuevamente
4. **Optimización Final**: Quitar los parámetros permite que el caché funcione normalmente

## Archivos de Carruseles

### Carrusel Principal (`about.tsx`)

- **Ubicación**: `app/components/landing/about.tsx`
- **Imágenes**: 22 imágenes del folder `public/imagenes/carrusel`
- **Descripción**: Aparece arriba del carrusel

### Carrusel de Mi Historia (`photo-gallery.tsx`)

- **Ubicación**: `app/components/landing/mi-historia/photo-gallery.tsx`
- **Imágenes**: 22 imágenes del folder `public/imagenes/mi-historia`
- **Descripción**: Aparece abajo del carrusel

## Sintaxis Moderna de Next.js 13+

Todas las imágenes usan la sintaxis moderna:

```tsx
<Image
  src={images[currentIndex].src}
  alt={`Descripción de la imagen`}
  fill
  style={{ objectFit: "cover" }}
  placeholder="blur"
  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
/>
```

## Solución para Transiciones Grises

### Problema: Gris entre fotos en los carruseles

Durante las transiciones entre imágenes, puede aparecer un color gris debido a la configuración de las animaciones.

### Solución Aplicada:

**1. Transiciones mejoradas con efecto zoom:**

```tsx
<motion.div
  key={currentIndex}
  initial={{ opacity: 0, scale: 1.05 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="absolute inset-0"
>
```

**2. Fondo negro en contenedores:**

```tsx
<div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl bg-black">
```

### Configuración Final:

- **Duración**: `0.6` segundos (más fluido que 1 segundo)
- **Efecto**: Zoom sutil (`scale: 1.05` → `scale: 1` → `scale: 0.95`)
- **Fondo**: `bg-black` para evitar gris durante transiciones
- **Aplicado en**: Ambos carruseles (`about.tsx` y `photo-gallery.tsx`)

## Notas Importantes

- **Siempre usar `pnpm`** en lugar de `npm` para este proyecto
- **El proceso es temporal** - solo agregar parámetros de versión cuando sea necesario
- **Verificar cambios** antes de quitar los parámetros de versión
- **Mantener sintaxis moderna** para evitar warnings de Next.js

## Comandos de Emergencia

Si el servidor no responde o hay problemas:

```powershell
# Matar todos los procesos Node.js
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force

# Limpiar caché de npm/pnpm
npm cache clean --force

# Reinstalar dependencias (si es necesario)
Remove-Item -Recurse -Force node_modules
pnpm install

# Reiniciar servidor
pnpm dev
```

---

**Fecha de creación**: 29 de septiembre de 2025  
**Última actualización**: 29 de septiembre de 2025  
**Proyecto**: Landing Page "Evolución" de Rafa Botella  
**Tecnología**: Next.js 14.1.4, React 18, Tailwind CSS, Framer Motion
