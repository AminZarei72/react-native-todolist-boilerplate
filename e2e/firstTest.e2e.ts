import { by, device, expect, element, } from 'detox'
import * as dpf from './detoxProxyFns'

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: false })
  })
  beforeEach(async () => {
    await device.reloadReactNative()
  })
  it('test1', async () => {
    await dpf.wait(3000)
    await dpf.click({ id: 'plusMenu-btn' })
    await dpf.click({ id: 'btn1-btn' })
    const todoTitle = 'asdjankjsdn'
    await addNewTodo(todoTitle)
  }, 20009)
})
/* =================================================== */
async function addNewTodo(todoTitle: string) {
  await dpf.type({ id: 'title', text: todoTitle })
  await dpf.type({ id: 'comments', text: 'asd' })
  await dpf.click({ id: 'add-btn' })
  await dpf.getByTestId('Dashboard')
  await dpf.contain({ id: 'Dashboard', text: todoTitle })
  // await dpf.getByText(todoTitle)
}
/* ======================================= */
