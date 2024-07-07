import { FC } from 'react'
import { useRouter } from 'next/router'

import { EPagePaths, TFooterData } from '@types'

import { Styled } from './styled'
import { DesktopMenu } from './DesktopMenu'
import { TabletMenu } from './TabletMenu'

type TFooterProps = {
  footerData: TFooterData
}

export const Footer: FC<TFooterProps> = ({ footerData }) => {
  const router = useRouter()

  const handleSignClick = () => {
    router.push(EPagePaths.LOGIN)
  }

  return (
    <Styled.Wrapper>
      <DesktopMenu footerData={footerData} onSignClick={handleSignClick} />
      <TabletMenu footerData={footerData} onSignClick={handleSignClick} />
    </Styled.Wrapper>
  )
}
