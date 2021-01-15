import React, { lazy, Suspense } from 'react'
import { Props } from './AppDialogUsecase'

const LazyAppDialogUsecase = lazy(() => import('./AppDialogUsecase'))

const AppDialogUsecase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppDialogUsecase {...props} />
  </Suspense>
)

export default AppDialogUsecase
