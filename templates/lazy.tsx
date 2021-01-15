import React, { lazy, Suspense } from 'react'
import { Props } from './TemplateName'

const LazyTemplateName = lazy(() => import('./TemplateName'))

const TemplateName = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
)

export default TemplateName
