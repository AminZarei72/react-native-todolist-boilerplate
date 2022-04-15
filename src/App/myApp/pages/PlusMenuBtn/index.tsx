import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import { FAB, Portal, Text, Colors, } from 'react-native-paper'
import * as helpers from '../../../helpers'
import * as types from '../../types'
// import * as myApp from '../../actions'
import * as configs from '../../actions/configs'
import { connect } from 'react-redux'
/* ================================== */
type State = { open: boolean }
type Props = {
  on_btn1_clicked,
  on_btn2_clicked,
  on_btn3_clicked,
  on_onStateChange_cb?,
}
export const rxProps = (props: types.reducers) => ({
  router: props.router, 
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    state: State = {
      open: false
    } 
    /* ---------------------------- */
    //when click on somewhere eles it gets updated 
    forceUpdateTrickToResolveFABUpdateIssue() {
      /* note:this can be anything ,we just need an update (alert()) */
      helpers.setStore({ activateTopMenu: true })
      helpers.setStore({ activateTopMenu: false })
    }
    render() {
      if (configs.pathsToBeInvisible.includes(helpers.getRouteName())) return null
      return (<FAB.Group
        testID='plusMenu-btn'
        fabStyle={{
          marginBottom: 45,
        }}
        style={{
        }}
        open={this.state.open}
        visible
        onStateChange={({ open }) => {
          this.setState({ open: open })
          this.forceUpdateTrickToResolveFABUpdateIssue()
          if (this.props.on_onStateChange_cb) this.props.on_onStateChange_cb(open)
        }}
        icon={this.state.open ? 'calendar-today' : 'plus'}
        actions={[
          {
            testID: 'btn1-btn',
            style: { backgroundColor: Colors.cyan700 },
            icon:  'credit-card-refund',
            label:  'add new todo' ,
            onPress: () => { 
                this.props.on_btn1_clicked()
            },
          },
          {
            testID: 'btn2-btn',
            style: { backgroundColor: Colors.cyan800 },
            icon:  'email',
            label:  'btn2' ,
            onPress: () => { 
                this.props.on_btn2_clicked()
            },
          },
          {
            testID: 'btn3-btn',
            style: { backgroundColor: Colors.cyan900 },
            icon:  'credit-card-plus',
            label:  'btn3' ,
            onPress: () => { 
                this.props.on_btn3_clicked()
            },
            small: false,
          },
        ]} 
      />) 
    }
  }
)
/*================================================== */
