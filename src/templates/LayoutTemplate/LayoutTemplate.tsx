import { ReactNode, FC, useEffect, useCallback } from 'react'
import { Footer, Header, MobileMenu, Spacer } from '@ui-kit'
import { Flexbox, PaddingContainer } from '@components/atoms'
import { theme } from '@constants'
import { EAuthorizationStatus, EPagePaths, THeaderFooter } from '@types'
import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from '@hooks'
import { setAuthStatus, setUser } from '@reducers'
import { auth } from '@api'
import { useRouter } from 'next/router'

type TLayoutTemplateProps = {
  children: ReactNode
  headerFooterData: THeaderFooter
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children, headerFooterData }) => {
  const router = useRouter()
  const { pathname, push } = router
  const { header, footer } = headerFooterData || {}
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

      if (pathname === EPagePaths.PROFILE) {
        push(EPagePaths.LOGIN)
      }
    })
  }, [dispatch, pathname, push])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <Flexbox direction="column" height="100%">
      <Header headerData={header} />
      <PaddingContainer padding={theme.space.sm} mobOnly>
        {children}
      </PaddingContainer>
      <Spacer sizeMob={theme.space.xl4} size={0} />
      <MobileMenu />
      <Footer footerData={footer} />
    </Flexbox>
  )
}
