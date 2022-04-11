import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      alignItems: 'center',
      bg:'neutral.200',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
    },
  },
}

const colors = {
  neutral: {
    100: 'hsl(0, 0%, 81%)',
    200: 'hsl(210, 46%, 95%)',
  },
  
  primary: {
    100: 'hsl(263, 55%, 52%)',
    200: 'hsl(217, 19%, 35%)',
    300: 'hsl(219, 29%, 14%)',
    400: 'hsl(0, 0%, 100%)'
  },
}

const fonts = {
  heading: "'Barlow Semi Condensed', sans-serif"
}

const theme = extendTheme({ colors, fonts, styles })

export default theme

