import { FC } from 'react'

import { ItemList } from '@components/molecules'

import { TTab } from '@types'

import { Tab } from './molecules'
import { Styled } from './styled'

type TTabsProps = {
  items: TTab[]
  activeTab: TTab
  onSelect: (tab: TTab) => void
  marginTop?: number
}

export const Tabs: FC<TTabsProps> = ({ items, marginTop, activeTab, onSelect }) => {
  const handleClick = (tab: TTab) => {
    onSelect(tab)
  }

  return (
    <Styled.Wrapper marginTop={marginTop}>
      <ItemList
        items={items}
        renderItem={(tab: TTab) => (
          <Tab title={tab.title} key={tab.id} active={tab.id === activeTab.id} onClick={() => handleClick(tab)} />
        )}
      />
    </Styled.Wrapper>
  )
}
