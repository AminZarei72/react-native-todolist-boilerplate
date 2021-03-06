/* 
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
 */
import node from 'node'
import React from 'react'
import reactDom from 'react-dom'

import { ReactTestInstance } from 'react-test-renderer'
// import '@testing-library/jest-native/extend-expect'

/* =================================== */
declare global {
  /* =================================== */
  namespace jest {
    interface Matchers<R, T> {
      toBeDisabled(): R
      toContainElement(element: ReactTestInstance | null): R
      toBeEmpty(): R
      toHaveProp(attr: string, value?: any): R
      toHaveTextContent(
        text: string | RegExp,
        options?: { normalizeWhitespace: boolean }
      ): R
      toBeEnabled(): R
      toHaveStyle(style: object[] | object): R
    }
  }
}


declare module '*.json' {
  const value: any
  export default value
}





declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  // import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>

  const src: string
  export default src
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}
