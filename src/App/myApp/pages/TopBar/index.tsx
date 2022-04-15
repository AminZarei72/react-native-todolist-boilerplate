import React, { useState } from 'react'
import { View, Animated } from 'react-native'
import { Appbar, IconButton, Text, Badge, Button, List } from 'react-native-paper'
import * as helpers from '../../../helpers'
import * as types from '../../types'
import * as configs from '../../actions/configs'
import { connect } from 'react-redux'
/* ================================== */
type State = {}
type Props = {
  on_goBack_cb?,
  on_btn2_clicked?,
  on_btn3_clicked?,
  on_activateTopMenu_cb?,
}
export const rxProps = (props: types.reducers) => ({
  router: props.router,
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    render() {
      if (configs.pathsToBeInvisible.includes(helpers.getRouteName())) return null
      return (
        <View
          style={{
            overflow: 'hidden',
          }}
        >{<Appbar.Header
          style={{
          }}>
          <Appbar.BackAction
            testID='goBack-btn'
            onPress={() => {
              if (this.props.on_goBack_cb) this.props.on_goBack_cb()
            }} />
          <Appbar.Content
            style={{ marginLeft: 0, margin: 0, padding: 0, }}
            title={configs.appName}
            subtitle={helpers.getRouteName()}
          >
          </Appbar.Content>
          <View style={{ display: 'flex', flexDirection: 'row', }}>
            <Text
              testID='btn2-btn'
              onPress={async () => {
                if (this.props.on_btn2_clicked) this.props.on_btn2_clicked()
              }}>
              <Animated.View style={{
              }}>
                <List.Icon style={{ width: 25 }} color='yellow' icon="email" />
                {true &&
                  <View style={{
                    backgroundColor: 'red',
                    minWidth: 15,
                    maxWidth: 100,
                    height: 18,
                    borderRadius: 50,
                    opacity: 0.8,
                    padding: 1,
                    position: 'absolute',
                    bottom: 11,
                    left: 1,
                  }}>
                    <Text style={{
                      textAlign: 'center',
                      fontSize: 12,
                    }}>
                      {72}
                    </Text>
                  </View>
                  }
              </Animated.View>
            </Text> 
            <Text
              testID='btn3-btn'
              onPress={async () => {
                if (this.props.on_btn3_clicked) this.props.on_btn3_clicked()
              }}>
              <Animated.View style={{
              }}>
                <List.Icon style={{ width: 25 }} color='orange' icon="refresh-circle" />
              </Animated.View>
            </Text>
          </View>
          <Appbar.Action
            testID='activateTopMenu-btn'
            icon={'dots-vertical'} onPress={() => {
              const newState = !helpers.getStore('activateTopMenu')
              if (this.props.on_activateTopMenu_cb) this.props.on_activateTopMenu_cb(newState)
            }} />
        </Appbar.Header>
          }</View>
      )
    }
  }
)
/* ================================== */


