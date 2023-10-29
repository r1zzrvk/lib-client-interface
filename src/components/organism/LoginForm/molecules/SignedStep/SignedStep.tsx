import { FC } from 'react'
import { useRouter } from 'next/router'
import { Text } from '@ui-kit'
import { ProfileBanner } from '@components/molecules'
import { theme } from '@constants'
import { EPagePaths } from '@types'
import { StepWrapper } from '../../atoms'

type TSignedStepProps = {
  onError: () => void
}

export const SignedStep: FC<TSignedStepProps> = ({ onError }) => {
  const router = useRouter()

  const handleProfileClick = () => {
    router.push(EPagePaths.PROFILE)
  }

  return (
    <StepWrapper withoutShadow>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.header.lg}
        fontSizeMob={theme.fonts.size.header.md}
        fontHeightMob={theme.fonts.height.header.md}
        fontWeightMob={theme.fonts.weight.medium}
        marginBottom={theme.space.sm}
        marginBottomMob={theme.space.xs2}
      >
        Already signed
      </Text>
      <ProfileBanner variant="vertical" onProfileClick={handleProfileClick} onError={onError} />
    </StepWrapper>
  )
}
