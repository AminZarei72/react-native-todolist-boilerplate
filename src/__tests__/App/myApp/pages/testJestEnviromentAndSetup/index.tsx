import 'react-native'
import * as React from 'react'
// https://callstack.github.io/react-native-testing-library/docs/api/
// import { render, screen, fireEvent, renderWithActualStore, waitForDomChange, cleanup, waitForElement, renderWithActualStore2, getByRole, getByText, } from '../../../../../App/utils/test-utils'
// import { render, screen, fireEvent, renderWithActualStore, waitForDomChange, cleanup, waitForElement, renderWithActualStore2, getByRole, getByText, } from '../../../../../App/utils/test-utils'
import * as mocks from '../../../../../App/utils/mocks'
// import Cmp from '../../../../../App/myApp/pages/Login'
import * as helpers from '../../../../../App/helpers'
import * as configs from '../../../../../App/myApp/actions/configs'
// import {delay} from '../../../../../App/helpers/AzPureFunctions2'
import * as myApp from '../../../../../App/myApp/actions'
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react-native'
import {expect, it, jest, test} from '@jest/globals'
import {Text, TouchableHighlight, View} from 'react-native'
import FakeFlatlist from '../../../../../FakeTestingCmp1'
import FakeLoginForm from '../../../../../FakeTestingCmp2'
// const expect2:any=expect
///////
// expect(getByText(/Click me/i).getAttribute("disabled")).toBe(null)
// expect(getByText(/Click me/i).closest('button')).toHaveAttribute('disabled');
// expect(getByText(/Click me/i).closest('button')).toBeDisabled();
/* ======================================== */
// export function isDisabled(element: Nullable<ReactTestInstance>): boolean {
//   return !!element?.props.onStartShouldSetResponder?.testOnly_pressabilityConfig()?.disabled;
// }
// expect(isDisabled(getByText("Cancel")).toEqual(false);
/* ======================================== */

