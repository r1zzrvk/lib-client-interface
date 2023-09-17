import { ReactNode, FC, useEffect, useCallback } from 'react'
import { Footer, Header, MobileMenu, Spacer } from '@ui-kit'
import { PaddingContainer } from '@components/atoms'
import { theme } from '@constants'
import { THeaderFooter } from '@types'
import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from '@hooks'
import { setUser } from '@reducers'
import { auth } from '@api'

type TLayoutTemplateProps = {
  children: ReactNode
  headerFooterData: THeaderFooter
}

export const LayoutTemplate: FC<TLayoutTemplateProps> = ({ children, headerFooterData }) => {
  const { header, footer } = headerFooterData || {}
  const dispatch = useAppDispatch()

  const checkAuth = useCallback(async () => {
    await onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user))

        return
      }

      dispatch(setUser(null))
    })
  }, [dispatch])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <>
      <Header headerData={header} />
      <PaddingContainer padding={theme.space.sm} mobOnly>
        {children}
      </PaddingContainer>
      <Spacer sizeMob={theme.space.xl4} size={0} />
      <MobileMenu />
      <Footer footerData={footer} />
    </>
  )
}
