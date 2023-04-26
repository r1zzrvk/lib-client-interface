import { FC } from 'react'
import {
  CategoriesBanner,
  CategoriesSlider,
  MainBanner,
  MobileBanner,
  Input,
  TipsBanner,
  MobileCard,
  Spacer,
  PaddingContainer,
} from '@components'
import { PaddingTemplate } from '@templates'
import { CATEGORIES_BANNER, theme } from '@constants'

const arr = [1, 2, 3]

const MainPage: FC = () => (
  <>
    <MainBanner />
    <TipsBanner />
    <CategoriesBanner
      header={CATEGORIES_BANNER.header}
      subheader={CATEGORIES_BANNER.subheader}
      text={CATEGORIES_BANNER.text}
    />
    <PaddingTemplate withoutPadding>
      <PaddingContainer padding={theme.space.sm}>
        <Input placeholder="Search" type="text" fluid onChange={() => ''} />
        <MobileBanner content="Discounts up to 15% to all" />
      </PaddingContainer>
      <CategoriesSlider />
      <PaddingContainer padding={theme.space.sm}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {arr.map(() => (
            <>
              <MobileCard size="lg" imgUrl="https://i.ibb.co/BLTLB6M/photo.png" title="Sofa" />
              <Spacer sizeMob={16} />
            </>
          ))}
        </div>
      </PaddingContainer>
    </PaddingTemplate>
  </>
)

export default MainPage
