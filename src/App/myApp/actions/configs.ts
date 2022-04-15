import { Platform } from 'react-native'
import * as types from '../types'

export const development = true
/** paths that modules like menu or tabs must be invisible  */
export const pathsToBeInvisible:types.routes[] = [
    '',
    'Init',
    // '/Login',
]

/* ======================================== */
export const host = 'http://localhost'  
const fbAppName='todolist-1'
export const firebase_fireStore_port = 9101
export const firebase_fireStore_url = host + ':' + firebase_fireStore_port + '/v1/projects/'+fbAppName+'/databases/(default)/documents'
 
/* const firebase_host = 'https://firestore.googleapis.com/v1/projects/PROJECT_HERE/databases/(default)/documents' */
/* ======================================== */ 

// //@ts-ignore
// import aboutMeImage from '../media/aminZarei.jpg'
//@ts-ignore
//  defaultBgImg = require('../media/images/bgs/bg1.jpg')
// const aboutMeImage=require('../media/images/aminZarei.jpg')
// export {
//     assetDir_a,
//     defaultMarketerImg,
//     defaultBgImg,
//     defaultMarketerImgPlain,
//     imageComponentPlatformQuirk,
//     defaultBgPlain,
//     // aboutMeImage, 
// }
/* ========================================== */
/* texts */
export const appName = 'rn-boilerplate'
export const aboutUs = {
    firstName: 'Amin',
    lastname: 'Zarei',
    number: 'https://github.com/aminZarei72',
    email: 'AminZarei.work@gmail.com',
    title: 'aboutUs',
    subtitle: 'a zero-config react-redux boilerplate for web and native and ready to publish.',
    descreiption: `
    a todoList app ready-to-publish boilerplate for rn web and android with redux,cypress,ts-firebase-rules,detox,rntl,paper and more
        - ts-firebase-rules: which let you write firebase *.rules files with typescript 
        - cypress/detox(e2e) and basic example
        - react-native-testing-library(unit-test) and basic example
        - Paper and useful Icons libraries
        - react-router
        - ...
        visit https://github.com/aminZarei72/react-native-todolist-boilerplate for more detail
    `,
    aboutMe: `
    i'm a fullstack developer who loves programming with web technologies like react-native,
    clouds and testing frameworks which made developing apps more fun and stable.
    https://github.com/aminZarei72/
    `,
}
export const loginTitleMsg = 'wellcome to ' + appName
export const initilizingMsg = 'initializing...' 
