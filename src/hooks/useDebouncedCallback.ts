import { useEffect, useRef } from 'react'

export function useDebouncedCallback<T extends unknown[]>(callback: (...args: T) => void, delay: number) {
  const argsRef = useRef<T>()
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  const cleanup = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
  }

  useEffect(() => {
    cleanup()
  }, [])

  return function deboundcedCallback(...args: T) {
    argsRef.current = args

    cleanup()

    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current)
      }
    }, delay)
  }
}
