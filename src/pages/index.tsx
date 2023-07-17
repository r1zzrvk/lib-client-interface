import { FC } from 'react'
import { CategoriesBanner, MainBanner, PromoBanner } from '@components/organism'
import { CATEGORIES_BANNER, theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { LayoutTemplate } from '@templates'
import { THeaderFooter } from '@types'
import { getStaticPageProps } from '@api'
import { Input, Spacer } from '@ui-kit'
import { Background } from '@components/atoms'

export const getStaticProps = getStaticPageProps

const MainPage: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => {
  const { isMob } = useBreakpoint()

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {isMob && (
        <Background color={theme.colors.main}>
          <Spacer sizeMob={theme.space.sm} />
          <Input placeholder="Search for books" type="text" color={theme.colors.beige} fluid onChange={() => ''} />
        </Background>
      )}
      <MainBanner />
      <PromoBanner />
      <CategoriesBanner
        header={CATEGORIES_BANNER.header}
        subheader={CATEGORIES_BANNER.subheader}
        text={CATEGORIES_BANNER.text}
      />
    </LayoutTemplate>
  )
}

export default MainPage
