import * as React from 'react'
import { render, expect, fireEvent, renderWithActualStore, waitFor, cleanup, waitForElement, } from '../../../../../App/utils/test-utils'
import Cmp from '../../../../../App/myApp/pages/Toast'
import * as helpers from '../../../../../App/helpers'
 
test(' renders successfully , assert items existance,test showToast fn', async () => {
 
  const title = 'askjdh323yuqh23'
  const content = 'asfkjqwe'
 
  function cbFn(/* args will be filled later in show toastFn */) {
    console.log('toast is done!')
  }
  const mockedCb = jest.fn(cbFn) 
  /* ----------------- */
  /* test with default props */

  const { getByTestId, debug, findByText, queryByText, toJSON } = renderWithActualStore(<Cmp />)
  
  expect(queryByText(title)).toBeNull()
  expect(queryByText(content)).toBeNull()
  expect(mockedCb).toBeCalledTimes(0) 
  /* ----------------- */
  /* test with default props */
 
  helpers.showToast({
    title,
    content,
    callbackFn: mockedCb, /* if we change this with the mocked fn jest will throw cannot access arguments(because its a mocked fn and it does not have the same structure as normal fns have) */
    duration: 100,
  })
  /* -------- */
  await waitFor(async () => {
    // console.log(queryByText(content, { exact: false }))
    expect(queryByText(content, { exact: false })).not.toBeNull()
    expect(queryByText(title, { exact: false })).not.toBeNull()
    // expect(queryByText('title', { exact: false })).not.toBeNull()
  })
  /* wait for the toast timer(duration which is 100) */
  await waitFor(async () => {
    expect(mockedCb).toBeCalledTimes(1)
    expect(mockedCb).toBeCalledWith()
  })
  /* ----------------- */
 }) 
