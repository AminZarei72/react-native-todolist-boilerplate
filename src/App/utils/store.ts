import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import createRootReducer from '../reducers'
// import devTools from 'remote-redux-devtools'
import * as HistoryModule from 'history'
import { routerMiddleware } from 'connected-react-router'
import { Platform } from 'react-native'
import { configs } from '../myApp/actions'
/* ===================================== */
/* using rr6 */
export const history = HistoryModule.createMemoryHistory() /* temporary in test (old way was import createHistory from 'history/createBrowserHistory') */
/* const tmp: any = history
const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  // history: createBrowserHistory(),
  //other options if needed 
  history: tmp,
  // history, 
  // routerReducerKey = 'router', 
  // reduxTravelling = false, 
  // selectRouterState = null,
  // savePreviousLocations = 0,
  // batch = null,
  // reachGlobalHistory = null
}); */
/* ===================================== */
/* temporary */ 
const isDev = configs.development
const isWeb = Platform.OS=='web'
const initialState = {}
/**
 * note:window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] automaticly will be ignored on testing platform ,so dont wory about them
 */
const composeEnhancers = (( 
  isWeb &&
  isDev &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] 
) ||
  compose)

const store = createStore(
  /* --------- */
  /* using rr6 */
  /* createRootReducer(routerReducer), */
  /* --------- */
  createRootReducer(history),/* orginal */
  initialState,
  composeEnhancers(
    applyMiddleware(
      promiseMiddleware(),
      thunk,
      routerMiddleware(history) /* orginal */
      /* --------- */
      /* using rr6 */
      /* routerMiddleware, */
      /* --------- */
    ),
    /* note:enable this if u want to use redux debugger tools(chrome extentions works without this) */
    /* devTools({
      name: 'Platform.OS',
      hostname: '192.168.1.36',
      port: 5678,
    }) */
  )
)
/* --------- */
/* using rr6 */
/* export const history2: any = createReduxHistory(store)   */
/* --------- */
export default store
