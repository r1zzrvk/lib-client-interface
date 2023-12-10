import { TBook } from '@types'
import { FC } from 'react'
import { Styled } from './styled'
import { BookHeader, BookInfo } from './molecules'

type TMobileBookPageLayoutProps = TBook

export const MobileBookPageLayout: FC<TMobileBookPageLayoutProps> = ({ volumeInfo, id, ...rest }) => (
  <Styled.Background>
    <BookHeader {...rest} id={id} volumeInfo={volumeInfo} />
    <BookInfo {...rest} id={id} volumeInfo={volumeInfo} />
  </Styled.Background>
)
