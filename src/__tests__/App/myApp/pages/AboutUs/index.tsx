import * as React from 'react'
import {
  render,
  fireEvent,
  renderWithActualStore,
  test,
  waitFor,
  cleanup,
  waitForElement,
  expect,
} from '../../../../../App/utils/test-utils' 
import Cmp from '../../../../../App/myApp/pages/AboutUs' 
import * as configs from '../../../../../App/myApp/actions/configs'
 
/* ======================================== */
test('Init renders successfully , assert items existance ', async () => {
  /* ---------------------------------- */
  const { queryAllByText } = renderWithActualStore(<Cmp />)
  // expect(queryAllByText(configs.aboutUs.firstName, { exact: false ,})).not.toBeNull()
  expect(queryAllByText(configs.aboutUs.firstName, { exact: false, }).length).toBeGreaterThan(0)
  /* ---------------------------------- */
})
