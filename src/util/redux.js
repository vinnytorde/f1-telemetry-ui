import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const topics = {
  liveness: '/telemetry/liveness',
  session: '/telemetry/session',
  motion: '/telemetry/motion',
  lapData: '/telemetry/lapData',
  event: '/telemetry/event',
  participants: '/telemetry/participants',
  carSetups: '/telemetry/carSetups',
  carTelemetry: '/telemetry/carTelemetry',
  carStatus: '/telemetry/carStatus',
  finalClassification: '/telemetry/finalClassification',
  lobbyInfo: '/telemetry/lobbyInfo',
}

const createAction = (topic) => ({
  topic,
  actionCreator: (payload) => {
    return {
      type: topic,
      payload: JSON.parse(payload.body),
    }
  },
})

export const actions = [
  createAction(topics.liveness),
  createAction(topics.session),
  createAction(topics.motion),
  createAction(topics.lapData),
  createAction(topics.event),
  createAction(topics.participants),
  createAction(topics.carSetups),
  createAction(topics.carTelemetry),
  createAction(topics.carStatus),
  createAction(topics.finalClassification),
  createAction(topics.lobbyInfo),
]

const createReducer =
  (topic) =>
  (state = {}, action) => {
    if (action.type === topic) {
      return action.payload
    }
    return state
  }

const createListReducer =
  (topic) =>
  (state = [], action) => {
    if (action.type === topic) {
      return [...state, action.payload]
    }
    return state
  }

const reducers = {
  liveness: createReducer(topics.liveness),
  session: createListReducer(topics.session),
  motion: createListReducer(topics.motion),
  lapData: createListReducer(topics.lapData),
  event: createListReducer(topics.event),
  participants: createListReducer(topics.participants),
  carSetups: createListReducer(topics.carSetups),
  carTelemetry: createListReducer(topics.carTelemetry),
  carStatus: createListReducer(topics.carStatus),
  finalClassification: createListReducer(topics.finalClassification),
  lobbyInfo: createListReducer(topics.lobbyInfo),
}

const indexReducer = combineReducers(reducers)
const store = createStore(indexReducer)

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
