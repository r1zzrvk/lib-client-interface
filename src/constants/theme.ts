export const theme = {
  colors: {
    main: '#B3A3A1',
    secondary: '#FFE0DB',
    grey: '#494A4A',
    white: '#FCFFF5',
  },
  fonts: {
    size: {
      regular: {
        xs: 12,
        sm: 14,
        md: 17,
        lg: 20,
      },
      header: {
        xs: 20,
        sm: 24,
        md: 32,
        lg: 40,
      },
    },
    height: {
      regular: {
        xs: 16,
        sm: 20,
        md: 24,
        lg: 24,
      },
      header: {
        xs: 24,
        sm: 28,
        md: 36,
        lg: 44,
      },
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    family: 'Source Sans 3',
  },
  space: {
    xs4: 2,
    xs3: 4,
    xs2: 8,
    xs: 12,
    sm: 16,
    md: 20,
    lg: 30,
    xl: 40,
    xl2: 50,
    xl3: 60,
    xl4: 80,
  },
  breakpoints: {
    null: 0,
    mob: 320,
    tablet: 600,
    sm: 1024,
    md: 1280,
    lg: 1440,
  },
  radiuses: {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10,
    round: 1000,
  },
} as const
