import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { ResponsiveImage, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'
import { SearchField } from '@components/molecules'

import { theme } from '@constants'
import { EPagePaths, THeaderData } from '@types'
import { useBreakpoint } from '@hooks'

import { Styled } from './styled'
import { IconBlock } from './IconBlock'

type THeaderProps = {
  headerData: THeaderData[]
}

export const Header: FC<THeaderProps> = ({ headerData }) => {
  const router = useRouter()
  const { isMob } = useBreakpoint()
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <Styled.Wrapper>
      {isMob && isSearchVisible && <SearchField />}
      {isSearchVisible || (
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
      <Flexbox>
        <Styled.TextBlock>
          {headerData?.map(({ title, href }) => (
            <Text key={title} fontWeight={theme.fonts.weight.medium} asLink href={href}>
              {title}
            </Text>
          ))}
        </Styled.TextBlock>
        <IconBlock onSearchClick={setIsSearchVisible} isSearchVisible={isSearchVisible} />
      </Flexbox>
    </Styled.Wrapper>
  )
}
