import React, { lazy, Suspense } from 'react'

const LazyAppSection = lazy(() => import('./AppSection'))

const AppSection = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyAppSection {...props} />
  </Suspense>
)

export default AppSection
