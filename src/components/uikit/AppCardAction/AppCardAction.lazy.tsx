import React, { lazy, Suspense } from 'react'
import { Props } from './AppCardAction'

const LazyAppCardAction = lazy(() => import('./AppCardAction'))

const AppCardAction = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppCardAction {...props} />
  </Suspense>
)

export default AppCardAction
