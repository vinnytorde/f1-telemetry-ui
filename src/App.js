import { useSelector } from 'react-redux'
import './App.css'
import { useF1Socket } from './util/socket'

function App() {
  useF1Socket()

  const state = useSelector((state) => state)

  return <div className="App">{JSON.stringify(state)}</div>
}

export default App
