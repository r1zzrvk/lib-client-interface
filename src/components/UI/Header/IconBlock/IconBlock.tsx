import { Dispatch, FC, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { IconsSelector } from '@components/molecules'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { EPagePaths } from '@types'
import { Styled } from './styled'

type TIconBlockProps = {
  isSearchVisible: boolean
  onSearchClick: Dispatch<SetStateAction<boolean>>
}

export const IconBlock: FC<TIconBlockProps> = ({ onSearchClick, isSearchVisible }) => {
  const router = useRouter()
  const { isMob } = useBreakpoint()
  const iconSize = isMob ? theme.icon_sizes.md : theme.icon_sizes.sm
  const icon = isSearchVisible ? 'cross_solid' : 'search_solid'
  const isCatalogPage = router.pathname === EPagePaths.CATALOG

  const handleClick = (path: EPagePaths) => {
    if (isMob && !isCatalogPage) {
      onSearchClick(!isSearchVisible)

      return
    }

    router.push(path)
  }

  return (
    <Styled.Wrapper>
      <IconsSelector
        icon={icon}
        color={theme.colors.white}
        onClick={() => handleClick(EPagePaths.CATALOG)}
        size={iconSize}
        isButton
      />
    </Styled.Wrapper>
  )
}
