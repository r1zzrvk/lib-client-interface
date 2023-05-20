import { FC } from 'react'
import { ItemList } from '@components/molecules'
import { TTab } from '@types'
import { useBreakpoint } from '@hooks'
import { Tab } from './molecules'
import { Styled } from './styled'

type TTabsProps = {
  items: TTab[]
  activeTab: string
  onSelect: (id: string) => void
  marginTop?: number
}

export const Tabs: FC<TTabsProps> = ({ items, marginTop, activeTab, onSelect }) => {
  const { isTablet, isSm, isMob } = useBreakpoint()
  const handleClick = (id: string) => {
    onSelect(id)
  }

  return (
    <Styled.Wrapper isRow={isTablet || isSm || isMob} marginTop={marginTop}>
      <ItemList
        items={items}
        renderItem={({ id, title }: TTab) => (
          <Tab title={title} key={id} active={id === activeTab} onClick={() => handleClick(id)} />
        )}
      />
    </Styled.Wrapper>
  )
}
