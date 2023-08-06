import { FC } from 'react'
import { useRouter } from 'next/router'
import { IconsSelector } from '@components/molecules'
import { Flexbox } from '@components/atoms'
import { mobileMenuItems, theme } from '@constants'
import { EPagePaths } from '@types'
import { Styled } from './styled'
import { Text } from '../Text'

export const MobileMenu: FC = () => {
  const router = useRouter()

  const getActivePage = (path: EPagePaths) => (path === router.route ? theme.colors.main : theme.colors.grey)

  const handleNavigateTo = (path: EPagePaths) => {
    router.push(path)
  }

  return (
    <Styled.Wrapper>
      {mobileMenuItems.map(({ icon, path, id, title }) => (
        <Flexbox key={id} direction="column" justify="center" align="center">
          <IconsSelector icon={icon} color={getActivePage(path)} onClick={() => handleNavigateTo(path)} isButton />
          <Text color={theme.colors.grey}>{title}</Text>
        </Flexbox>
      ))}
    </Styled.Wrapper>
  )
}
