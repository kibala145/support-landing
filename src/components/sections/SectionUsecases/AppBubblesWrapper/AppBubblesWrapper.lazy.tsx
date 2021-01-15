import React, { lazy, Suspense } from 'react'
import { Props } from './AppBubblesWrapper'

const LazyAppBubblesWrapper = lazy(() => import('./AppBubblesWrapper'))

const AppBubblesWrapper = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppBubblesWrapper {...props} />
  </Suspense>
)

export default AppBubblesWrapper
