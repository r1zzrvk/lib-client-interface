import { FC } from 'react'
import { CategoriesBanner, MainBanner, MobileMain, TipsBanner } from '@components/organism'
import { CATEGORIES_BANNER } from '@constants'
import { useBreakpoint } from '@hooks'

const MainPage: FC = () => {
  const { isMob } = useBreakpoint()

  return (
    <>
      <MainBanner />
      <TipsBanner />
      <CategoriesBanner
        header={CATEGORIES_BANNER.header}
        subheader={CATEGORIES_BANNER.subheader}
        text={CATEGORIES_BANNER.text}
      />
      {isMob && <MobileMain />}
    </>
  )
}

export default MainPage
