import { theme } from '@constants'
import { Skeleton, Spacer } from '@ui-kit'
import { Flexbox } from '@components/atoms'
import { Styled } from './styled'

export const ProfileSkeleton = () => (
  <Flexbox justify="center">
    <Styled.Wrapper>
      <Spacer sizeMob={theme.space.sm} />
      <Flexbox direction="column">
        <Skeleton height={90} radius={theme.radiuses.md} />
        <Spacer sizeMob={theme.space.sm} />
        <Skeleton width={250} height={26} radius={theme.radiuses.xs} />
      </Flexbox>
      <Spacer sizeMob={theme.space.sm} />
      <Skeleton height={200} radius={theme.radiuses.md} />
    </Styled.Wrapper>
  </Flexbox>
)
