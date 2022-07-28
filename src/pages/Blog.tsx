import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Typography, Container, Button, Box,
} from '@mui/material'
import { AppState } from '../init/rootReducer'
import { VehiclesState } from '../redux/blog/reducer'

const Blog:FC = () => {
  const blogData = useSelector<AppState, VehiclesState>(store => store.blog)
  const dispatch = useDispatch()

  console.log(blogData)

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
      >
        Blog
      </Typography>
      <Box sx={{ my: 2 }}>
        <Link to="/">Open App</Link>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          dispatch({ type: 'LOAD_SOME_DATA' })
        }}
      >
        Load some data
      </Button>
    </Container>
  )
}

export default Blog
