import { FC } from 'react'
import { Container, Typography } from '@mui/material'

import CharactersTable from '../components/CharactersTable/CharactersTable'

const App:FC = () => (
  <Container>
    <Typography
      variant="h3"
      component="h1"
      sx={{ my: 4 }}
    >
      Hello Sagas!
    </Typography>

    <CharactersTable />
  </Container>
)

export default App
