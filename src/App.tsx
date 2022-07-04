import { FC } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

import styled from 'styled-components'

import { /* styled, */ ThemeProvider } from '@mui/material/styles'
import { Container, Grid, Typography } from '@mui/material'

import { theme } from './theme/theme'

// eslint-disable-next-line no-shadow
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}))

const Title = styled.h1`
  position: relative;
  font-size: 3em;
  text-align: center;
  color: var(--text-bright);
  margin: 10px;

  &::after {
      position: absolute;
      bottom: 5px;
      left: 0;
      content: '';
      height: 40px;
      width: 0;
      border-bottom: solid 2px #fff;
      transition: width 250ms ease-in-out;
      opacity: 0;
  }

  &:hover::after {
      width: 100%;
      opacity: 1;
      transition: width 250ms ease-in-out;
  }
`

const App:FC = () => (
  <CssBaseline>
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <Typography
            variant="h1"
            component="h1"
          >
            Hello Kitty!
          </Typography>
          <Button
            variant="contained"
          >
            Hello World
          </Button>
          <AccessAlarmIcon />
          <ThreeDRotation />
          <Div>This div&apos;s text looks like that of a button.</Div>
          <Title>Styled component titile</Title>
        </div>
        <Typography
          variant="h2"
          component="h2"
          mt={2}
        >
          h1. Heading
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {/* eslint-disable-next-line no-magic-numbers */}
          {Array.from(Array(6)).map((_, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={index} /* eslint-disable-line react/no-array-index-key */
            >
              <div>xs=2</div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  </CssBaseline>
)

export default App
