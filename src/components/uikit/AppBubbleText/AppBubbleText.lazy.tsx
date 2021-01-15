import React, { lazy, Suspense } from 'react'

const LazyAppBubble = lazy(() => import('./AppBubbleText'))

const AppBubbleText = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyAppBubble {...props} />
  </Suspense>
)

export default AppBubbleText
