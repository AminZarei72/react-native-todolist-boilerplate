import React, { Component } from 'react'
// import * as helpers from '../../../libs/gif'
// import * as myApp from '../../actions'
import * as types from '../../types'
import * as configs from '../../actions/configs'
import { ActivityIndicator, Dimensions, Image, ScrollView, View, } from 'react-native'
import { Button, Text, TextInput, Title, Divider, Colors, Appbar, IconButton, Chip, Card, List } from 'react-native-paper'
import { connect } from 'react-redux'
import sharedVars from '../../../helpers/sharedVars'
import { imgLoader } from '../../../helpers'
// import asd from '../../media/aminZarei.jpg'
/* ==================================================== */
export type RouterStates = {}
type State = {}
type Props = {}
export const rxProps = (props: types.reducers) => ({})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    // state: State
    /* ------------------------------------------------------- */
    render() {
      return (
        <View style={{
          padding: 10,
        }}>
          <ScrollView style={{
            height: sharedVars.contentManagerHeight,
          }}>

            <View style={{ marginBottom: 10 }} >
              {/* <IconButton size={60} color='purple' style={{ alignSelf: 'center', }} icon='account-network' /> */}
              <Image
                source={imgLoader('aminZarei.jpg')}
                style={{ alignSelf: 'center', width: 100, height: 100, borderWidth: 1, borderRadius: 200 }}
              />
              <Text style={{ textAlign: 'center', color: 'purple', fontSize: 30 }}>{configs.appName}{'\n'}</Text>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>version: {'1.0.0'}</Text>
            </View>
            <Divider />

            <Card style={{
              backgroundColor: 'transparent'
            }}>
              <Card.Title
                title={'about me'}
              // subtitle={`${configs.aboutUs.subtitle}`}
              />
              <Card.Content>
                <Text style={{ fontWeight: 'bold' }}> {configs.aboutUs.firstName} {configs.aboutUs.lastname}</Text>
                <Text style={{ fontWeight: 'bold' }}>{configs.aboutUs.number}</Text>
                <Text style={{ fontWeight: 'bold' }}>{configs.aboutUs.email}</Text>
                <Text>{configs.aboutUs.aboutMe.trim()}</Text>
              </Card.Content>
            </Card>
            <Divider />
            {/* ===================== */}
            <Card style={{
              backgroundColor: 'transparent'
            }}>
              <Card.Title
                title={'about app'}
              // subtitle={`${configs.aboutUs.subtitle}`}
              />
              <Card.Content>
                <Text>{configs.aboutUs.descreiption.trim()}</Text>
              </Card.Content>
              <View style={{height:100}}></View>
            </Card>
            <Divider />
          </ScrollView>
        </View>
      )
    }
  }
)
