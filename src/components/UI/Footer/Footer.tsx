import { FC } from 'react'
import { Styled } from './styled'
import { DesktopMenu } from './DesktopMenu'
import { TabletMenu } from './TabletMenu'

export const Footer: FC = () => (
  <Styled.Wrapper>
    <DesktopMenu />
    <TabletMenu />
  </Styled.Wrapper>
)
