import { FC, useState } from 'react'
import { theme } from '@constants'
import { Text } from '@components'
import { useBreakpoint } from '@hooks'
import { Styled } from './styled'

type TTabProps = {
  title: string
  active: boolean
  onClick: () => void
}

export const Tab: FC<TTabProps> = ({ title, active, onClick }) => {
  const { isTablet, isSm } = useBreakpoint()
  const [isAnimate, setIsAnimate] = useState(false)
  const isColumn = isTablet || isSm

  const handleClick = () => {
    onClick()
    setIsAnimate(true)
  }
  return (
    <Styled.Wrapper active={active} onClick={() => handleClick()}>
      <Text color={active ? theme.colors.grey : theme.colors.main}>{title}</Text>
      {active && !isColumn && <Styled.ActiveDot isAnimate={isAnimate} onAnimationEnd={() => setIsAnimate(false)} />}
    </Styled.Wrapper>
  )
}
