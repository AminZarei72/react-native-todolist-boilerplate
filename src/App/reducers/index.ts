import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import * as types from '../myApp/types'
import reduxInitialState from '../myApp/actions/reduxInitialState'
import { History } from 'history'

export default (history: History) => combineReducers({
  router: connectRouter(history),
  /* ---------- */
  /* using rr6 */
  /* export default (routerReducer) => combineReducers({
  router: routerReducer,  */
  /* ---------- */
  gifr: (state: types.reduxInitialState = reduxInitialState, action: types.action) => { /* use this method for fast development */
    /* ---------- */
    /* reset */
    if (action.type == 'resetStoreFn') {
      return reduxInitialState
    }
    /* ---------- */
    if (reduxInitialState[action.type] === undefined) {/* note:remember to not set reduxInitialState variables to undefined  */
      /*these are normal: @@redux/INIT2.a.x.z.c @@redux/PROBE_UNKNOWN_ACTION_5.k.m.4.0.5 @@redux/INIT2.a.x.z.c  */
      // console.log('unknown action:', action.type)
      console.log('unknownAction')
      return state
    }
    return { ...state, [action.type]: action.payload }
  },
})
 /* ===================================================================== */
/* note:
this method is disabled for having less code!
if you want to use redux development tools ,you may need to make this manually with switch-case or something
*/
/* ===================================================================== */
