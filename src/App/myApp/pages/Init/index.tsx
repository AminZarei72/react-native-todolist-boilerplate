// import * as helpers from '../../../libs/gif'
import React, { useState, useRef, useEffect } from 'react'
import { ActivityIndicator, View, Animated, Text } from 'react-native'
import * as types from '../../types'
import TmpCmpToResolveRouterIssue from './TmpCmpToResolveRouterIssue'
import { connect } from 'react-redux'
import { configs } from '../../actions'
/* ========== */
type State = {}
type Props = {}
export const rxProps = (props: types.reducers) => ({})
export default connect(rxProps)(
    class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
        // state: State
        render() {
            return (
                <TmpCmpToResolveRouterIssue his={this.props['history']}   >
                    <View testID='init' style={{ marginVertical: 50 }}>
                        <Text>{configs.initilizingMsg}</Text>
                    </View>
                </TmpCmpToResolveRouterIssue>
            )
        }
    }
)
/* ================================== */
// export default gif.glue(cmp, (props: types.reducers) => ({
//     popupDetail: props.gifr.popupDetail,
// }))
