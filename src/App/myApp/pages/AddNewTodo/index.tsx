import * as helpers from '../../../helpers'
import React, { useState } from 'react'
// import * as MainScene from '../../actions/myApp/myApp/MainScene'
import * as myApp from '../../actions'
import { ActivityIndicator, View, ScrollView, } from 'react-native'
import { Button, Text, TextInput, Title, Divider, Colors, Appbar, Switch, List, IconButton, Searchbar, } from 'react-native-paper'
import * as types from '../../types'
import { connect } from 'react-redux'
import { addNewtodo } from '../../actions'
/* ========== */
export type RouterStates = {
    title: string,
    comments: string,
}
type State = {
    title: string,
    comments: string,
}
type Props = {
    onSubmitPressed: () => void
}
export const rxProps = (props: types.reducers) => ({
    routerStates: props.router?.location?.state as RouterStates
})
export default connect(rxProps)(
    class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
        state: State = {
            comments: this.props.routerStates?.comments ? this.props.routerStates?.comments : '',
            title: this.props.routerStates?.title ? this.props.routerStates?.title : '',
        }
        /* ----------------------------- */
        render() {
            return (
                <View >
                    <TextInput
                        testID='title'
                        style={{ backgroundColor: 'transparent' }}
                        label="*title"
                        onChangeText={e => this.setState({ title: e })}
                    />
                    <TextInput
                        testID='comments'
                        style={{ backgroundColor: 'transparent' }}
                        label="*comments"
                        multiline
                        onChangeText={e => this.setState({ comments: e })}
                    />
                    <Button
                        testID='add-btn'
                        icon="message-reply"
                        mode="contained"
                        // loading={props.popupDetail && props.popupDetail.visible}
                        onPress={async () => {
                            await addNewtodo({
                                title:this.state.title,
                                comments:this.state.comments,
                            })
                            // helpers.goBack()
                        }}
                        disabled={
                            !this.state.title ||
                            !this.state.comments
                        }
                    >
                        send
                    </Button>
                </View>
            )
        }
    }
) 
