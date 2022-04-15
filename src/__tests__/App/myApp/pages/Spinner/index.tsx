import * as React from 'react'
import { render, expect, fireEvent, renderWithActualStore, waitFor, cleanup, waitForElement, } from '../../../../../App/utils/test-utils'
import Cmp from '../../../../../App/myApp/pages/Spinner'
import * as helpers from '../../../../../App/helpers'
 
test(' renders successfully , assert items existance,test showSpinner fn', async () => {
 const title = 'askjdh323yuqh23'
  const content = 'asfkjqwe'
 
  function cbFn(/* args will be filled later in show SpinnerFn */) {
    console.log('Spinner is done!')
  }
  const mockedCb = jest.fn(cbFn) 
  /* ----------------- */
  /* test with default props */
 
  const { getByTestId, getByText, debug, findByText, queryByText, toJSON } = renderWithActualStore(<Cmp />)
  // await delay(3000)/* note:if we dont use this we'd miss the component.didComponentMount async affects */
  /* ----------------- */
 
  expect(queryByText(title)).toBeNull()
  expect(queryByText(content)).toBeNull()
  expect(mockedCb).toBeCalledTimes(0)
  
  helpers.showSpinner({
    title,
    content,
    callbackFn: mockedCb, /* if we change this with the mocked fn jest will throw cannot access arguments(because its a mocked fn and it does not have the same structure as normal fns have) */
    duration: 100,
  })
  /* -------- */
   await waitFor(async () => {
    expect(queryByText(content, { exact: true })).not.toBeNull()
    expect(queryByText(title, { exact: true })).not.toBeNull()
  })
  /* wait for the Spinner timer(duration which is 100) */
  await waitFor(async () => {
    expect(mockedCb).toBeCalledTimes(1)
    expect(mockedCb).toBeCalledWith()
  }) 
}) 
