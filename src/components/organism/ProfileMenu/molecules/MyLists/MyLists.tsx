import { FC } from 'react'
import { StatusIllustration } from '@components/molecules'
import { Spacer } from '@ui-kit'
import { theme } from '@constants'

export const MyLists: FC = () => (
  <>
    <StatusIllustration
      imgUrl="/nothingfound.png"
      altText="list is empty"
      title="Nothing found!"
      subtitle="You don't have any lists yet"
      width={200}
      height={150}
      isVisible
    />
    <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
  </>
)
