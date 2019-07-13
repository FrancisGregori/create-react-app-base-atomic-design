import { createStore } from 'redux'
import rootReducer from '../reducers'
import throttle from 'lodash/throttle'

export const loadState = () => {
  try {
    // in case privacy mode does not allow local storage
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

// const persistedState = loadState(); // Uncomment in case we want to persist state to local storage

const store = createStore(
  rootReducer /* preloadedState, */,
  // persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ latency: 0 })
)

store.subscribe(
  throttle(() => {
    saveState(store.getState())
  }, 1000)
)

export default store
