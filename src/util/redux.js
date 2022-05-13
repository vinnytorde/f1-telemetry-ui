import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

// calling the action will add an array to a list
const createListReducer =
  topic =>
  (state = [], action) => {
    if (action.type === `set ${topic}`) {
      return action.payload
    }
    if (action.type === `add ${topic}`) {
      return [...state, action.payload]
    }
    return state
  }

// calling the action will add an item to a map, and set the given `identifier` as its key
const createMapByIdentifierReducer =
  topic =>
  (state = {}, action) => {
    if (action.type === `add ${topic}`) {
      return {
        ...state,
        [action.identifier]: action.payload,
      }
    }
    return state
  }

const reducers = {
  session: createListReducer('session'),
  drivers: createMapByIdentifierReducer('drivers'),
  compareLap: createListReducer('compareLap'),
  // motion: createListReducer(topics.motion),
  // lapData: createListReducer(topics.lapData),
  // event: createListReducer(topics.event),
  // carSetups: createListReducer(topics.carSetups),
  // carTelemetry: createListReducer(topics.carTelemetry),
  // carStatus: createListReducer(topics.carStatus),
}

const indexReducer = combineReducers(reducers)
const store = createStore(indexReducer)

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
