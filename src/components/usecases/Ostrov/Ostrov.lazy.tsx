import React, { lazy, Suspense } from 'react'

const LazyOstrov = lazy(() => import('./Ostrov'))

const Ostrov = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyOstrov {...props} />
  </Suspense>
)

export default Ostrov
