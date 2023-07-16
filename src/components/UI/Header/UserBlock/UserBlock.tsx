import { FC } from 'react'
import { useRouter } from 'next/router'
import { IconsSelector } from '@components/molecules'
import { theme } from '@constants'
import { Styled } from './styled'

export const UserBlock: FC = () => {
  const router = useRouter()

  const handleClick = (path: string) => {
    router.push(path)
  }

  return (
    <Styled.Wrapper>
      <IconsSelector icon="search_solid" color={theme.colors.white} onClick={() => handleClick('/books')} isButton />
    </Styled.Wrapper>
  )
}