it('fake a login form', async () => {
  const username = 'hi'
  const password = 'qwerty1234'
  let submittedData = {}
  // @ts-ignore
  const handleSubmit = jest.fn(data => (submittedData = data))
  const {getByText, getByPlaceholderText,debug,toJSON} = render(
    <FakeLoginForm onSubmit={handleSubmit} />,
  )
  const button = getByText(/submit/i)

  await fireEvent.changeText(getByPlaceholderText(/username/i), username)
  await fireEvent.changeText(getByPlaceholderText(/password/i), password)
  fireEvent.press(button)

  expect(submittedData).toEqual({password, username})
  expect(handleSubmit).toHaveBeenCalledWith({password, username})
  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(toJSON()).toMatchSnapshot()
  // debug()
})
/* ======================================== */
it('test a flatlist and a scrolling affect ', async () => {
  /* ---------------------------------- */
  const {getByText, getByTestId, debug,toJSON} = render(<FakeFlatlist />)
  getByText(/pizza/i)
  expect(() => getByText(/the impossible burger/i)).toThrow(
    'Unable to find an element with text: /the impossible burger/i',
  ) //intially not shown

  const eventData = {
    nativeEvent: {
      contentOffset: {
        x: 0,
        y: 425,
      },
      contentSize: {
        // Dimensions of the scrollable content
        height: 885,
        width: 328,
      },
      layoutMeasurement: {
        // Dimensions of the device
        height: 469,
        width: 328,
      },
    },
  }

  expect(getByTestId('flat-list')).toBeDefined()
  fireEvent.scroll(getByTestId('flat-list'), eventData)
  // await waitFor(() => expect(getByText(/the impossible burger/i)))
  //  console.log()
  // getByTestId('flat-list')
  await waitForElementToBeRemoved(() => getByText(/loading more dishes/i),{timeout:3000})
  await waitFor(() => expect(getByText(/the impossible burger/i)))
  expect(toJSON()).toMatchSnapshot()
  // debug()

  return
  /* ---------------------------------- */
  // /* ---------------------------------- */
  // const MyComponent = _props => (
  //   <View>
  //     <TouchableHighlight testID={'touchable-asd'}>
  //       <Text>{'Foo'}</Text>
  //     </TouchableHighlight>
  //   </View>
  // )

  // // let aaa=1
  // const pressedCallback = jest.fn(()=>{})
  // const { getByTestId,debug,getByRole,getByText } = render(<MyComponent onPress={pressedCallback} />)
  // debug()
  // // await delay(1000)
  // fireEvent.press(getByText(/Foo/i)) //didnt work
  // // fireEvent.press(getByTestId('touchable-asd')) //didnt work
 
  // // rnfireEvent.press(getByText('Foo').parent)
  // // expect(aaa).toEqual(2) //Expected mock function not to be called but it was called with: ["bar"]
  // expect(pressedCallback).toBeCalled() //Expected mock function not to be called but it was called with: ["bar"]
  // return
  // /* ---------------------------------- */
  /* new functions(just for learning) */
  // expect(innerText.props.style).toMatchObject({color: 'black'})
  // expect(counterText.props.children).toEqual(['Current count: ', 0])
  /* ---------------------------------- */
  /* main */
  // const {queryByText,getAllByTestId,debug,getAllByRole,getByTestId,getByText}=renderWithActualStore2(<Cmp />)
  // expect2(getByText(configs.loginTitleMsg,{exact:true})).toBeDefined()//ok
  // expect(getByTestId(/login-btn/i)).toBeDefined() //does not work!
  /* ---------------------------------- */

  // await delay(1000)
  // debug(queryByText(configs.loginTitleMsg+' asd ').toString())
  // const asd=
  // console.log(asd)
  // debug(getByTestId('login'))
  // console.log(getByTestId('login'))
  // debug(getByTestId('login')).toBeDisabled()
  // debug(getAllByRole('button'))
  // expect(getAllByRole('button')[0]).toBeDisabled()
  // debug()

  // // @ts-ignore
  // expect(getByText(/login/i)).toBeDisabled()
  // expect(getAllByTestId(/login/i)).toBeDisabled()
})
// await waitFor(() => getByText('Banana ready'));
// const detailsScreen = within(getByA11yHint('Details Screen'));
// expect(detailsScreen.getByText('Some Text')).toBeTruthy();
// expect(detailsScreen.getByDisplayValue('Some Value')).toBeTruthy();
// expect(detailsScreen.queryByA11yLabel('Some Label')).toBeTruthy();
// await expect(detailsScreen.findByA11yHint('Some Label')).resolves.toBeTruthy();
/* ======================= */

// const {getByText, getByTestId, getAllByTestId, queryByText} = render(
//   <Home />,
// );
// const input = getByTestId('adder-input');
// const button = getByText('Add');
// fireEvent.changeText(input, 'item0');
// fireEvent.press(button);
// fireEvent.changeText(input, 'item1');
// fireEvent.press(button);
// const item0 = getByText('item0');
// const item1 = getByText('item1');

// expect(item0).toBeDefined();
// expect(item1).toBeDefined();
// fireEvent.press(getAllByTestId('cell-delete')[0]);
// expect(queryByText('item0')).toBeNull();
// const list = getByTestId('list');

/* ======================= */
//mock again and see if this test works again
/* ======================= */

// console.log()
// screen.debug(screen.getByTestId('switch1'))
// fireEvent.click(screen.getByTestId('switch1').querySelector('input'))
// fireEvent.change(screen.getByTestId('switch1').querySelector('input'),{
//   target: { value: true }
// })

// fireEvent.click(screen.getByTestId('switch1'),)
// /* ======================= */

