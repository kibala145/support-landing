import React, { lazy, Suspense } from 'react'

const LazyLeader = lazy(() => import('./Leader'))

const Leader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazyLeader {...props} />
  </Suspense>
)

export default Leader
