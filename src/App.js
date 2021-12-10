import { useSelector } from 'react-redux'
import './App.css'
import { useF1Socket } from './util/socket'

function App() {
  useF1Socket()

  const liveness = useSelector(state => state.liveness.content)
  const session = useSelector(state => state.session.length)
  const motion = useSelector(state => state.motion.length)
  const lapData = useSelector(state => state.lapData.length)
  const event = useSelector(state => state.event.length)
  const participants = useSelector(state => state.participants.length)
  const carSetups = useSelector(state => state.carSetups.length)
  const carTelemetry = useSelector(state => state.carTelemetry.length)
  const carStatus = useSelector(state => state.carStatus.length)
  const finalClassification = useSelector(
    state => state.finalClassification.length
  )
  const lobbyInfo = useSelector(state => state.lobbyInfo.length)

  return (
    <div className="App">
      <div>MESSAGE COUNT</div>
      <div>
        <span>liveness:</span> <span>{liveness}</span>
      </div>
      <div>
        <span>session:</span> <span>{session}</span>
      </div>
      <div>
        <span>motion:</span> <span>{motion}</span>
      </div>
      <div>
        <span>lapData:</span> <span>{lapData}</span>
      </div>
      <div>
        <span>event:</span> <span>{event}</span>
      </div>
      <div>
        <span>participants:</span> <span>{participants}</span>
      </div>
      <div>
        <span>carSetups:</span> <span>{carSetups}</span>
      </div>
      <div>
        <span>carTelemetry:</span> <span>{carTelemetry}</span>
      </div>
      <div>
        <span>carStatus:</span> <span>{carStatus}</span>
      </div>
      <div>
        <span>finalClassification:</span> <span>{finalClassification}</span>
      </div>
      <div>
        <span>lobbyInfo:</span> <span>{lobbyInfo}</span>
      </div>
    </div>
  )
}

export default App
