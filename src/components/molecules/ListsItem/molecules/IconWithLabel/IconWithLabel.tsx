import { IconsSelector } from '@components/molecules'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { TIcon } from '@types'
import { Text } from '@ui-kit'
import { FC } from 'react'
import { Styled } from './styled'

type TIconWithLabelProps = {
  icon: TIcon
  iconSize: number
  onClick?: () => void
  label?: string
}

export const IconWithLabel: FC<TIconWithLabelProps> = ({ icon, label, iconSize, onClick }) => {
  const { isMob } = useBreakpoint()
  return (
    <Styled.IconWrapper align="center" gap={theme.space.xs2} onClick={onClick}>
      {isMob || (
        <Text
          color={theme.colors.grey}
          fontHeightMob={theme.fonts.height.regular.sm}
          fontSizeMob={theme.fonts.size.regular.sm}
          fontWeightMob={theme.fonts.weight.regular}
        >
          {label}
        </Text>
      )}
      <IconsSelector isButton icon={icon} color={theme.colors.grey} size={iconSize} />
    </Styled.IconWrapper>
  )
}
