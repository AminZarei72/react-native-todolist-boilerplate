import React from 'react'
import { Dimensions, View } from 'react-native'
import { Button, Text, TextInput, Title, List, Menu, Divider, FAB, Provider, Paragraph, Dialog, Portal, Snackbar, Modal } from 'react-native-paper'
import { connect } from 'react-redux' 
import * as types from '../../types' 
 
type State = {}
type Props = {
  // on_click_cb?, 
}
export const rxProps = (props: types.reducers) => ({
  toastDetails: props.gifr.toastDetails,
  // router: props.router,
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    //  state: State
    /* ================================== */
    render() {
      if (!this.props.toastDetails?.visible) return null
      return (<View
        /* testID='toast' */ /* Note:we cant put testId here because we'll have '' err and this is because of empty Tag or no height */
        style={{
          zIndex: 100, 
        }}>
        <Snackbar
          testID='toast'
          wrapperStyle={{ 
          }}
          style={{
            top: Dimensions.get('window').height - 30,// ok
            opacity: 0.9,
          }}
          visible={this.props.toastDetails.visible}
          onDismiss={() => { }}
        >
          {/* Note:dont use text here cause then Snackbar wont work and u cant use View without Text either because rn throw "string outside Text"  */}
          {this.props.toastDetails.title ? this.props.toastDetails.title + ': ' : null}
          {this.props.toastDetails.content ? this.props.toastDetails.content : null}
        </Snackbar>
      </View>
      )
    }
  }
)
/* ================================== */
 
