import * as helpers from '../../helpers'
// import * as types from '../types'
import * as mt from '../../../../tsfr/modelsTypes'
import * as myApp from '.'
/* ============================================================ */
export async function initAppAfterComponentDidMount() {
  /* ----------------- */
  await helpers.clearStorage()
  /* ----------------- */
  helpers.showToast({ content: 'wellcome', })
  helpers.showSpinner({ content: 'initilizing data...', })
  await myApp.initMainData()
  helpers.goto('Dashboard')
}
/* ============================================================ */
export async function initMainData() {
  const res = await helpers.firebaseFns.getAll({
    col: 'todos',
  })
  // console.log(res)
  if (res.error) {
    helpers.showSpinner(false)
    helpers.showPupop({
      title: 'error',
      content: 'something went wrong while trying to get Todos ',
    })
    throw res.error
  }
  /* ----------- */
  const todos: { [id: string]: mt.read_todo } = res.data
  if (todos && Object.keys(todos).length) {
    helpers.setStore({ todos })
  }
  /* helpers.setStore({
    todos: {
      '12123123123123': {
        title: 'a',
        comments: 'b',
        id: '12123123123123'
      }
    }
  }) */
  /* ----------- */
}
/* ============================================================ */
