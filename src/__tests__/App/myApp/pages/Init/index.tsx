import * as React from 'react'
import {
  render,
  fireEvent,
  renderWithActualStore,
  test,
  waitFor,
  cleanup,
  waitForElement,
} from '../../../../../App/utils/test-utils' 
import Cmp from '../../../../../App/myApp/pages/Init' 
import * as configs from '../../../../../App/myApp/actions/configs'
 
/* ======================================== */
test('Init renders successfully , assert items existance ', async () => {
  /* ---------------------------------- */
  const {queryByText} = renderWithActualStore(<Cmp />)
  expect(queryByText(configs.initilizingMsg)).not.toBeNull()
})
 
