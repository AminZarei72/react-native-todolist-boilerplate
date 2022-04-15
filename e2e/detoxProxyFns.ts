import { by, device, expect, element, web, waitFor, } from 'detox'
// import except from ''
const itemVisivilityTimeout = 3000
/* ======================================= */
/* await waitFor(element(by.text('Text5'))).toBeVisible().whileElement(by.id('ScrollView630')).scroll(50, 'down'); */
// const attributes = await (await dpf.getByTestId('popup-title')).getAttributes()
/* ======================================= */
/* Note:just search for text instead(e.g dpf.getByText('ERROR')) */
export async function contain(args: {
    id: string,
    text: string
}) {
    console.info('contain ', args)
    const target = await getByTestId(args.id)
    await waitFor(target).toHaveText(args.text).withTimeout(itemVisivilityTimeout)
    // await target.tap(args.point ? args.point : null)
    // await waitFor(element(by.id('UniqueId336'))).toExist().withTimeout(20000),
}
/* ======================================= */
/* Note:just search for text instead(e.g dpf.getByText('ERROR')) */
export async function contain2(args: {
    id: string,
    text: string
}) {
    console.info('contain ', args)
    // .tap()
    // const target = await getByTestId(args.id)
    // await target.tap()
    const target = element(by.id(args.id).withDescendant(by.text(args.text)))
    await waitFor(target).toBeVisible().withTimeout(itemVisivilityTimeout)
    return target
    // await waitFor(target).toHaveText(args.text).withTimeout(itemVisivilityTimeout)
    // await target.tap(args.point ? args.point : null)

    // await waitFor(target).toExist().withTimeout(20000)
}
/* ======================================= */
export async function wait(timeMs = 3000) {
    console.info('wait ', timeMs)
    return new Promise(resolve => setTimeout(() => { resolve(1) }, timeMs))
}

// web()
/* ======================================= */
export async function getByTestId(id: string, index?: number) {
    /* todo:use subfunctions here so we can use it like get().click */
    console.info('getByTestId ', id)
    const target = element(by.id(id)).atIndex(index ? index : 0)
    await waitFor(target).toBeVisible(1).withTimeout(itemVisivilityTimeout)
    console.log('id-ok')
    return target
}
/* ======================================= */
/**
 * *Note:Detox uses exact string of the parent element.
 * so if you search for part of a text in a tag it wont find it.
 * (this also includes spaces!)
 *  */
