import { FC, useState } from 'react'
import { ItemList } from '@components'
import { TTab } from '@types'
import { useBreakpoint } from '@hooks'
import { Tab } from './molecules'
import { Styled } from './styled'

type TTabsProps = {
  items: TTab[]
}

export const Tabs: FC<TTabsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState('1')
  const { isTablet } = useBreakpoint()
  const handleClick = (id: string) => {
    setActiveId(id)
  }

  return (
    <Styled.Wrapper isRow={isTablet}>
      <ItemList
        items={items}
        renderItem={({ id, title }: TTab) => (
          <Tab title={title} key={id} active={id === activeId} onClick={() => handleClick(id)} />
        )}
      />
    </Styled.Wrapper>
  )
}
