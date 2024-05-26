import { theme } from '@constants'
import { Skeleton, Spacer } from '@ui-kit'
import { useBreakpoint } from '@hooks'
import { Flexbox } from '@components/atoms'

export const ListsSkeleton = () => {
  const { isMob } = useBreakpoint()

  const cardHeight = isMob ? 88 : 148

  return (
    <>
      <Spacer sizeMob={theme.space.sm} size={theme.space.lg} />
      <Flexbox direction="column" gap={theme.space.sm}>
        <Skeleton height={cardHeight} radius={theme.radiuses.md} />
        <Skeleton height={cardHeight} radius={theme.radiuses.md} />
        <Skeleton height={cardHeight} radius={theme.radiuses.md} />
        <Skeleton height={cardHeight} radius={theme.radiuses.md} />
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} size={theme.space.lg} />
    </>
  )
}
