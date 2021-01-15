import React, { lazy, Suspense } from 'react'
import { Props } from './AppUsecase'

const LazyAppUsecase = lazy(() => import('./AppUsecase'))

const AppUsecase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppUsecase {...props} />
  </Suspense>
)

export default AppUsecase
