import { FC } from 'react'
import { AlertBanner, Spacer, Text } from '@ui-kit'
import { theme } from '@constants'
import { GoogleAuthNotice } from '../../constants'

export const PersonalInfo: FC = () => (
  <>
    <Spacer sizeMob={theme.space.sm} size={theme.space.xl} />
    <AlertBanner heading={GoogleAuthNotice.heading} icon={GoogleAuthNotice.icon}>
      <Text color={theme.colors.grey} fontSize={theme.fonts.size.regular.sm} fontHeight={theme.fonts.height.regular.sm}>
        {GoogleAuthNotice.message}
      </Text>
    </AlertBanner>
  </>
)
