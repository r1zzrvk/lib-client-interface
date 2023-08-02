import { FC } from 'react'
import { Styled } from './styled'

type TAvatarProps = {
  src: string
}
// TODO: Добавить размеры
export const Avatar: FC<TAvatarProps> = ({ src }) => (
  <>
    <Styled.Avatar src={src} alt="avatar" width={52} height={52} isMob />
    <Styled.Avatar src={src} alt="avatar" width={72} height={72} isTablet isSm isMd isLg />
  </>
)
