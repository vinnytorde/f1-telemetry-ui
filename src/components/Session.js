import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { useNavigate } from 'react-router-dom'

import * as enums from '../util/enums'

export default function Session(props) {
  const navigate = useNavigate()
  const navigateToSession = () => navigate(`/session/${props.id}`)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {enums.sessionType[props.type]}
        </Typography>
        <Typography variant="h5" component="div">
          {enums.tracks[props.track]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {enums.weather[props.weather]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={navigateToSession} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
