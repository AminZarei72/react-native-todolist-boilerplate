import * as helpers from '../../../helpers'
import * as types from '../../types'
import * as mt from '../../../../../tsfr/modelsTypes'
/* ============================================================= */
export async function addNewtodo(formData: types.todoFormData) {
    helpers.showSpinner({ content: 'sending new todo request', })
    const newtodo: mt.create_todo = {
        title: formData.title,
        comments: formData.comments,
        status:'waiting',
    } 
    const res1 = await helpers.firebaseFns.push({
        fields: newtodo,
        col: 'todos',
    })
    if (!res1 || res1.error) {
        helpers.showSpinner(false)
        console.error('something went wrong in register_2')
        helpers.showPupop({
            title: 'error',
            content: 'something went wrong on adding new todo',
        })
        return false
    }
    helpers.showToast({
        content: 'new todo request was sent.',
        // duration: 3000, /* Note:if u enter less time ,Detox tests will fail for some unknown reason "_" */
    })
    /* update ui(also u can use firebose sdk snapshots) */
    const newAddedtodo: mt.read_todo = res1.data
    const todos = helpers.getStore('todos')
    // const todos = tmp ? tmp : {}
    todos[newAddedtodo['id']] = newAddedtodo
    helpers.setStore({ todos: todos })

    helpers.showSpinner(false)
    helpers.showToast({ content: 'new todo was added.', })
    helpers.goto('Dashboard')
    return true
}
