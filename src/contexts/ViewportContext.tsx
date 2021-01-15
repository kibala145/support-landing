import React, { useEffect, useState } from 'react'

export const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1366,
  xl: 1920
} as const

type IBreakpoints = typeof breakpoints
export type IBreakpointsKey = keyof IBreakpoints
type IMediaQueries = Record<IBreakpointsKey, string>
type IMediaQueriesMatches = Record<IBreakpointsKey, boolean>
interface IBreakpointContext extends IMediaQueriesMatches {
  current: IBreakpointsKey
}

export const mediaQueries = (Object.keys(breakpoints) as Array<IBreakpointsKey>).reduce((acc, item) => {
  acc[item] = `(min-width: ${breakpoints[item]}px)`
  return acc
}, {} as IMediaQueries)

const defaultValue = {} as IBreakpointContext
const BreakpointContext = React.createContext(defaultValue)

const BreakpointProvider: React.FC<{ queries: IMediaQueries }> = ({ queries, children }) => {
  const [queryMatch, setQueryMatch] = useState<IMediaQueriesMatches>({} as IMediaQueriesMatches)
  const [current, setCurrent] = useState<IBreakpointsKey>('sm')

  useEffect(() => {
    const mediaQueryLists = {} as Record<IBreakpointsKey, MediaQueryList>
    const keys = Object.keys(queries) as Array<keyof IMediaQueries>

    // To check whether event listener is attached or not
    let isAttached = false

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, media) => {
        acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches)
        return acc
      }, {} as IMediaQueriesMatches)
      //Setting state to the updated matches
      // when document either starts or stops matching a query
      setQueryMatch(updatedMatches)
    }

    if (window && window.matchMedia) {
      const matches = {} as IMediaQueriesMatches
      keys.forEach((media) => {
        mediaQueryLists[media] = window.matchMedia(queries[media])
        matches[media] = mediaQueryLists[media].matches
      })
      //Setting state to initial matching queries
      setQueryMatch(matches)
      isAttached = true
      keys.forEach((media) => mediaQueryLists[media].addEventListener('change', handleQueryListener))
    }

    return () => {
      //If event listener is attached then remove it when deps change
      if (isAttached) {
        keys.forEach((media) => mediaQueryLists[media].removeEventListener('change', handleQueryListener))
      }
    }
  }, [queries])

  useEffect(() => {
    const cur =
      ([...Object.keys(queryMatch)] as Array<keyof typeof queryMatch>).reverse().find((item) => queryMatch[item]) ??
      'sm'
    setCurrent(cur)
  }, [queryMatch])

  return <BreakpointContext.Provider value={{ ...queryMatch, current }}>{children}</BreakpointContext.Provider>
}

const useBreakpoint = () => {
  const context = React.useContext(BreakpointContext)
  if (context === defaultValue) {
    throw new Error('useBreakpoint must be used within BreakpointProvider')
  }
  return context
}

export { useBreakpoint, BreakpointProvider }

export const BreakpointProviderDefault: React.FC<React.ReactNode> = ({ children }) => (
  <BreakpointProvider queries={mediaQueries}>{children}</BreakpointProvider>
)
