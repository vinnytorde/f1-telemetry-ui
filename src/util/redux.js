import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const topics = {
  session: 'session',
  motion: 'motion',
  lapData: 'lapData',
  event: 'event',
  participants: 'participants',
  carSetups: 'carSetups',
  carTelemetry: 'carTelemetry',
  carStatus: 'carStatus',
  finalClassification: 'finalClassification',
  lobbyInfo: 'lobbyInfo',
}

const createAction = topic => ({
  topic,
  actionCreator: payload => {
    return {
      type: topic,
      payload: payload,
    }
  },
})

export const actions = [
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

const createListReducer =
  topic =>
  (state = [], action) => {
    if (action.type === topic) {
      return [...state, action.payload]
    }
    return state
  }

const reducers = {
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
