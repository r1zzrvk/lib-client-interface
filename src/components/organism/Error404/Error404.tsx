import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Spacer, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

export const Error404: FC = () => {
  const { isMob } = useBreakpoint()
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <Flexbox direction="column" align="center" justify="center">
      <Image src="/page404.png" alt="404" width={800} height={620} />
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
