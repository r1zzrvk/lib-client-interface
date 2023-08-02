import { theme } from '@constants'
import { Spacer } from '@ui-kit'
import { MobileBanner, MobileCard } from '@components/molecules'
import { Flexbox } from '@components/atoms'
import { FC, Fragment } from 'react'

// TODO: старый компонент, со временем разобрать и удалить
export const MobileMain: FC = () => {
  const arr = [1, 2, 3]

  return (
    <>
      <MobileBanner content="Discounts up to 15% to all" />
      <Spacer size={theme.space.sm} samespace />
      <Spacer size={theme.space.sm} samespace />
      <Flexbox direction="column">
        {arr.map(item => (
          <Fragment key={item}>
            <MobileCard size="lg" imgUrl="https://i.ibb.co/BLTLB6M/photo.png" title="Sofa" />
            <Spacer sizeMob={theme.space.sm} />
          </Fragment>
        ))}
      </Flexbox>
    </>
  )
}
