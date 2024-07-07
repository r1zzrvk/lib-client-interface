import { FC, ReactNode } from 'react'

import { Styled } from './styled'

type TPaddingTemplateProps = {
  children: ReactNode
  withoutPadding?: boolean
}

// todo: проверить нужно ли еще это

export const PaddingTemplate: FC<TPaddingTemplateProps> = ({ children, withoutPadding = false }) => (
  <Styled.Wrapper withoutPadding={withoutPadding}>{children}</Styled.Wrapper>
)
