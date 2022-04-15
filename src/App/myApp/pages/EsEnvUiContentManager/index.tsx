import React from 'react'
import { View, ScrollView, Dimensions, Platform, ImageBackground, Image } from 'react-native'
// import { FAB, Portal, Text, } from 'react-native-paper';
import * as helpers from '../../../helpers'
import * as types from '../../types'
import * as configs from '../../actions/configs'
// import * as myApp from '../../actions'
import { connect } from 'react-redux'
import sharedVars from '../../../helpers/sharedVars'
import { imgLoader } from '../../../helpers'
/* ================================== */
type State = {}
type Props = {}
export const rxProps = (props: types.reducers) => ({
  router: props.router,
})
const tmp: any = ( /* issue:if we dont use any here we're gonna have a type error on main index(juse use any for now ,its not that big deal) */
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    componentDidMount() { }
    render() {
      if (!this.props.router || !this.props.router?.location) return null
      /* ---------------------------- */
      // if (Platform.OS === 'web') {
         sharedVars.contentManagerHeight = configs.pathsToBeInvisible.includes(helpers.getRouteName()) ? Dimensions.get('window').height : Dimensions.get('window').height - 110
      // } else {
      //   // sharedVars.contentManagerHeight = configs.pathsToVisible.includes(helpers.getRouteName()) ? Dimensions.get('screen').height : Dimensions.get('window').height - 530
      //   sharedVars.contentManagerHeight = '90%'
      // } 
      /* ---------------------------- */
      return (
        <View style={{
          overflow: 'hidden',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          height: sharedVars.contentManagerHeight,
        }}   >
          <Image
            // resizeMode='cover'
            style={{
              overflow: 'hidden',
              opacity: 0.3,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            //  resizeMode='cover'
            blurRadius={6}
            source={ imgLoader('bgs/bg1.jpg')} />
          {true && <View style={{
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}>
            {this.props['children']}
          </View>
          }
        </View>
      )
    }
  }
)
export default connect(rxProps)(tmp)
