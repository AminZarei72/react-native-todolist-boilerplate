import React from 'react'
import { BackHandler, I18nManager, Dimensions, Text, View, Platform } from 'react-native'
import { Provider } from 'react-redux'
import store from './utils/store'
import { DefaultTheme, DarkTheme, configureFonts, Provider as PaperProvider, Portal, ProgressBar } from 'react-native-paper'
import Router from './utils/Router'
import EsEnvUiContentManager from './myApp/pages/EsEnvUiContentManager'
import Toast from './myApp/pages/Toast'
// import * as configs from './myApp/actions/configs'
// import * as types from './myApp/actions/types' 
import * as myApp from './myApp/actions'
import Popup from './myApp/pages/Popup'
import EsTabs from './myApp/pages/EsTabs'
import PlusMenuBtn from './myApp/pages/PlusMenuBtn'
import TopBar from './myApp/pages/TopBar'
import LeftMenu from './myApp/pages/LeftMenu'
import Spinner from './myApp/pages/Spinner'
import * as helpers from './helpers'
/* --------------------------- */
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'tomato',
        // accent: 'yellow',
    },
    // fonts: configureFonts(fontConfig),
}
export default class App extends React.Component {
    /* --------------------------- */
    constructor(props) {
        super(props)
        BackHandler.addEventListener('hardwareBackPress', () => {
            const c_r = helpers.getRouteName()
            if ([ '/'].includes(c_r)) {
                helpers.showPupop({
                    title: 'exit',
                    content: 'exit the app?',
                    type: 'confirm',
                    callbackFn: (e) => {
                        if (e) {
                            try {
                                BackHandler.exitApp()
                            } catch (error) {
                                console.log(error)
                            }
                        }
                    }
                })
            } else {
                helpers.goBack()
            }
            return true
        })
    }
    /* --------------------------- */
    async componentDidMount() {
        helpers.showSpinner({ content: 'please wait for app to initilize...' })
        if (Platform.OS == 'web') {
            Dimensions.addEventListener('change', (asd) => {
                window.location.reload()
            })
        }
        await myApp.initAppAfterComponentDidMount()
        helpers.showSpinner(false)
    }
    /* --------------------------- */
    render() {
        return (
            <Provider store={store} >
                <PaperProvider theme={theme} >
                    <React.Fragment > 
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: Dimensions.get('window').width,
                            height: Platform.OS == 'web' ? Dimensions.get('window').height : Dimensions.get('window').height - 20,
                            overflow: 'hidden',
                        }}>
                            {/* ----------- */}
                            <View style={{
                                position: 'relative',
                                top: 0,
                                left: 0,
                                width: '100%'
                            }}>
                                <TopBar
                                    on_goBack_cb={() => helpers.goBack()}
                                    on_btn2_clicked={(args) => console.log('on_btn2_clicked')}
                                    on_btn3_clicked={() => console.log('on_btn3_clicked')}
                                    on_activateTopMenu_cb={(newState) => helpers.setStore({ activateTopMenu: newState })}
                                />
                            </View>
                            {/* ----------- */}
                            <View style={{}}>
                                <EsEnvUiContentManager   >
                                    <Router />
                                    {/* <Text>ok</Text> */}
                                </EsEnvUiContentManager>
                            </View>
                            <EsTabs />
                            {/* ----------- */}
                            <Portal>{/* Note: above tags have higher zIndex / portals in the same level have their own zindex */}
                                <PlusMenuBtn
                                    on_btn1_clicked={() => helpers.goto('AddNewTodo')}
                                    on_btn2_clicked={(args) => console.log('on_btn2_clicked')}
                                    on_btn3_clicked={() => console.log('on_btn3_clicked')}
                                    // on_onStateChange_cb={}
                                />
                                <LeftMenu
                                    on_blankSpacePressed_cb={() => helpers.setStore({ activateTopMenu: false })}
                                    on_profilePicturePressed_cb={async (marketerDetailsId) => {
                                        console.log('on_profilePicturePressed_cb')
                                    }}
                                    on_itemsPressed_cb={(page, params?) => {
                                        helpers.goto(page, params ? params : null)
                                        helpers.setStore({ activateTopMenu: false })
                                    }} 
                                />
                            </Portal>
                            <Portal>
                                <Spinner />
                            </Portal>
                            <Portal>
                                <Popup />
                            </Portal>
                            <Portal>
                                <Toast />
                            </Portal>
                            {/* ----------- */}
                        </View>
                    </React.Fragment>
                </PaperProvider>
            </Provider>
        )
    }
    /* --------------------------- */
}

