import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from './redux'
import { io } from 'socket.io-client'

export function useF1Socket() {
  const dispatch = useDispatch()
  const reduxActionsAsListeners = useMemo(() => {
    return actions.map(action => {
      return {
        ...action,
        listener: payload => dispatch(action.actionCreator(payload)),
      }
    })
  }, [dispatch])

  useEffect(() => {
    const socket = io('localhost:8080')
    reduxActionsAsListeners.forEach(action => {
      socket.on(action.topic, action.listener)
    })
  }, [reduxActionsAsListeners])
}
