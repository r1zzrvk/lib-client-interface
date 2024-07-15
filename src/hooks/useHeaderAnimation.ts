import { useEffect, useState } from 'react'

export const useHeaderAnimation = (): boolean => {
  const [isScrolling, setIsScrolling] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isScrolling) {
        setIsScrolling(false)
      }
    }, 3000)

    const updateScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolling(scrolled)
      setLastScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updateScroll)

    return () => {
      window.removeEventListener('scroll', updateScroll)

      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [isScrolling])

  if (window.scrollY === 0) {
    return false
  }

  return !isScrolling || lastScrollPosition !== window.scrollY
}
