import { CircularProgress, Grid, Box } from '@mui/material'
import ProfileCard from './ProfileCard'

export default function ProfileGrid({ profiles = [], loading }) {
  if (loading || !profiles) {
    return (
      <Grid
        container
        justifyContent="center"
      >
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid
        container
        spacing={2}
      >
        {profiles.map(profile => (
          <Grid
            key={profile.id}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <ProfileCard
              src={profile.avatar}
              title={profile.name}
              subSpecialties={profile.job}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
