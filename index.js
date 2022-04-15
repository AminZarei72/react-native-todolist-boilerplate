/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true)
AppRegistry.registerComponent(appName, () => App)
