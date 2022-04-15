import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { history, /* history2 */ } from './store'
import AboutUs from '../myApp/pages/AboutUs' 
import Init from '../myApp/pages/Init'
import Dashboard from '../myApp/pages/Dashboard'
import AddNewTodo from '../myApp/pages/AddNewTodo'
import { Route, Switch, MemoryRouter } from 'react-router-native' /* note:we used alias for web (webpack.config.js react-router-dom)*/
/* ========================================================================== */
export const routes_ = {
  '': 'Init',
  'Init': 'Init', 
  'Dashboard': 'Dashboard', 
  'AddNewTodo': 'AddNewTodo', 
  'AboutUs': 'AboutUs', 
}
/* ========================================================================== */
type State = {}
type Props = {}
class AzRouter extends React.Component<Props, State> {
    // state: State
  render() {
    return (
      <ConnectedRouter history={history}>
        <MemoryRouter>
          <Switch>
            <Route exact path="/" component={Init} />
            <Route exact path={'/' + routes_.Init} component={Init} />
            <Route exact path={'/' + routes_.Dashboard} component={Dashboard} />
            <Route exact path={'/' + routes_.AddNewTodo} component={AddNewTodo} />
            <Route exact path={'/' + routes_.AboutUs} component={AboutUs} />
           </Switch>
        </MemoryRouter>
      </ConnectedRouter>
    )
  }
}
/* ------------------------------ */
export default AzRouter
/* ========================================================================== */
/* use this if you just have updated your env and have been getting lots of errors after that test with below code:
  const Test =()=>{
  <View><Text>ok</Text></View>
} */
