import { FC } from 'react'
import { useRouter } from 'next/router'

import { Flexbox } from '@components/atoms'
import { Icon } from '@components/molecules'

import { mobileMenuItems, theme } from '@constants'
import { EPagePaths } from '@types'

import { Styled } from './styled'
import { Text } from '../Text'

export const MobileMenu: FC = () => {
  const router = useRouter()

  const getActivePage = (path: EPagePaths) => (path === router.route ? theme.colors.grey : theme.colors.main)

  const handleNavigateTo = (path: EPagePaths) => {
    router.push(path)
  }

  return (
    <Styled.Wrapper>
      {mobileMenuItems.map(({ icon, path, id, title }) => (
        <Flexbox
          key={id}
          direction="column"
          justify="center"
          align="center"
          gap={theme.space.xs3}
          onClick={() => handleNavigateTo(path)}
        >
          <Icon icon={icon} color={getActivePage(path)} />
          <Text color={theme.colors.grey}>{title}</Text>
        </Flexbox>
      ))}
    </Styled.Wrapper>
  )
}
