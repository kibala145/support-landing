import React, { lazy, Suspense } from 'react'
import { Props } from './AppRadio'

const LazyAppRadio = lazy(() => import('./AppRadio'))

const AppRadio = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppRadio {...props} />
  </Suspense>
)

export default AppRadio
