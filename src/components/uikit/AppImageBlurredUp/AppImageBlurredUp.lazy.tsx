import React, { lazy, Suspense } from 'react'
import { Props } from './AppImageBlurredUp'

const LazyAppImageBlurredUp = lazy(() => import('./AppImageBlurredUp'))

const AppImageBlurredUp = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppImageBlurredUp {...props} />
  </Suspense>
)

export default AppImageBlurredUp
