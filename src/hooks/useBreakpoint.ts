import { theme } from '@constants'
import { useCallback, useEffect, useState } from 'react'

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(0)
  const [sizes, setSizes] = useState({
    isMob: false,
    isTablet: false,
    isSm: false,
    isMd: false,
    isLg: false,
  })

  const widthChecker = useCallback(() => {
    const large = breakpoint >= theme.breakpoints.lg
    const medium = breakpoint >= theme.breakpoints.md
    const small = breakpoint >= theme.breakpoints.sm
    const tablet = breakpoint >= theme.breakpoints.tablet

    if (large) {
      setSizes({
        isMob: false,
        isTablet: false,
        isSm: false,
        isMd: false,
        isLg: true,
      })
    } else if (medium) {
      setSizes({
        isMob: false,
        isTablet: false,
        isSm: false,
        isMd: true,
        isLg: false,
      })
    } else if (small) {
      setSizes({
        isMob: false,
        isTablet: false,
        isSm: true,
        isMd: false,
        isLg: false,
      })
    } else if (tablet) {
      setSizes({
        isMob: false,
        isTablet: true,
        isSm: false,
        isMd: false,
        isLg: false,
      })
    } else {
      setSizes({
        isMob: true,
        isTablet: false,
        isSm: false,
        isMd: false,
        isLg: false,
      })
    }
  }, [breakpoint])

  const resize = () => {
    setBreakpoint(window.innerWidth)
  }

  useEffect(() => {
    resize()
    window.addEventListener('resize', resize)
    widthChecker()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [widthChecker])

  return sizes
}
