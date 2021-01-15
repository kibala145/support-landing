import React, { lazy, Suspense } from 'react'
import { Props } from './AppRadioOption'

const LazyAppRadioOption = lazy(() => import('./AppRadioOption'))

const AppRadioOption = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyAppRadioOption {...props} />
  </Suspense>
)

export default AppRadioOption
