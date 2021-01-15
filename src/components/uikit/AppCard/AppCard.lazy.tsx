import React, { lazy, Suspense } from 'react'
import { Props } from './AppCard'

const LazyAppCard = lazy(() => import('./AppCard'))

const AppCard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppCard {...props} />
  </Suspense>
)

export default AppCard
