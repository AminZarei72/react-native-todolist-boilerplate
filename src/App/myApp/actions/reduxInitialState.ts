// import * as types from '../types'
import * as mt from '../../../../tsfr/modelsTypes'
import { ScaledSize } from 'react-native'
/* ------------ */
/**
 * note: this will be converted to a plain object(the way redux likes it!) 
 *  but now i used class to combine types and objects(line) 
 * Note: dont forget ?(to make them optional): 
 */
class reduxInitialState_ {
  /* ------------------------------- */
  /* your states */ 
  todos?: { [x: string]: mt.read_todo; } = {} 
  /* ------------------------------- */
  /* other states used by this boilerplate */
  windowSize?: ScaledSize = null
  activateTopMenu?: boolean = null
  popupDetail?: {
    visible: boolean,
    title?: string,
    icon?: string,
    content?: string,
    type?: 'alert' | 'confirm',
    // callbackFn?: Function
  } = null
  toastDetails?: {
    visible: boolean,
    title?: string,
    content?: string,
    type?: 'alert' | 'confirm',
    // callbackFn?: Function
  } = null
  spinnerDetails?: {
    visible: boolean,
    title?: string,
    content?: string,
    type?: 'alert' | 'confirm',
    // callbackFn?: Function
  } = null
  /* ----------------------------- */
}
/* ----------------------------- */
const reduxInitialState = new reduxInitialState_()
export default reduxInitialState
/* ----------------------------- */
