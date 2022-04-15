import * as React from 'react'
import { render, expect, fireEvent, renderWithActualStore, waitFor, cleanup, waitForElement, } from '../../../../../App/utils/test-utils'
import Cmp from '../../../../../App/myApp/pages/Popup'
import * as helpers from '../../../../../App/helpers'
 
test(' renders successfully , assert items existance,test showPopup fn', async () => {
  // const timeComponentNeedsForInnerStatesUpdate = 100
  const title = 'askjdh323yuqh23'
  const content = 'asfkjqwe'
 
  function cbFn(/* args will be filled later in show PopupFn */) {
    console.log('Popup is done!')
  }
  const mockedCb = jest.fn(cbFn)
   const { getByTestId, getByText, debug, findByText, queryByText, toJSON } = renderWithActualStore(<Cmp />)
 
  expect(queryByText(title.toUpperCase())).toBeNull()
  expect(queryByText(content)).toBeNull()
  expect(mockedCb).toBeCalledTimes(0)
   
  helpers.showPupop({
    title,
    content,
    callbackFn: mockedCb, /* if we change this with the mocked fn jest will throw cannot access arguments(because its a mocked fn and it does not have the same structure as normal fns have) */
    duration: 100,
    type: 'alert'
  })
  /* -------- */
   await waitFor(async () => {
    expect(queryByText(title.toUpperCase(), { exact: true })).not.toBeNull()
    expect(queryByText(content, { exact: true })).not.toBeNull()
  })
  await waitFor(async () => {
    await fireEvent.press(getByTestId('ok-btn'))
    expect(mockedCb).toBeCalledTimes(1)
    expect(mockedCb).toBeCalledWith(true)
  })
  /* ------------ */
  mockedCb.mockClear()
  // update()
  helpers.showPupop({
    title,
    content,
    callbackFn: mockedCb, /* if we change this with the mocked fn jest will throw cannot access arguments(because its a mocked fn and it does not have the same structure as normal fns have) */
    duration: 100,
    type: 'confirm'
  })

  await waitFor(async () => {
    await fireEvent.press(getByTestId('cancel-btn'))
  })
  await waitFor(async () => {
    expect(mockedCb).toBeCalledTimes(1)
    expect(mockedCb).toBeCalledWith(false)
  }) 
})
 
