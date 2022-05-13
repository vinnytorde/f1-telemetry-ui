import ky from 'ky'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from './selectors'

const addSessionAction = payload => {
  return {
    type: 'set session',
    payload,
  }
}
const setSessionDriversAction = sessionId => payload => {
  return {
    type: 'add drivers',
    payload,
    identifier: sessionId,
  }
}

const addCompareLapAction = payload => {
  return {
    type: 'add compareLap',
    payload,
  }
}

export function useTelemetryData() {
  const dispatch = useDispatch()

  const sessions = useSelector(selectors.getAvailableSessions)
  const drivers = useSelector(selectors.getDrivers)
  const compareLaps = useSelector(selectors.getCompareLaps)

  const getAvailableSessions = useCallback(() => {
    ky.get('http://localhost:8080/sessions')
      .json()
      .then(addSessionAction)
      .then(dispatch)
  }, [dispatch])

  const getSessionDrivers = useCallback(
    sessionId => {
      ky.get(`http://localhost:8080/sessions/${sessionId}/drivers`)
        .json()
        .then(setSessionDriversAction(sessionId))
        .then(dispatch)
    },
    [dispatch]
  )

  const addCompareLap = useCallback(
    lap => {
      ky.get(
        `http://localhost:8080/sessions/${lap.sessionId}/drivers/${lap.driver}/laps/${lap.lapNumber}`
      )
        .json()
        .then(addCompareLapAction)
        .then(dispatch)
    },
    [dispatch]
  )

  return {
    getSessionDrivers,
    drivers,
    getAvailableSessions,
    sessions,
    addCompareLap,
    compareLaps,
  }
}
