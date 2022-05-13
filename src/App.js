import './App.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useEffect } from 'react'
import { useTelemetryData } from './util/telemetry'
import Session from './components/Session'
import SessionDashboard from './components/SessionDashboard'
import Box from '@mui/material/Box'
import { Route, Routes } from 'react-router-dom'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function App() {
  const { sessions, getAvailableSessions } = useTelemetryData()
  useEffect(() => {
    getAvailableSessions()
  }, [getAvailableSessions])

  return (
    <>
      <div style={{ display: 'flex' }}>
        {sessions.map(session => {
          return (
            <div>
              <Box>
                <Session
                  id={session.m_sessionUID}
                  track={session.m_trackId}
                  type={session.m_sessionType}
                  weather={session.m_weather}
                />
              </Box>
            </div>
          )
        })}
      </div>
      <Routes>
        <Route path={'/session/:sessionId'} element={<SessionDashboard />} />
      </Routes>
    </>
  )
}

export default App
