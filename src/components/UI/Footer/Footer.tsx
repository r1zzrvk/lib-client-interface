import { FC } from 'react'
import { TFooterData } from '@types'
import { Styled } from './styled'
import { DesktopMenu } from './DesktopMenu'
import { TabletMenu } from './TabletMenu'

type TFooterProps = {
  footerData: TFooterData
}

export const Footer: FC<TFooterProps> = ({ footerData }) => (
  <Styled.Wrapper>
    <DesktopMenu footerData={footerData} />
    <TabletMenu footerData={footerData} />
  </Styled.Wrapper>
)
