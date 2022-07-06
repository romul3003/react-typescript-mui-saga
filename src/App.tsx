import { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import { /* styled, */ ThemeProvider } from '@mui/material/styles'
import { Container, Typography } from '@mui/material'

import { theme } from './theme/theme'

const App:FC = () => (
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          variant="h3"
          component="h1"
        >
          Hello Kitty!
        </Typography>
      </Container>
    </ThemeProvider>
  </CssBaseline>
)

export default App