// // await delay(1000) /* wait till setStore apply affects(note:this is necessary so component gets updated) */
// await waitFor(() => { }, { timeout: 1000 })
// // let targetUserId
// // await waitFor(() => {
// // const targetUserId = helpers.idShrinker(Object.keys(helpers.getStore('confirmedSales'))[0])
// expect(screen.queryByText(targetUserId)).not.toBeInTheDocument()
// // }, { timeout: 1000 })
// /* ======== */
// /* dont rm these for now [aksjd3u2] */
// // await gif.setStore_({ states_sales_onlySpecificItems: false },1000) //ok with redux-promise
// // await helpers.setStore({ states_sales_onlySpecificItems: false }) //fails
// // await gif.setStore__({ states_sales_onlySpecificItems: false },1000) //ok with redux-promise
// /* ======== */
// /* ok */
// helpers.setStore({ states_sales_onlySpecificItems: true }) //ok normal
// // await delay(1000) /* wait till setStore apply affects(note:this is necessary so component gets updated) */
// // helpers.resetStore() //ok normal

// // await delay(1000) /* wait till setStore apply affects(note:this is necessary so component gets updated) */
// /* ======== */
// // console.log(222, helpers.getStore('states_sales_onlySpecificItems'))
// // await delay(100) /* ksjdhf2ui3 */
// console.log(targetUserId)
// // screen.debug()
// // await waitForDomChange()
// await waitFor(() => {
//   screen.debug(screen.queryByText(targetUserId))
//   expect(screen.queryByText(targetUserId)).toBeInTheDocument()
// }, { timeout: 1000 })
// // screen.debug(screen.getByTestId('switch1'))
// // screen.debug(screen.queryByText(targetUserId))

// const asd = screen.queryByText('mzq6')
// screen.debug()
// expect(screen.queryByText('mzq6')).not.toBeInTheDocument()
// screen.debug(screen.queryByText(targetUserId))
/* this also works
expect(() => getByText('your text')).toThrow('Unable to find an element');
 */

// test('test redux configurations and middlewares', async () => {

//   // const asd=
//   // await helpers.setStore({ states_sales_onlySpecificItems: true })

//   // const firstAction: any = () => {
//   //   return async (dispatch) => {
//   //     const response: Promise<unknown> = dispatch({
//   //       type: 'states_sales_onlySpecificItems',
//   //       payload: fakeFetch(),
//   //     })
//   //     response.then((data) => {
//   //       return data
//   //     })
//   //   }
//   // }

//   // const promiseLogin = () => ({
//   //   type: 'states_sales_onlySpecificItems',
//   //   payload: {
//   //     promise: fakeFetch().then(i=>i),
//   //   }
//   // })

//   // const asdasdf:any='states_sales_onlySpecificItems_FULFILLED'
//   // await store.dispatch(firstAction)
//   // console.log(2, helpers.getStore('states_sales_onlySpecificItems' as any))
//   // // console.log(2, store.getState())
//   // // store.dispatch({ type: 'states_sales_onlySpecificItems', payload: false })
//   // // console.warn(2,helpers.getStore('states_sales_onlySpecificItems'))

//   // const states_sales_limitedItems = helpers.getStore('states_sales_limitedItems')
//   // console.log(111, helpers.getStore('states_sales_limitedItems').length)

//   // const asd = () => {
//   //   let res = []
//   //   for (let index = 0; index < 100000; index++) {
//   //     res = [...res, ...states_sales_limitedItems]
//   //   }
//   //   return res
//   // }

//   // gif.setStore_({ states_sales_limitedItems: asd() })
//   // console.log(222, helpers.getStore('states_sales_limitedItems').length)
//   // gif.setStore_({ states_sales_onlySpecificItems: true })

// });

/* =========================== */
// import 'react-native'
// import React from 'react'
// import {fireEvent, render} from '@testing-library/react-native'
// import Login from '../src/components/Login'
// import {expect, it, jest} from '@jest/globals'

