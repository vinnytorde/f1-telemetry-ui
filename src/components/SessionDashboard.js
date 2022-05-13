import Drivers from './Drivers'
import * as options from '../graphs/options'
import { Line } from 'react-chartjs-2'
import { useTelemetryData } from '../util/telemetry'
import { useParams } from 'react-router-dom'

export default function SessionDashboard(props) {
  const { sessionId } = useParams()
  const { compareLaps, sessions } = useTelemetryData()
  const session = sessions.find(s => s.m_sessionUID === sessionId)
  const tracklength = Math.trunc(session?.m_trackLength)

  const speedDatasets = compareLaps.map(lap => {
    return {
      label: `${lap.driverIndex} - lap ${lap.lapNumber}`,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: lap.telemetry.map(ldata => {
        return {
          x: Math.trunc(ldata.m_lapDistance),
          y: ldata.m_speed,
        }
      }),
    }
  })

  const throttleDatasets = compareLaps.map(lap => {
    return {
      label: `${lap.driverIndex} - lap ${lap.lapNumber}`,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: lap.telemetry.map(ldata => {
        return {
          x: Math.trunc(ldata.m_lapDistance),
          y: ldata.m_throttle,
        }
      }),
    }
  })

  const brakeDatasets = compareLaps.map(lap => {
    return {
      label: `${lap.driverIndex} - lap ${lap.lapNumber}`,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: lap.telemetry.map(ldata => {
        return {
          x: Math.trunc(ldata.m_lapDistance),
          y: ldata.m_brake,
        }
      }),
    }
  })

  const timeDeltaDatasets = compareLaps.map((lap, _, laps) => {
    const firstToCompare = laps[0]
    return {
      label: `${lap.driverIndex} - lap ${lap.lapNumber}`,
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: lap.lapTime.map((ldata, index) => {
        return {
          x: ldata.x,
          y: ldata.y - firstToCompare.lapTime[index]?.y,
        }
      }),
    }
  })

  const speedData = {
    labels: new Array(tracklength + 25 || 0).fill('').map((_, i) => i),
    datasets: speedDatasets,
  }

  const throttleData = {
    labels: new Array(tracklength + 25 || 0).fill('').map((_, i) => i),
    datasets: throttleDatasets,
  }

  const brakeData = {
    labels: new Array(tracklength + 25 || 0).fill('').map((_, i) => i),
    datasets: brakeDatasets,
  }

  const timeDeltaData = {
    labels: new Array(tracklength + 25 || 0).fill('').map((_, i) => i),
    datasets: timeDeltaDatasets,
  }

  return (
    <div>
      <Drivers />
      <Line height={50} options={options.speedOptions} data={speedData} />
      <Line
        height={50}
        options={options.throttleAndBrakeOptions}
        data={throttleData}
      />
      <Line
        height={50}
        options={options.throttleAndBrakeOptions}
        data={brakeData}
      />
      <Line
        height={50}
        options={options.timeDeltaOptions}
        data={timeDeltaData}
      />
    </div>
  )
}
