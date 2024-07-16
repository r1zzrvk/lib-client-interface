import { useRouter } from 'next/router'
import { FC, useState } from 'react'

import { SearchField } from '@components/molecules'
import { Link, ResponsiveImage } from '@ui-kit'
import { Flexbox } from '@components/atoms'

import { theme } from '@constants'
import { useBreakpoint, useHeaderAnimation } from '@hooks'
import { EPagePaths, THeaderData } from '@types'

import { IconBlock } from './molecules'
import { Styled } from './styled'

type THeaderProps = {
  headerData: THeaderData[]
}

export const Header: FC<THeaderProps> = ({ headerData }) => {
  const router = useRouter()
  const { isMob, isTablet } = useBreakpoint()
  const isCatalogPage = router.pathname === EPagePaths.CATALOG
  const isMobile = isTablet || isMob
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [hover, setHover] = useState(false)
  const isScrolling = useHeaderAnimation()

  return (
    <Styled.Wrapper
      isScrolling={isScrolling && !hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {(isMobile && isSearchVisible) || (
        <ResponsiveImage
          isEverywhere
          src="/logotype.svg"
          alt="logotype"
          width={60}
          height={51}
          onClick={() => router.push(EPagePaths.MAIN)}
          isTouchable
        />
      )}
      <Styled.Menu>
        {isCatalogPage || (
          <Flexbox align="center" gap={theme.space.xs} width={isSearchVisible ? '100%' : 'auto'}>
            {(isSearchVisible || !isMobile) && <SearchField />}
            {!isMobile || <IconBlock onSearchClick={setIsSearchVisible} isSearchVisible={isSearchVisible} />}
          </Flexbox>
        )}
        <Styled.TextBlock>
          {headerData?.map(({ title, href }) => (
            <Link key={title} href={href} fontWeight={theme.fonts.weight.medium}>
              {title}
            </Link>
          ))}
        </Styled.TextBlock>
      </Styled.Menu>
    </Styled.Wrapper>
  )
}
