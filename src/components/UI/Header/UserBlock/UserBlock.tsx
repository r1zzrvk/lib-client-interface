import { FC } from 'react'
import { IconButton } from '@components'
import { useRouter } from 'next/router'
import { Styled } from './styled'

export const UserBlock: FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/1')
  }

  return (
    <Styled.Wrapper>
      <IconButton icon="search" onClick={handleClick} />
      <IconButton icon="shoppingCart" onClick={handleClick} />
      <IconButton icon="user" onClick={handleClick} />
    </Styled.Wrapper>
  )
}
