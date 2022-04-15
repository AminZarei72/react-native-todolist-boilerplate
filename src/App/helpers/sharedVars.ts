import { View, ScrollView } from 'react-native'
import { History } from 'history'
/* note:dont define default value for below variables values will be assing by Start function(for reseting  sake) */
export default class sharedVars {
  static toastTimer/* : NodeJS.Timeout */ = null
  static his: History
  static mainScrollViewRef: ScrollView = null 
  static spinnerTimer: any = null
  static tmpPopupCallbackFn: Function = () => { }
  static contentManagerHeight = 0
}
