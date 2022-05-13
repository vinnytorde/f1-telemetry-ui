import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useTelemetryData } from '../util/telemetry'

export default function Drivers(props) {
  const { sessionId } = useParams()
  const { drivers, getSessionDrivers, addCompareLap } = useTelemetryData()
  useEffect(() => {
    getSessionDrivers(sessionId)
  }, [getSessionDrivers, sessionId])

  const sessionDrivers = drivers[sessionId] || []
  const [lap, setLap] = useState()

  return (
    <div style={{ display: 'flex' }}>
      {sessionDrivers
        .filter(d => d.lapData.length > 0)
        .map(driver => {
          const handleChange = e => {
            addCompareLap({
              sessionId,
              driver: driver.m_driverIndex,
              lapNumber: e.target.value,
            })
            setLap(e.target.value)
          }
          return (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography component="div">DRIVER</Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {driver.m_teamId}
                </Typography>
                <Typography variant="h5" component="div">
                  {driver.m_name}
                </Typography>
              </CardContent>
              <CardActions>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Lap</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lap}
                    label="Lap number"
                    onChange={handleChange}
                  >
                    {driver.lapData.map(lapNumber => {
                      return <MenuItem value={lapNumber}>{lapNumber}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </CardActions>
            </Card>
          )
        })}
    </div>
  )
}
