import React from 'react'
import { Provider } from 'react-redux'
import store, { history } from './store'
import reduxInitialState from '../../App/myApp/actions/reduxInitialState'
import { Provider as PaperProvider, Switch } from 'react-native-paper'
// import { delay } from '../helpers/AzPureFunctions2'
import * as helpers from '../helpers'
import { render as rn_render, fireEvent as rn_fireEvent, cleanup, } from '@testing-library/react-native'
import { expect as expect_0, it, test, afterEach } from '@jest/globals'
import { ConnectedRouter } from 'connected-react-router'
// import { createStore, } from 'redux'
// import { MemoryRouter, Route } from 'react-router'
// import { render as rtlRender } from '@testing-library/react'
// import { configureStore } from '@reduxjs/toolkit'
/* ======================================= */
beforeAll(() => {
})
/* --------------- */
beforeEach(() => {
  // global.fetch.mockImplementationOnce(() => Promise.reject('API is down'))
})
/* --------------- */
afterEach(() => {
  // global.fetch.mockRestore()
  // server.resetHandlers()
  global.fetch['mockClear']() /* reset things like   expect(fetch).toHaveBeenCalledTimes(1);  */
  cleanup()
  helpers.resetStore()
})
/* --------------- */
afterAll(() => {
})
/* --------------- */ 
/* ======================================= */
function renderWithActualStore(
  ui,
  options?: {
    mockRouterWith?: boolean
  },
  {
    initialState = reduxInitialState,
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store} >
        <PaperProvider   >
          <React.Fragment >
            {children}
            {options?.mockRouterWith && <ConnectedRouter history={history} />}
          </React.Fragment>
        </PaperProvider>
      </Provider>
    )
  }
  return rn_render(ui, { wrapper: Wrapper, ...renderOptions })
} 
/* ======================================= */
function wait(time: number): Promise<null> {
  return new Promise(resolve => {
    setTimeout(() => resolve(null), time)
  })
}
/* ======================================= */
/* reexport fns */
export * from '@jest/globals'
// export * from '@testing-library/react'
export * from '@testing-library/react-native'
const expect: jest.Expect = expect_0 as any
export {
  renderWithActualStore,
  wait,
  // delay,
  expect,
}

