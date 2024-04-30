import { FC } from 'react'
import { AlertBanner, Spacer, Text } from '@ui-kit'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { GoogleAuthNotice } from '../../constants'

export const PersonalInfo: FC = () => {
  const { isTablet } = useBreakpoint()
  return (
    <>
      <Spacer sizeMob={theme.space.sm} size={theme.space.xl} />
      <AlertBanner heading={GoogleAuthNotice.heading} icon={GoogleAuthNotice.icon} isFluid={isTablet}>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
        >
          {GoogleAuthNotice.message}
        </Text>
      </AlertBanner>
    </>
  )
}
