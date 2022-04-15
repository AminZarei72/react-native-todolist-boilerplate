module.exports = {
  /* ========= */
  // ...tsjPreset,  /* note:this overwrite transform so dont use it */
  preset: 'react-native',
  transform: {},
  /* note: jest already include rootDir so dont need that (plus it wont work with it because itll be something like rootDir/rootDir...)*/
  /* ----------- */
  testRegex: '(/src/__tests__/.*)\\.(tsx|ts)$',
  /*
  test one file:
    /.\/src\/__tests__\/App\/myApp\/pages\/EsWebView\/index.tsx/i
  or :
   npm run test -- src/__tests__/App/myApp/pages/EsWebView/index.tsx
  */
  /* ----------- */
  // testRegex: '(/src/__tests__/TopBar/index.*)\\.(tsx|ts)$',
  'setupFilesAfterEnv': [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/config/jestSetup.js',
    /* ----------- */
    /* ok */
    // 'react-app-polyfill/jsdom',
    /* ----------- */

  ],

  /* ----------- */
  /* new */
  clearMocks: true,
  // moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleNameMapper: {
    /* ------ */
    /* mock static files (if u really need them rm these) */
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js'
    /* ------ */
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    //   '<rootDir>/assetsTransformer.js',
    // '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  },

  transformIgnorePatterns: [
  ],
  /* ----------- */
//   collectCoverageFrom: [
//   '{src|projects}/**/{src|lib}/**/*.{ts}', 
// ],
}
