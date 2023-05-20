import { FC, useState } from 'react'
import { theme } from '@constants'
import { Text } from '@ui-kit'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'

type TTabProps = {
  title: string
  active: boolean
  onClick: () => void
}

export const Tab: FC<TTabProps> = ({ title, active, onClick }) => {
  const { isTablet, isSm, isMob } = useBreakpoint()
  const [isAnimate, setIsAnimate] = useState(false)
  const isColumn = isTablet || isSm || isMob

  const handleClick = () => {
    onClick()
    setIsAnimate(true)
  }
  return (
    <Styled.Wrapper active={active} isColumn={isColumn} onClick={() => handleClick()}>
      <Text
        color={active ? theme.colors.grey : theme.colors.main}
        fontSizeMob={theme.fonts.size.regular.sm}
        fontHeightMob={theme.fonts.height.regular.sm}
      >
        {title}
      </Text>
      {active && !isColumn && <Styled.ActiveDot isAnimate={isAnimate} onAnimationEnd={() => setIsAnimate(false)} />}
    </Styled.Wrapper>
  )
}
