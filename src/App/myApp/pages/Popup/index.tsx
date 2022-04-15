import React, { createRef, useState } from 'react'
import { View, Alert } from 'react-native'
import { Button, Text, TextInput, Title, List, Menu, Divider, FAB, Provider, Paragraph, Dialog, Portal, Snackbar, Modal, IconButton } from 'react-native-paper'
import * as helpers from '../../../helpers'
import * as types from '../../types'
import * as myApp from '../../actions'
import { connect } from 'react-redux'

type State = {}
type Props = {}
export const rxProps = (props: types.reducers) => ({
  popupDetail: props.gifr.popupDetail,
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    // state: State = {  }
    render() {
      if (!this.props.popupDetail?.visible) return null
      const icon: any = this.props.popupDetail && this.props.popupDetail.icon ? this.props.popupDetail.icon : 'alert-octagon'
      return (
        <Dialog style={{ zIndex: 99 }} visible={this.props.popupDetail.visible} onDismiss={() => { }}>
          <Dialog.Title style={{ margin: 0, marginLeft: 5, fontSize: 15 }}>
            <IconButton
              size={25}
              color='gray'
              style={{ zIndex: -1, padding: 0, margin: 0 }}
              icon={icon}
            />
            {/* <Button
                testID='popup-title'
                style={{ width: 100 }}
                mode='contained'  >
                {this.props.popupDetail.title.toUpperCase()}
              </Button> */}
            <View>
              <Text testID='popup-title' >
                {this.props.popupDetail.title.toUpperCase()}
              </Text>
            </View>
          </Dialog.Title>
          <Dialog.Content>
            <View testID='popup-content'>{this.props.popupDetail.content && <Text>
              {this.props.popupDetail.content}
            </Text>}</View>
          </Dialog.Content>
          <Dialog.Actions style={{
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
          }}>
              <Button
                testID='ok-btn'
                style={{ width: 100 }}
                mode='contained' onPress={() => { helpers.callThePopupCallback(true) }}>
                ok
            </Button>
            {this.props.popupDetail.type == 'confirm' &&
              <Button
                testID='cancel-btn'
                style={{ width: 100 }}
                onPress={() => { helpers.callThePopupCallback(false) }}>
                cancel
              </Button>
            }
          </Dialog.Actions>
        </Dialog>
      ) 
    }
  }
) 
