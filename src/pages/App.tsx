import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container, Typography } from '@mui/material'

import { useSelector } from 'react-redux'

const App:FC = () => {
  const store = useSelector(s => s)

  console.log(store)

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
      >
        Hello Sagas!
      </Typography>
      <Link to="/blog">
        Open blog
      </Link>
    </Container>
  )
}

export default App
