
 
✨react-native-todolist-boilerplate✨
 
this is a todoList app ready-to-publish boilerplate for react-native web and android with redux,cypress,ts-firebase-rules,detox,rntl,paper and more.
we used metro for native platforms and webpak for web(which has better support/documentions for web )

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [used-libraries](#used-libraries)
- [Quick Start](#quick-start)
- [scripts](#scripts)
- [Author](#author)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## used-libraries

 - ts-firebase-rules: which let you write firebase *.rules files with typescript 
- cypress for web e2e testing + basic example
- detox for android e2e testing + basic example
- react-native-testing-library(rntl) for unit-testing + basic example
- Paper(as theme library) + useful Icons libraries
- react-router for routing both android and web

## Quick Start

```bash
npm i
npm run start
```

## scripts

- web 
    - `npm run start`
    
- android 
    - `npm run start:android`
    - open an emulator
    - `npm run android`

-testing
    - unit testing (with jest and react-native-testing-library) 
        - `npm run test`

    - cypress(e2e testing)
        - `npm run cy`

    - detox(e2e testing)
        this is the easiest way that i came up with to run detox tests 
        - first run your emulator 
        - then 
        modify "emulator.device.adbName"  in ".detoxrc" and insert your emulator name
        note: use `adb devices` to get list of available devices
        - then `npm run android`
        - then `npm run detox:buildForTheFirstTime `
        - then `npm run detox:start` 
        or `npm run detox:start:debug` in case somethings not right
        -note:dont forget to `adb reverse tcp:9101 tcp:9101` or any port you have changed in `firebase/firebase.json`

- firebase
    - install firebase cli 
        -note: i tested these with firebase-tools(cli)9.10.2 ,node v12.14.1 and npm 6.13.4
    - then `npm run firebase`
        -note:if you want to enable more of firebase features or modify ports, modify `firebase/firebase.json`

 - ts-firebase-rules(tsfr)
   - `npm run tsfr:watch`
 
 - build 
    - web : `npm run build`
    - android : `npm run build:android`


note:to see full list of useful scripts check package.json "scripts" section.

 ✨✨✨✨✨✨

## Author

- [amin zarei](https://github.com/aminZarei72)
    - aminzarei.work@gmail.com

## License
[MIT](https://github.com/aminZarei72)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
 