// it('renders correctly', async () => {
//   const username = 'hi'
//   const password = 'qwerty1234'
//   let submittedData = {}
//   // @ts-ignore
//   const handleSubmit = jest.fn(data => (submittedData = data))
//   const {getByText, getByPlaceholderText} = render(
//     <Login onSubmit={handleSubmit} />,
//   )
//   const button = getByText(/submit/i)

//   await fireEvent.changeText(getByPlaceholderText(/username/i), username)
//   await fireEvent.changeText(getByPlaceholderText(/password/i), password)
//   fireEvent.press(button)

//   expect(submittedData).toEqual({password, username})
//   expect(handleSubmit).toHaveBeenCalledWith({password, username})
//   expect(handleSubmit).toHaveBeenCalledTimes(1)
// })
/* =========================== */
// import 'react-native'
// import React from 'react'
// import EasyButton from '../src/components/EasyButton'
// import {render} from '../src/test/test-utils'
// import {expect, it} from '@jest/globals'
// import {ReactTestInstance} from 'react-test-renderer'

// it('renders with the light styles for the light theme', () => {
//   const {getByText} = render(<EasyButton>Click me!</EasyButton>)
//   const innerText = getByText(/click/i)
//   const button = innerText.parent as ReactTestInstance

//   expect(button.props.style).toMatchObject({backgroundColor: 'white'})
//   expect(innerText.props.style).toMatchObject({color: 'black'})
// })

// it('renders with the dark styles for the dark theme', () => {
//   const {getByText} = render(<EasyButton>Click me!</EasyButton>, {
//     theme: 'dark',
//   })
//   const innerText = getByText(/click/i)
//   const button = innerText.parent as ReactTestInstance

//   expect(button.props.style).toMatchObject({backgroundColor: 'black'})
//   expect(innerText.props.style).toMatchObject({color: 'white'})
// })
/* =========================== */

// const onPressMock = jest.fn();
// const eventData = {
//   nativeEvent: {
//     pageX: 20,
//     pageY: 30,
//   },
// };

// const { getByText } = render(
//   <View>
//     <TouchableOpacity onPress={onPressMock}>
//       <Text>Press me</Text>
//     </TouchableOpacity>
//   </View>
// );

// fireEvent.press(getByText('Press me'), eventData);
// expect(onPressMock).toHaveBeenCalledWith(eventData);
/* =========================== */
/* =========================== */
/* =========================== */
// const onEventMock = jest.fn();
//   const { getByPlaceholderText } = render(
//     // MyComponent renders TextInput which has a placeholder 'Enter details'
//     // and with `onChangeText` bound to handleChangeText
//     <MyComponent handleChangeText={onEventMock} />
//   );

//   fireEvent(getByPlaceholderText('change'), 'onChangeText', 'ab');
//   expect(onEventMock).toHaveBeenCalledWith('ab');
/* =========================== */

// const onBlurMock = jest.fn();

// const { getByPlaceholderText } = render(
//   <View>
//     <TextInput placeholder="my placeholder" onBlur={onBlurMock} />
//   </View>
// );
/* =========================== */
/* kajshdi2u3 */
// type Props = {|
//   +dummyID?: string,
// |};

// const TextPress = ({ dummyID }: Props) => (
//   <View testID={dummyID}>
//     <Text testID="text-button">Press me</Text>
//   </View>
// );

// test('shallow rendering React elements', () => {
//   const { output } = shallow(<TextPress dummyID="2" />);

//   expect(output).toMatchSnapshot();
// });

// test('shallow rendering React Test Instance', () => {
//   const { getByTestId } = render(<TextPress />);
//   const { output } = shallow(getByTestId('text-button'));

//   expect(output).toMatchSnapshot();
// });
/* =========================== */
/* mock a whole library and use one of its functions */
/*   import { myFunction } from "./library";
  jest.mock("./library");

  const mockMyFunction = myFunction as jest.MockedFunction<typeof myFunction>;
  expect(mockMyFunction.mock.calls[0][0]).toBe(42) */
/* =========================== */
