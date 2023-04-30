import { theme } from '@constants'
import { PaddingTemplate } from '@templates'
import { CategoriesSlider, Input, MobileBanner, MobileCard, PaddingContainer, Spacer } from '@components'
import { FC, Fragment } from 'react'

export const MobileMain: FC = () => {
  const arr = [1, 2, 3]

  return (
    <PaddingTemplate withoutPadding>
      <PaddingContainer padding={theme.space.sm}>
        <Input placeholder="Search" type="text" fluid onChange={() => ''} />
        <MobileBanner content="Discounts up to 15% to all" />
      </PaddingContainer>
      <CategoriesSlider />
      <PaddingContainer padding={theme.space.sm}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {arr.map(item => (
            <Fragment key={item}>
              <MobileCard size="lg" imgUrl="https://i.ibb.co/BLTLB6M/photo.png" title="Sofa" />
              <Spacer sizeMob={16} />
            </Fragment>
          ))}
        </div>
      </PaddingContainer>
    </PaddingTemplate>
  )
}
