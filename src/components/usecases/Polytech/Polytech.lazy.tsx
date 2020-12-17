import React, { lazy, Suspense } from 'react'

const LazyPolytech = lazy(() => import('./Polytech'))

const Polytech = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyPolytech {...props} />
  </Suspense>
)

export default Polytech