export async function getByText(text: string, index?: number) {
    console.info('getByText ', text)
    // const rx = new RegExp(text, 'i')
    // rx
    let target
    try {
        target = element(by.text(text)).atIndex(index ? index : 0)
        await waitFor(target).toBeVisible().withTimeout(itemVisivilityTimeout)
        console.log('text-ok')
        return target
    } catch (error) {
        target = element(by.label(text)).atIndex(index ? index : 0)
        await waitFor(target).toBeVisible().withTimeout(itemVisivilityTimeout)
        console.log('lable-ok')
        return target
    }
}
/* -------------------------------------- */
export async function shouldNotExist(id: string) {
    console.info('shouldNotExist ', id)
    const target = element(by.id(id))
    await waitFor(target).not.toExist().withTimeout(itemVisivilityTimeout)/* .toBeNull() */
}
/* -------------------------------------- */
export async function click(args: {
    id: string,
    point?: { x: number, y: number }
    index?: number,
    /** 
     * this fn is a temporary solve for Detox click on flatlist items issue
    */
    force?: boolean,
}) {
    console.info('click ', args.id)
    const target = await getByTestId(args.id, args.index)
    if (!args.force) {
        await target.tap(args.point ? args.point : null)
        return target
    } else {
        await target.multiTap(2)
        return target
    }
}
/* -------------------------------------- */
export async function clickOnText(args: {
    text: string,
    point?: { x: number, y: number },
    index?: number,
    /** 
    * this fn is a temporary solve for Detox click on flatlist items issue
   */
    force?: boolean
}) {
    console.info('clickOnText ', args.text)
    /* todo:how to get item inside of another item in detox (this can be replaced with .atIndex(1)) */
    // await waitFor(element(by.text('Text5'))).toBeVisible().whileElement(by.id('ScrollView630')).scroll(50, 'down');
    // const target = element(by.text(args.text))
    // let finalTarget=args.index?target.atIndex(args.index):target
    // if(args.index)target=target.atIndex(1)
    const target = await getByText(args.text, args.index)
    if (!args.force) {
        await target.tap(args.point ? args.point : null)
        return target
    } else {
        await target.multiTap(2)
        return target
    }

    // await waitFor(element(by.id('UniqueId336'))).toExist().withTimeout(20000),
}
/* -------------------------------------- */
export async function scrollTo(args: {
    id: string,
    direction: "left" | "right" | "top" | "bottom",
}) {
    console.info('scrollTo ', args.id)
    const target = await getByTestId(args.id)
    // await expect(target).toBeVisible()
    let swipeDirection: any = args.direction
    let scrollDirection: any = args.direction
    switch (args.direction) {
        case 'bottom':
            swipeDirection = 'up'
            scrollDirection = 'down'
            break;
        case 'top':
            swipeDirection = 'down'
            scrollDirection = 'up'
            break;
        case 'left':
            swipeDirection = 'right'
            scrollDirection = 'left'
            break;
        case 'right':
            swipeDirection = 'left'
            scrollDirection = 'right'
            break;
        default: break;
    }

    // await target.scrollTo('bottom') 
    await target.swipe(swipeDirection, 'fast', 0.5, NaN, 0.5).catch(async e => {
        console.warn('swipe didnt work ,trying scroll ')
        await target.scroll(300, scrollDirection, NaN, 0.5)
    })
    //     await target.scroll(200, 'down', NaN, 0.5).catch(e => false)
    //     await target.scroll(300, 'down', NaN, 0.5).catch(e => false)
    //     await target.scroll(400, 'down', NaN, 0.5).catch(e => false)
    // console.log(8)
    // await target.scroll(100, 'down', NaN, 0.3).catch(e => false)
    // await target.scroll(200, 'down', NaN, 0.4).catch(e => false)
    // await target.scroll(300, 'down', NaN, 0.5).catch(e => false)
    // await target.scroll(400, 'down', NaN, 0.6).catch(e => false)

    // await target.scroll(100, 'down', 0.2, 0.2).catch(e => false)
    // await target.scroll(100, 'down', 0.3, 0.3).catch(e => false)
    // await target.scroll(200, 'down', 0.4, 0.4).catch(e => false)
    // await target.scroll(300, 'down', 0.5, 0.5).catch(e => false)
    // await target.scroll(400, 'down', 0.6, 0.6).catch(e => false)

    // await target.swipe(asd, 'fast', 0.9, 0.3, 0.4)
    // await target.swipe(asd, 'fast', 0.9, 0.5, 0.5)
    // for (let iii = 0; iii < 10; iii++) {
    //     for (let jjj = 0; jjj < 10; jjj++) {
    //         const res = await target.swipe(asd, 'fast', 0.7, 0.1 * iii, 0.1 * jjj)
    //             .catch(e => 'false')
    //         if (res !== 'false') {
    //             console.log(0.1 * iii, 0.1 * jjj)
    //         }
    //         await wait(1000)
    //     }
    // }

    return target
}
// /* -------------------------------------- */
// export async function scrollTo(args: {
//     id: string,
//     direction: Detox.Direction,
// }) {
//     console.info('scrollTo ', args.id)
//     const target = await getByTestId(args.id)
//     // await expect(target).toBeVisible()
//     let asd: any = ''
//     if (args.direction == 'bottom') asd = 'down'
//     if (args.direction == 'top') asd = 'up'

//     await target.scrollTo(asd)
//     return target
//     const asdqwe = await target.getAttributes()
//     console.log(asdqwe)

//     await target.swipe(asd, 'fast', 0.2, 0.7, 0.7)
//     // await target.longPressAndDrag()
//     // await element(by.id(args.id)).longPressAndDrag(2000, NaN, NaN, element(by.id('target')), NaN, NaN, 'fast', 0);
//     // await target.scrollTo(asd)

//     // await waitFor(element(by.id('asdasd'))).toBeVisible()
//     //     .whileElement(by.id(args.id))
//     //     .scroll(100, 'down');
//     // await target.swipe('down', 'fast', 0.5, 0.2, 0.5).catch(e => false)
//     // await target.scrollTo(args.direction).catch(e => false)
//     // await target.swipe(asd, 'slow').catch(e => false)
//     // await target.scroll(200, 'down', NaN, 0.5).catch(e => false)
//     // await target.scroll(100, 'down', NaN, 0.85).catch(e => false)
//     // await target.scrollTo('top').catch(e => false)
//     // await target.scrollTo('left').catch(e => false)
//     // await target.scrollTo('right').catch(e => false)
// }
/* -------------------------------------- */
export async function type(args: {
    id: string,
    text: string,
    clean?: boolean,
}) {
    console.info('type on ', args.id)
    const target = await getByTestId(args.id)
    // await expect(target).toBeVisible()
    if (args.clean) {
        await target.clearText()
    }
    await target.typeText(args.text)
}
/* -------------------------------------- */
// export async function clean(id: string) {
//     const target = getByTestId(id)
//     await expect(target).toBeVisible()
//     await target.clearText()
// }
/* -------------------------------------- */
// export * as dpf
