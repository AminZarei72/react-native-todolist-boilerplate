
/* ===================================================== */
export type todoFormData = {
  title: string,
  comments: string, 
}
/* ===================================================== */
export type appData = {
  /* android */
  minimumAppVersion: number,
  deprecatedAppVersions: number[],

  /* web */
  // version: number,
  // fbServer: string,
  /* web(useful for acting like an app store) */
  // lastWebVersion: number,
  // minimumAppVersion: number,
  // acceptableBrowsers: { [x: string]: number },/* {firefox:12} */
  // deprecatedAppVersions: number[],
}
/* ===================================================== */

 
