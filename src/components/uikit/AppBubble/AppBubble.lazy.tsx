import React, { lazy, Suspense } from 'react'
import { Props } from './AppBubble'

const LazyAppBubble = lazy(() => import('./AppBubble'))

const AppBubble = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppBubble {...props} />
  </Suspense>
)

export default AppBubble
