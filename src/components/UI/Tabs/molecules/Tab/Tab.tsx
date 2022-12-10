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
  const { isTablet } = useBreakpoint()
  const [isAnimate, setIsAnimate] = useState(false)

  const handleClick = () => {
    onClick()
    setIsAnimate(true)
  }
  return (
    <Styled.Wrapper active={active} onClick={() => handleClick()}>
      <Text color={active ? theme.colors.grey : theme.colors.main}>{title}</Text>
      {active && !isTablet && <Styled.ActiveDot isAnimate={isAnimate} onAnimationEnd={() => setIsAnimate(false)} />}
    </Styled.Wrapper>
  )
}
