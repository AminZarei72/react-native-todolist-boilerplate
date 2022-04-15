import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
import { ProgressBar, IconButton, List, Button, Text, Portal, ActivityIndicator } from 'react-native-paper'
import { connect } from 'react-redux'
// import * as helpers from '../../../libs/gif'
import * as types from '../../types'
/* ============================= */
type State = {}
type Props = {}
export const rxProps = (props: types.reducers) => ({
  spinnerDetails: props.gifr.spinnerDetails,
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    /* ---------------------------- */
    render() {
      if (!this.props.spinnerDetails?.visible) return null
      return (<View
        testID='spinner'
        style={{
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(128, 128, 128, 0.7)',
          zIndex: 98,
        }}
      >
        <View style={{
          justifyContent: 'space-evenly',
        }}>
          <Text style={{ textAlign: 'center' }}>
            <ActivityIndicator />
          </Text> 
          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
            margin: 5,
          }} >
            {this.props.spinnerDetails.title}
          </Text>
          <Text style={{
            textAlign: 'center',
            fontSize: 12,
            margin: 5,
          }} >
            {this.props.spinnerDetails.content}
          </Text>
        </View>
      </View>
      )
    }
  }
) 
