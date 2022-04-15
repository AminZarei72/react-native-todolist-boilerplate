// import * as myApp from '../myApp/actions'
import * as types from '../myApp/types'
import store, { history }/* , { history }  */ from '../utils/store'
import { push, goBack as routerGoBack, } from 'connected-react-router'
import localStorageLib from 'store/dist/store.modern'
import { Animated, Platform } from 'react-native'
import sharedVars from './sharedVars'
import { development } from '../myApp/actions/configs'
/* ----------------------------- */
export function resetStore() {
  return store.dispatch({ type: 'resetStoreFn' })
}
/* ----------------------------- */
export function setStore(object: types.reduxInitialState) {
  for (const key in object) {
    store.dispatch({ type: key, payload: object[key] })
  }
}
/* ---------------------- */
export function getStore<K extends types.StateKeys>(key: K): types.reduxInitialState[K] {
  return store.getState().gifr[key]
}
/* ---------------------- */
export function goto(routeName: types.routes, params = null) {
  /* todo[optional]:add types here(pages names) */
  try {
    if (sharedVars.mainScrollViewRef) sharedVars.mainScrollViewRef.scrollTo({ animated: true, y: 0 })
  } catch (error) {/* in case this get changed by flatlist or something */
    console.log(error)
  }
  store.dispatch(push(routeName, params))
  /* ------------ */
  /* note:this is temporary till fixing react router native problems */
  try {
    sharedVars.his.push(routeName, params)
  } catch (error) {
    console.error(error)
  }
}
/* ---------------------- */
export function goBack() {
  try {
    if (sharedVars.mainScrollViewRef) sharedVars.mainScrollViewRef.scrollTo({ animated: true, y: 0 })
  } catch (error) {/* in case this get changed by flatlist or something */
    console.log(error)
  }
  store.dispatch(routerGoBack())
  /* ------------ */
  /* note:this is temporary till fixing react router native problems */
  try {
    sharedVars.his.goBack()
  } catch (error) {
    console.error(error)
  }
}
/* ---------------------- */
export function getRouteName(): types.routes {
  const rt = store.getState().router
  const tmp = rt.location.pathname?.split('/')
  if (!tmp.length) throw 'unknown route!'
  return tmp[1] as any
}
/* ---------------------- */
export function getRouteParams() {
  const rt = store.getState().router
  const routeName = rt.location.state
  return routeName
}
// /* ---------------------- */
// export function getPrvPage() {
//   const pages = history.entries
//   return pages[pages.length - 2].pathname
// }
/* ================================================================== */
export function isNumber(n: any) {
  return new Promise(resolve => resolve(!isNaN(n)))
}
/* =========================== */
export function clearStorage(): Promise<boolean> {
  return new Promise(async resolve => {
    await localStorageLib.clearAll()
    return resolve(true)
  })
}
/* =========================== */
export function setStorage(key, argToSet): Promise<boolean> {
  return new Promise(resolve => {
    localStorageLib.set(key, JSON.stringify(argToSet))
    return resolve(true)
  })
}
/* =========================== */
export function getStorage(key: string): Promise<any> {
  return new Promise(resolve => {
    const tmp = localStorageLib.get(key)
    if (tmp) {
      return resolve(JSON.parse(localStorageLib.get(key)))
    } else {
      resolve(null)
    }
  })
}
/* =========================== */
export function randomGaussian(mean = null, sd = null) {
  let y1, x1, x2, w, y2
  let previous = false
  if (previous) {
    y1 = y2
    previous = false
  } else {
    do {
      x1 = this.random(2) - 1
      x2 = this.random(2) - 1
      w = x1 * x1 + x2 * x2
    } while (w >= 1)
    w = Math.sqrt(-2 * Math.log(w) / w)
    y1 = x1 * w
    y2 = x2 * w
    previous = true
  }

  const m = mean || 0
  const s = sd || 1
  return y1 * s + m
}
/* =========================== */
export function collectErrors(args: {
  val: string,
  match?: RegExp,
  max?: number,
  min?: number,
  matchErr?: string,
}) {
  /*\w: is a shortcut for [a-zA-Z0-9_]...4 to 20...$ is the end */
  //   const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  // const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  // const reg=new RegExp(args.match,'i') 
  // const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const res=

  const errors: string[] = []
  if (args.match && !args.match.test(args.val)) {
    errors.push(args.matchErr ? args.matchErr + '\n' : 'not allowed\n')
  }
  if (args.max && args.val.length > args.max) {
    // if (args.max && args.val.length >= args.max) {
    errors.push(`cant be more than ${args.max}\n`)
  }
  if (args.min && args.val.length < args.min) {
    // if (args.min && args.val.length <= args.min) {
    errors.push(`cant be less than ${args.min}\n`)
  }
  // if(errors.length>0)return errors
  // return false
  return errors
  /* /^
  (?=.*\d)          // should contain at least one digit
  (?=.*[a-z])       // should contain at least one lower case
  (?=.*[A-Z])       // should contain at least one upper case
  [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters
$/ */
}
/* --------------- */
/* ============================================================ */
export function resetScroll() {
  /* todo:we also need to disable current loading process(loadMore2) */
  // helpers.showSpinner({ content: '' })
  return new Promise(resolve => {

    this.range = 0 /* reset range */
    // this.loadMoreIndexr = 1
    // this.scrollRef.eve
    this.loadingMore = true /* disable scroll event(note:this var has a different usage but since this variable also disables scroll event we've used this) */
    this.setState({ loadingMore2: true, })
    // this.scrollRef.scrollTo({ x: 0, y: 0, animated: false })
    try {
      this.animXVal.stopAnimation(() => {
        this.animXVal.setValue(0)
        this.scrollRef.scrollToIndex({ animated: true, index: 0 })
      })
    } catch (error) {
      if (error.name == 'Invariant Violation') {
        // console.log(error)
        console.log('Invariant Violation: scrollToIndex out of range: 0 vs -1')
      } else {
        console.error(error)
      }
    }
    setTimeout(() => {
      /* note:this is necessary since scrollTo is not a async fn */
      this.setState({ loadingMore2: false, })
      this.loadingMore = false
      return resolve(true)
      // helpers.showSpinner(false)
    }, 100)
  })
}
/* ============================================================ */
export function resetScroll2() {
  return new Promise(resolve => {
    this.range = 0 /* reset range */
    try {
      this.animXVal.stopAnimation(() => {
        this.animXVal.setValue(0)
      })
      this.scrollRef.scrollToIndex({ animated: false, index: 0 })
    } catch (error) {
      if (error.name == 'Invariant Violation') {
        console.log('Invariant Violation: scrollToIndex out of range: 0 vs -1')
      } else {
        console.error(error)
      }
    }
    return resolve(true)
  })
}
/* ============================================================ */
export function idShrinker(id: string) {
  return id.slice(0, 4).toLowerCase()
}
/* ============================================================ */
export function createAnim(args: { from, to, duration?: number }) {
  const animXVal = new Animated.Value(0)
  const timingOptions = { toValue: 1, useNativeDriver: true }
  if (args.duration) timingOptions['duration'] = args.duration
  const anim = Animated.timing(animXVal, timingOptions)
  const val = animXVal.interpolate({ inputRange: [0, 1], outputRange: [args.from, args.to] })
  function run(): Promise<boolean> {
    return new Promise(resolve => {
      anim.start(() => {
        animXVal.setValue(0)
        resolve(true)
      })
    })
  }
  return {
    val: val,
    run,
  }
}
/* ============================================================ */
export function showPupop(args: (false | {
  duration?: number,
  title: string,
  content?: string,
  icon?: string,
  type?: 'alert' | 'confirm',
  callbackFn?: Function,
  dontCloseAfterUserClick?: boolean,

})) {
  // helpers.firebaseFns.get()
  if (!args) {
    setStore({ popupDetail: { visible: false } })
    sharedVars.tmpPopupCallbackFn = () => { }
  } else {
    sharedVars.tmpPopupCallbackFn = args.callbackFn ? args.callbackFn : () => { }
    setStore({
      popupDetail: {
        visible: true,
        content: args.content,
        title: args.title,
        icon: args.icon,
        type: args.type,
      }
    })
  }
}
/* ---------- */
/** we use this fn instead of saving a callback fn in redux store and use it later when user click on ok/cancel.
 * 
 * note: we can define an event on reducers and call it from component (with a value true,false...) 
  but even there we needed to saved the callback we passed to showPopup fn. so that would be just a fancy way to directly call this fn from component
 */
