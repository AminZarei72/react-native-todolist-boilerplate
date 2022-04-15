import React, { useState } from 'react'
import { Platform, View, } from 'react-native'
import { BottomNavigation, Text, Button, Colors } from 'react-native-paper'
import * as helpers from '../../../helpers'
import * as types from '../../types'
import * as configs from '../../actions/configs'
import { connect } from 'react-redux'
/* ================================== */
/**based on node_modules/react-native-paper/lib/typescript/components/BottomNavigation.d.ts */
type tabs_route = {
  // key: string;
  key: any;
  title?: string;
  icon?: any;
  badge?: string | number | boolean;
  color?: string;
  accessibilityLabel?: string;
  testID?: string;
}
/* ================================== */
type State = {
  currentTabIndex?: number,
  routes?: { /* same BottomNavigation route(it wasn't exported) */
    // key: string;
    key: types.routes;
    title?: string;
    icon?: any;
    badge?: string | number | boolean;
    color?: string;
    accessibilityLabel?: string;
    testID?: string;
  }[],
}
type Props = {
  /* // on_clickOnTab_cb?(tabKey: string): void */ /* Note:this is un-tastable(because of the way Paper created it.) */
}
export const rxProps = (props: types.reducers) => ({
  router: props.router, 
})
export default connect(rxProps)(
  class Cmp extends React.Component<Props & ReturnType<typeof rxProps>, State> {
    state: State = {
      currentTabIndex: 0,
      routes: [{
        key: 'AddNewTodo',
        title: 'Dashboard',
        icon: 'view-dashboard',
      }]
    } 
    static getDerivedStateFromProps(nextProps: Props & ReturnType<typeof rxProps>, prevState: State): State {
      /* ------ */
      /* 
      let unconfiremedBadges = null
      if (props.unConfirmedMarketers && Object.keys(props.unConfirmedMarketers).length) {
        const unArchived = Object.values(props.unConfirmedMarketers).filter(i => !i['archived']).length
        if (unArchived > 0) unconfiremedBadges = unArchived
      }
       */
      const updated_routes: tabs_route[] = [
        {
          testID: 'Dashboard-tab',
          key: 'Dashboard',
          title: 'Dashboard',
          icon: 'view-dashboard',
          badge: 3,
        },
        {
          testID: 'AddNewTodo-tab',
          key: 'AddNewTodo',
          title: 'AddNewTodo',
          icon: 'credit-card-plus',
        },
        {
          testID: 'AboutUs-tab',
          key: 'AboutUs',
          title: 'AboutUs',
          icon: 'account-multiple',
        }, 
      ]
      /* ----------------- */
      /* update on back btn press */
      const currentIndex = updated_routes.map(i => '/' + i.key).indexOf(helpers.getRouteName())
      if (currentIndex !== prevState.currentTabIndex) {
        return {
          currentTabIndex: currentIndex,
          routes: updated_routes,
        }
      }
      return {
        routes: updated_routes,
      }
    } 
    /* ================================== */
    render() {
       if (configs.pathsToBeInvisible.includes(helpers.getRouteName())) return null
      let styls = {} 
      if (Platform.OS !== 'web') {
        styls = {
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
        }
      } 
      return (
        <View style={{ ...styls }}
        >{
            <View> 
              <BottomNavigation 
                onTabPress={(props: any) => {/* this is here to fix 234qsd3 issue  */
                   helpers.goto(props.route.key)
                }} 
                navigationState={{
                  index: this.state.currentTabIndex != -1 ? this.state.currentTabIndex : 0,/* todo:there has to be a better way than this!(this has some side-effects) */
                  routes: this.state.routes,
                }}
                activeColor={this.state.currentTabIndex != -1 ? 'white' : Colors.grey500}/* this is here to fix 234qsd3 issue  */
                onIndexChange={(index) => { 
                  const page = this.state.routes[index].key
                  helpers.goto(page)
                  this.setState({ currentTabIndex: index })
                }}
                renderScene={({ route, jumpTo }) => null}
            
              />
            </View>
          }</View>
      )
    }
  }
) 
