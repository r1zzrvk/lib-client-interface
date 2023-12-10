import { TBook } from '@types'
import { FC } from 'react'
import { Styled } from './styled'
import { BookHeader, BookInfo } from './molecules'

type TMobileBookPageLayoutProps = {
  isLoading: boolean
} & TBook

export const MobileBookPageLayout: FC<TMobileBookPageLayoutProps> = ({ volumeInfo, id, isLoading, ...rest }) => (
  <Styled.Background>
    <BookHeader {...rest} id={id} volumeInfo={volumeInfo} isLoading={isLoading} />
    <BookInfo {...rest} id={id} volumeInfo={volumeInfo} isLoading={isLoading} />
  </Styled.Background>
)
