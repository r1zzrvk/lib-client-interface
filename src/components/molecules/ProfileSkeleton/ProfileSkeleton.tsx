import { theme } from '@constants'
import { Skeleton, Spacer } from '@ui-kit'

export const ProfileSkeleton = () => (
  // todo: adaptive
  <>
    <Spacer sizeMob={theme.space.sm} />
    <Skeleton height={90} radius={theme.radiuses.md} />
    <Spacer sizeMob={theme.space.sm} />
    <Skeleton width={250} height={26} radius={theme.radiuses.xs} />
    <Spacer sizeMob={theme.space.sm} />
    <Skeleton height={200} radius={theme.radiuses.md} />
  </>
)
