import { CardsPreloader } from '@components/molecules'
import { theme } from '@constants'
import { Skeleton, Spacer } from '@ui-kit'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'

export const ListsSkeleton = () => {
  const { isMob } = useBreakpoint()
  const titleHeight = isMob ? 28 : 44
  const titleRadius = isMob ? 10 : theme.radiuses.xs

  return (
    <Styled.ListContainer>
      <Skeleton height={titleHeight} width={300} radius={titleRadius} />
      <Spacer sizeMob={theme.space.sm} size={theme.space.md} />
      <CardsPreloader />
    </Styled.ListContainer>
  )
}
