import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { actions } from './redux'

export function useF1Socket() {
  const dispatch = useDispatch()
  const reduxActionsAsListeners = useMemo(() => {
    return actions.map((action) => {
      return {
        ...action,
        listener: (payload) => dispatch(action.actionCreator(payload)),
      }
    })
  }, [dispatch])

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/f1')
    const stompClient = Stomp.over(socket)
    stompClient.connect({}, () => {
      reduxActionsAsListeners.forEach((action) => {
        stompClient.subscribe(action.topic, action.listener)
      })
    })
  }, [reduxActionsAsListeners])
}
