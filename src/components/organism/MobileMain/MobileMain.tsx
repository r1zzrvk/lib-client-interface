import { theme } from '@constants'
import { PaddingTemplate } from '@templates'
import { CategoriesSlider, Flexbox, Input, MobileBanner, MobileCard, Spacer } from '@components'
import { FC, Fragment } from 'react'

export const MobileMain: FC = () => {
  const arr = [1, 2, 3]

  return (
    <PaddingTemplate>
      <Input placeholder="Search" type="text" fluid onChange={() => ''} />
      <MobileBanner content="Discounts up to 15% to all" />
      <Spacer size={theme.space.sm} samespace />
      <CategoriesSlider />
      <Spacer size={theme.space.sm} samespace />
      <Flexbox direction="column">
        {arr.map(item => (
          <Fragment key={item}>
            <MobileCard size="lg" imgUrl="https://i.ibb.co/BLTLB6M/photo.png" title="Sofa" />
            <Spacer sizeMob={theme.space.sm} />
          </Fragment>
        ))}
      </Flexbox>
    </PaddingTemplate>
  )
}
