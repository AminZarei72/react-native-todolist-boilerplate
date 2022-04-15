import { View } from 'react-native'
// import sharedVars from "../myApp/actions/sharedVars";
import React from 'react'
import sharedVars from '../../../helpers/sharedVars'

/** Note:this component is here just to resolve "router" module "undefined-history" issue in android .
 * (this probably will be fixed by updating router package)  */
export default class TmpCmpToResolveRouterIssue extends React.Component<{his,children} , {}> {
    his:any 
    // props:{his,children}
    componentDidMount(){ 
      sharedVars.his=this.props['his']
    }
    render() {
      return (
        <View>{this.props['children']}</View>
      )
    }
  }
