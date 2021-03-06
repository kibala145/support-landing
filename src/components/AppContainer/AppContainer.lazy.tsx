import React, { lazy, Suspense } from 'react'

const LazyAppSection = lazy(() => import('./AppContainer'))

const AppContainer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyAppSection {...props} />
  </Suspense>
)

export default AppContainer
