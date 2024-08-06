import { FC, MouseEvent } from 'react'

import { Icon } from '@components/molecules'
import { Text } from '@ui-kit'

import { theme } from '@constants'
import { TIcon } from '@types'

import { Styled } from './styled'

type TMenuItemProps = {
  title: string
  onClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
  color?: string
  icon?: TIcon
  iconPosition?: 'left' | 'right'
}

export const MenuItem: FC<TMenuItemProps> = ({
  title,
  color = theme.colors.grey,
  icon,
  onClick,
  iconPosition = 'left',
}) => (
  <Styled.Wrapper onClick={e => onClick?.(e)}>
    <Styled.MenuItem
      gap={theme.space.xs3}
      align="center"
      justify={iconPosition === 'right' && icon ? 'space-between' : 'start'}
      direction={iconPosition === 'right' && icon ? 'row-reverse' : 'row'}
      position={iconPosition}
    >
      {icon && (
        <Styled.IconWrapper>
          <Icon icon={icon} color={color} size={theme.icon_sizes.md} />
        </Styled.IconWrapper>
      )}
      <Text color={color} fontSizeMob={theme.fonts.size.regular.md} fontHeightMob={theme.fonts.height.regular.md}>
        {title}
      </Text>
    </Styled.MenuItem>
  </Styled.Wrapper>
)
