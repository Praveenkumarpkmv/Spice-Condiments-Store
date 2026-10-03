// tailwind.js
// Professional Tailwind CSS configuration for SHIFTORA
// Include BEFORE using any Tailwind classes: <script src="tailwind.js"></script>

tailwind.config = {
    theme: {
      extend: {
        colors: {
          // Professional corporate palette
          ink: {
            50:  '#F6F8FB',
            100: '#EBF0F7',
            200: '#D4DEEB',
            300: '#A9BDD3',
            400: '#7593B4',
            500: '#4C6C93',
            600: '#33517A',
            700: '#253D5E',
            800: '#1A2B44',
            900: '#0F1B2D',
            950: '#080F1C',
          },
          emerald: {
            50:  '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        },
        boxShadow: {
          'soft':   '0 2px 8px -2px rgba(15, 27, 45, 0.06), 0 4px 16px -4px rgba(15, 27, 45, 0.04)',
          'card':   '0 4px 24px -4px rgba(15, 27, 45, 0.10), 0 2px 6px -1px rgba(15, 27, 45, 0.04)',
          'lifted': '0 12px 32px -8px rgba(15, 27, 45, 0.16)',
          'brand':  '0 8px 24px -8px rgba(16, 185, 129, 0.45)',
        },
      }
    },
    plugins: [],
  };