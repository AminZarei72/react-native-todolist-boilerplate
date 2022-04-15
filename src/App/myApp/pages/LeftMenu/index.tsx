import React, { useEffect, useRef } from 'react'
import { View, DrawerLayoutAndroid, Platform, Image, Animated, Easing, Dimensions, Text as rnText, } from 'react-native'
import { Button, Menu, Divider, Provider, Drawer, Text, Colors, IconButton, Modal, Portal, List } from 'react-native-paper'
import * as helpers from '../../../helpers'
import * as types from '../../types'
// import * as fns from '../actions/fns';
// import * as myApp from '../../actions/'
import * as configs from '../../actions/configs'
import { connect } from 'react-redux'
import { imgLoader } from '../../../helpers'
// const asdasd=require('./aminZarei.jpg')
/* ----------------- */
const translateXVal = new Animated.Value(0)
const anim1 = Animated.timing(translateXVal, { toValue: 0, useNativeDriver: true/* ,easing:Easing.linear */, duration: 500 })
const anim2 = Animated.timing(translateXVal, { toValue: -Dimensions.get('window').width, useNativeDriver: true, duration: 300 })
/* note:here instead of creating another animation we used translateXVal and make it compatible with opacity */
const opacityOfMenu = translateXVal.interpolate({ inputRange: [-Dimensions.get('window').width, 0], outputRange: [0, 1] })
const opacityOfBackgroundView = translateXVal.interpolate({ inputRange: [-Dimensions.get('window').width, 0], outputRange: [0, 0.5] })
/* ----------------- */
type State = {}
type Props = {
  on_blankSpacePressed_cb
  on_profilePicturePressed_cb?
  on_itemsPressed_cb
}
export const rxProps = (props: types.reducers) => ({
  activateTopMenu: props.gifr.activateTopMenu,
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    // state: State
    /* ---------------------- */
    componentDidUpdate() {
      this.props.activateTopMenu ? anim1.start() : anim2.start() /* note:dont use props ofcomponentDidUpdate(props). read 31673 */
    }
    /* ---------------------- */
    render() {
      if (configs.pathsToBeInvisible.includes(helpers.getRouteName())) return null
      return (
        <View style={{}} >
          {true && <View>
            <Animated.Text
              testID='blankSpace-btn'
              onPress={(e) => {
                this.props.on_blankSpacePressed_cb()
                return false
              }}
              style={{
                backgroundColor: Colors.blueGrey200,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                position: 'absolute',
                left: this.props.activateTopMenu ? 0 : -Dimensions.get('window').width,
                alignContent: 'center',
                alignSelf: 'center',
                zIndex: 0,
                opacity: opacityOfBackgroundView,
              }} />
            {/* ----------------------------- */}
            <Animated.View
              style={{
                backgroundColor: Colors.blueGrey200,
                width: Dimensions.get('window').width - 50, /* note:this is based on real screen (so in emulators like anbox u might not see the right size but its not my code issue :) */
                height: Dimensions.get('window').height,
                position: 'absolute',
                alignContent: 'center',
                opacity: opacityOfMenu,
                zIndex: 1,
                borderRightColor: 'gray',
                borderRightWidth: 1,
                transform: [{ translateX: translateXVal }],
              }}
            >
              <View style={{ marginBottom: 10 }} >
                <IconButton size={60} color='purple' style={{ alignSelf: 'center', }} icon='account-network' />
                <Text style={{ textAlign: 'center', color: 'purple', fontSize: 30 }}>{configs.appName}{'\n'}</Text>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>version: {'1.0.0'}</Text>
              </View>
              <Divider />

              <Text
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  flexDirection: 'column',
                }}
                testID='profilePicture-btn'
                onPress={async () => {
                  await this.props.on_profilePicturePressed_cb()
                }
                }>
                <View style={{
                  width: '100%',
                  marginBottom: 10,
                }}
                >
                  <View >
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{`aminZarei72`}</Text>
                    <View
                      style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 200, }}
                    >
                      <Image
                        source={imgLoader('aminZarei.jpg')}
                        style={{ alignSelf: 'center', width: 100, height: 100, borderWidth: 1, borderRadius: 200 }}
                      />
                      <List.Icon
                        color={Colors.deepPurple900}
                        icon='image-edit'
                        style={{
                          right: -10,
                          bottom: -10,
                          margin: 0,
                          position: 'absolute',
                        }}
                      />
                    </View>
                  </View>
                </View>
              </Text>
              <Divider />

              <Text
                testID='items-btn'
                style={{ textAlign: 'center', textTransform: 'uppercase' }} onPress={() => {
                  this.props.on_itemsPressed_cb('Setting')
                }} >
                <Text style={{ textAlign: 'center', fontSize: 18, color: Colors.grey800, padding: 10 }}  >
                  <IconButton color={Colors.deepPurple900} icon='table-settings' size={20} style={{ alignSelf: 'center', zIndex: -1 }} />
                  setting
                </Text>
              </Text>
              <Divider />

              <Text
                style={{ textAlign: 'center', textTransform: 'uppercase' }} onPress={() => {
                }} >
                <Text style={{ textAlign: 'center', fontSize: 18, color: Colors.grey800, padding: 10 }}  >
                  <IconButton color={Colors.deepPurple900} icon='help-circle' size={20} style={{ alignSelf: 'center', zIndex: -1 }} />
                  fast gauid
                </Text>
              </Text>
              <Divider />

              <Text style={{ textAlign: 'center', textTransform: 'uppercase' }} onPress={() => {
                this.props.on_itemsPressed_cb('AboutUs')
              }} >
                <Text style={{ textAlign: 'center', fontSize: 18, color: Colors.grey800, padding: 10 }}  >
                  <IconButton color={Colors.deepPurple900} icon='information' size={20} style={{ alignSelf: 'center', zIndex: -1, }} />
                  about Us
                </Text>
              </Text>
              <Divider />
            </Animated.View>
            {/* -------------------- */}
          </View>}
        </View >
      )
    }
  }
) 
