import {
  Card, Box, Avatar, CardContent, Typography,
} from '@mui/material'

export default function ProfileCard({ src, title, subSpecialties }) {
  return (
    <Card sx={{ display: 'flex', p: '4px 24px', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar
          alt={title}
          src={src}
        />
      </Box>
      <Box>
        <CardContent>
          <Typography
            component="h5"
            variant="h5"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
          >
            {(subSpecialties && subSpecialties.length > 0) ? subSpecialties : ' – '}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
