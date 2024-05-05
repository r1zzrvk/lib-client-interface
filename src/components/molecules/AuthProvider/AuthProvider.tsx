import { auth } from '@api'
import { useAppDispatch } from '@hooks'
import { setAuthStatus, setUser } from '@reducers'
import { EAuthorizationStatus, EPagePaths } from '@types'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { FC, ReactNode, useCallback, useEffect } from 'react'

type TAuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: FC<TAuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const { pathname, push } = router
  const dispatch = useAppDispatch()

  const checkAuth = useCallback(async () => {
    await onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user))
        dispatch(setAuthStatus(EAuthorizationStatus.AUTH))

        return
      }

      dispatch(setUser(null))
      dispatch(setAuthStatus(EAuthorizationStatus.NO_AUTH))

      if (pathname === EPagePaths.PROFILE || pathname === EPagePaths.MY_LISTS) {
        push(EPagePaths.LOGIN)
      }
    })
  }, [dispatch, pathname, push])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}
