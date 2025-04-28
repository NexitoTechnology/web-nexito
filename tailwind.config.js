/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // Excluir directorios que no necesitan escaneo para CSS
    '!node_modules/**/*',
    '!.astro/**/*',
    '!dist/**/*'
  ],
  
  // Modo JIT (Just-In-Time) para optimizar el proceso de compilación
  mode: 'jit',
  
  theme: {
    extend: {
      // Colores específicos de la marca
      colors: {
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        'secondary': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        'nexito-blue': '#0b1120',
      },
      
      // Fuentes personalizadas
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      
      // Tipografía
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Espaciado
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Bordes
      borderRadius: {
        '4xl': '2rem',
      },
      
      // Sombras personalizadas
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 7px 30px -10px rgba(150,170,180,0.3)',
      },
      
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      },
      
      // Fondos y efectos especiales
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-white': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%23FFFFFF\' fill-opacity=\'0.05\' d=\'M0 0h1v20H0V0zm10 0h1v20h-1V0z\'/%3E%3Cpath fill=\'%23FFFFFF\' fill-opacity=\'0.05\' d=\'M0 0h20v1H0V0zm0 10h20v1H0v-1z\'/%3E%3C/svg%3E")',
      }
    },
  },
  
  // Plugins
  plugins: [
    require('@tailwindcss/typography'),
    // Plugin personalizado para estilos específicos del sitio
    function({ addComponents, theme }) {
      addComponents({
        '.nexito-container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1536px',
          },
        },
      })
    },
  ],
  
  // Optimizaciones para producción
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    options: {
      safelist: [
        // Clases que no deben eliminarse aunque no se detecten en el código
        'text-primary-500',
        'bg-primary-500',
        'border-primary-500',
        /^h-/,
        /^w-/,
        /^text-/,
        /^bg-/,
        /^border-/,
        /^hover:/,
        /^focus:/
      ],
    },
  },
  
  // Optimización de la caché para desarrollo
  future: {
    hoverOnlyWhenSupported: true,
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
  
  // Reducir el tamaño del CSS generado
  variants: {
    extend: {
      // Limitar variantes para reducir el tamaño del CSS
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
};