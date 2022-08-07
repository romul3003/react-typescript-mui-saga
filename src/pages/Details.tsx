import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import {
  Container, Typography, Box, CircularProgress, Link,
} from '@mui/material'
import { AppState } from '../init/rootReducer'
import { CharacterDetailsState } from '../redux/characterDetails/reducer'
import { selectCharacterDetails } from '../redux/characterDetails/selectors'

const Details: FC = () => {
  const { loading, data: character } = useSelector<AppState, CharacterDetailsState>(selectCharacterDetails)

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container>
      <Typography
        variant="h3"
        component="h1"
        sx={{ my: 4 }}
      >
        {`Name: ${character?.name ?? 'Details page'}`}
      </Typography>
      <Typography component="p">
        {`Birth: ${character?.birth_year ?? ''}`}
      </Typography>
      <Typography component="p">
        {`Birth: ${character?.birth_year ?? ''}`}
      </Typography>
      <Typography component="p">
        {`Skin color: ${character?.skin_color ?? ''}`}
      </Typography>
      <Typography component="p">
        {`Skin color: ${character?.mass ?? ''}`}
      </Typography>
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        mt={4}
        display="inline-flex"
      >
        Back to Characters List
      </Link>
    </Container>
  )
}

export default Details