export function callThePopupCallback(res) {
  setStore({ popupDetail: { visible: false } })
  sharedVars.tmpPopupCallbackFn(res)/* this is for unit-testing */
}
/* ============================================================ */
export function showToast(args: (false | {
  duration?: number,
  title?: string,
  content: string,
  type?: 'alert' | 'confirm',
  callbackFn?: Function,
  dontCloseAfterUserClick?: boolean,

})) {

  if (!args) {
    setStore({ toastDetails: { visible: false } })
  } else {
    // setStore({ toastDetails: { visible: false } })
    setStore({
      toastDetails: {
        visible: true,
        content: args.content,
        title: !args.title ? null : args.title,
        type: args.type,

        /* callbackFn: (res) => {
        if (!args.dontCloseAfterUserClick) setStore({ toastDetails: { visible: false } })
          if (args.callbackFn) args.callbackFn(res)
        } */
      }
    })

    if (sharedVars.toastTimer) clearTimeout(sharedVars.toastTimer)
    sharedVars.toastTimer = setTimeout(() => {
      setStore({ toastDetails: { visible: false } })
      if (args.callbackFn) args.callbackFn()
    }, args.duration ? args.duration : 2000)
  }
}
/* ============================================================ */
export function showSpinner(args: (false | {
  content?: string,
  duration?: number,
  title?: string,
  type?: 'alert' | 'confirm',
  /** note:this wont work if u dont use the duration  */
  callbackFn?: Function,
  // dontCloseAfterUserClick?: boolean,
})) {
  if (!args) {
    setStore({ spinnerDetails: { visible: false } })
  } else {
    setStore({
      spinnerDetails: {
        visible: true,
        content: args.content,
        title: args.title,
        type: args.type,
      }
    })

    if (sharedVars.spinnerTimer) clearTimeout(sharedVars.spinnerTimer)
    if (args.duration) {
      sharedVars.spinnerTimer = setTimeout(() => {
        setStore({ spinnerDetails: { visible: false } })
        if (args.callbackFn) args.callbackFn()
      }, args.duration)
    }
  }
}
/* ============================================================ */
/** note:this function might behave differently based on your webpack configs */
export function imgLoader(path: string) {
  const imageComponentPlatformQuirk = Platform.OS == 'web' ? 'assets/' : 'asset:/'
  return { uri: (imageComponentPlatformQuirk+'media/images/'+path)  }
  // return { uri: require('../myApp/media/images/' + path)  }
  // return { uri: require('../../../public/assets/media/images/'+path)  }
  // const assetDir_a = Platform.OS == 'web' ? './' : 'file:///android_asset'
}
 
