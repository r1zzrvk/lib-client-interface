import { FC } from 'react'
import { useRouter } from 'next/router'
import { Button, ResponsiveImage, Spacer, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { EPagePaths } from '@types'

export const Error404: FC = () => {
  const { isMob } = useBreakpoint()
  const router = useRouter()

  const handleClick = () => {
    router.push(EPagePaths.MAIN)
  }

  return (
    <Flexbox direction="column" align="center" justify="center">
      <ResponsiveImage src="/page404.png" alt="404" width={600} height={420} isEverywhere />
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.bold}
        fontHeight={theme.fonts.height.header.lg}
        marginBottom={theme.space.xl2}
        fontSizeMob={theme.fonts.size.header.sm}
        fontHeightMob={theme.fonts.height.header.sm}
        fontWeightMob={theme.fonts.weight.semibold}
        marginBottomMob={theme.space.lg}
      >
        Opps! Page Not Found
      </Text>
      <Button size="lg" isFluid={isMob} onClick={handleClick}>
        Back to home
      </Button>
      <Spacer size={theme.space.xl4} samespace />
    </Flexbox>
  )
}
