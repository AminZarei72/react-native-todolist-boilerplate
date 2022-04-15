/* -------------------------------------------------------------- */
import React from 'react' /* dont rm this  */
/* ok */
// import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-native';
/* -------------------------------------------------------------- */
import '@testing-library/jest-native/extend-expect';
/* -------------------------------------------------------------- */
// Setting global.Promise takes care of act warnings that may occur due to 2 waitFor,
// as suggested https://github.com/callstack/react-native-testing-library/issues/379
import Promise from 'promise-polyfill'
global.Promise = Promise
/* note:use global.Promise instead of just Promise for below files  */
/* -------------------------------------------------------------- */
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock'
jest.mock('react-native-device-info', () => mockRNDeviceInfo)
/* -------------------------------------------------------------- */
/* mock ActivityIndicator (which causes useNativeDriver errors) */
/* note:this is a temporary fix */
jest.mock('react-native-paper', () => {
  const View = require('react-native/Libraries/Components/View/View')
  const RealModule = jest.requireActual('react-native-paper');
  return { 
    ...RealModule,
    // ActivityIndicator: null,
    ActivityIndicator: ({ children }) => <View>{children}</View>
  }
})

// not ok (cant even target the ActivityIndicator)
// jest.mock('react-native-paper/lib/module/components/ActivityIndicator', () => { 
//   const View = require('react-native/Libraries/Components/View/View')
//   return View 
// })
/* -------------------------------------------------------------- */
 
jest.mock('react-native/Libraries/Components/Switch/Switch', () => {
  const mockComponent = require('react-native/jest/mockComponent')
  return mockComponent('react-native/Libraries/Components/Switch/Switch')
})
/* or in .66
jest.mock('react-native/Libraries/Components/Switch/Switch', () => {
  const mockComponent = require('react-native/jest/mockComponent')
  return {
    default: mockComponent('react-native/Libraries/Components/Switch/Switch')
  }
})
 */
/* -------------------------------------------------------------- */
/* mock fetch (https://www.leighhalliday.com/mock-fetch-jest)*/
global['fetch'] = jest.fn(() => global.Promise.reject('APIs are mocked'))
/* global['fetch'] = jest.fn(() =>Promise.resolve({json: () => Promise.resolve(null),})) */
/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
/* -------------------------------------------------------------- */
/* mock timing */
import * as RN from 'react-native';
RN.Animated.timing = () => ({
  start: () => jest.fn(),
});
module.exports = RN;
 