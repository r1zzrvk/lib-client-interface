import { FC } from 'react'
import { useRouter } from 'next/router'
import { IconsSelector } from '@components/molecules'
import { theme } from '@constants'
import { EPagePaths } from '@types'
import { Styled } from './styled'

export const MobileMenu: FC = () => {
  const router = useRouter()

  const handleNavigateTo = (path: EPagePaths) => {
    router.push(path)
  }

  return (
    <Styled.Wrapper>
      <IconsSelector
        icon="home_solid"
        color={theme.colors.grey}
        onClick={() => handleNavigateTo(EPagePaths.MAIN)}
        isButton
      />
      <IconsSelector
        icon="catalog_solid"
        color={theme.colors.grey}
        onClick={() => handleNavigateTo(EPagePaths.CATALOG)}
        isButton
      />
      <IconsSelector
        icon="bookmark_solid"
        color={theme.colors.grey}
        onClick={() => handleNavigateTo(EPagePaths.MY_LISTS)}
        isButton
      />
      <IconsSelector
        icon="user_solid"
        color={theme.colors.grey}
        onClick={() => handleNavigateTo(EPagePaths.PROFILE)}
        isButton
      />
    </Styled.Wrapper>
  )
}
