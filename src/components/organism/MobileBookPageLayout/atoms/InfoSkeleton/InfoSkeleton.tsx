import { theme } from '@constants'
import { Skeleton, Spacer } from '@ui-kit'

export const InfoSkeleton = () => (
  <>
    <Skeleton radius={theme.radiuses.xs} width={250} height={28} />
    <Spacer sizeMob={theme.space.xs3} />
    <Skeleton radius={theme.radiuses.xs} width={150} height={20} />
    <Spacer sizeMob={theme.space.md} />
    <Skeleton height={400} radius={theme.radiuses.sm} />
  </>
)
