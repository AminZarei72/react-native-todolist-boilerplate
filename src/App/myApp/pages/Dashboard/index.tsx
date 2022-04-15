// import * as helpers from '../../../libs/gif'
import React, { useState, useRef, useEffect } from 'react'
import { ActivityIndicator, View, Animated, Text, ScrollView, Image, ImageBackground } from 'react-native'
import * as types from '../../types'
import { connect } from 'react-redux'
import { idShrinker } from '../../../helpers'
import { Divider } from 'react-native-paper'
import generalStyle from '../../generalStyles'
import { configs } from '../../actions'
// import { configs } from '../../actions'

/* ========== */

type State = {}
type Props = {}
export const rxProps = (props: types.reducers) => ({
    todos: props.gifr.todos
})
export default connect(rxProps)(
    class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {

        render() {
            return (
                <View testID='Dashboard' style={{ marginVertical: 50 }}>
                    <Text>todos:</Text>
                    {/* <Image source={require('../../media/aminZarei.jpg')}
                    style={{ alignSelf: 'center', width: 100, height: 100, borderWidth: 1, borderRadius: 200 }}
                    />   */}

                    <Divider />
                    <View style={generalStyle.view}>
                        <Text style={generalStyle.title}>id </Text>
                        <Text style={generalStyle.title}>title </Text>
                        <Text style={generalStyle.title}>comment </Text>
                    </View>
                    <Divider />
                    <ScrollView style={{ height: 500, borderBottomColor: 'gray' }} >
                        {this.props.todos && Object.values(this.props.todos).map(i =>
                        (<View key={i['id']} >
                            <View style={generalStyle.view}>
                                <Text style={generalStyle.content}>{idShrinker(i['id'])} </Text>
                                <Text style={generalStyle.content}>{i.title} </Text>
                                <Text style={generalStyle.content}>{i.comments} </Text>
                            </View>
                            <Divider />
                        </View>
                        )
                        )}
                    </ScrollView>

                </View>
            )
        }
    }
) 
