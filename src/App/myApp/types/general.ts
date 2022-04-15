import { connectRouter, RouterState } from 'connected-react-router'
import reduxInitialState from '../actions/reduxInitialState'
import { routes_ } from '../../utils/Router'
/* ===================================================== */
export type reduxInitialState = typeof reduxInitialState
export type StateKeys = keyof  reduxInitialState;
export type reduxInitialState_types =  keyof reduxInitialState
 
export type reducers = { 
  router: RouterState
  gifr: reduxInitialState,
}
export type action = { 
  type: string
  payload: any
}

export type routes = keyof (typeof routes_);
/* ===================================================== */
