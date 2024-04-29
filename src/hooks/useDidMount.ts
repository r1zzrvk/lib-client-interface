import { useEffect, useRef } from 'react'

type EffectCallback = () => void | (() => void | undefined)

export const useDidMount = (effect: EffectCallback) => {
  const hasMounted = useRef(false)

  useEffect(() => {
    if (!hasMounted.current) {
      effect()
      hasMounted.current = true
    }
  }, [effect])
}
