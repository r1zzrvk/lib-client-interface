import { FC } from 'react'
import { IconButton } from '@components'
import { useRouter } from 'next/router'
import { Styled } from './styled'

export const UserBlock: FC = () => {
  const router = useRouter()

  const handleClick = (path: string) => {
    router.push(path)
  }

  return (
    <Styled.Wrapper>
      <IconButton icon="search" onClick={() => handleClick('/books')} />
      <IconButton icon="shoppingCart" onClick={() => handleClick('/404')} />
      <IconButton icon="user" onClick={() => handleClick('/profile')} />
    </Styled.Wrapper>
  )
}
