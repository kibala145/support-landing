import React, { lazy, Suspense } from 'react'

const LazyArchipelag = lazy(() => import('./Archipelag'))

const Archipelag = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyArchipelag {...props} />
  </Suspense>
)

export default Archipelag
