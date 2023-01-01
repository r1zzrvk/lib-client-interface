import { FC } from 'react'
import { PROFILE_CUBE, PROFILE_MENU, theme, userData } from '@constants'
import { InfoCube, ItemList, ProfileTab, Tabs, Text } from '@components'
import { TInfoCube } from '@types'
import { ProfileBanner } from './molecules'
import { Styled } from './styled'

type TProfileMenuProps = {
  activeTab: string
  onSelect: (id: string) => void
  isColumn: boolean
}

export const ProfileMenu: FC<TProfileMenuProps> = ({ activeTab, onSelect, isColumn }) => (
  <Styled.Wrapper>
    <ProfileBanner user={userData} />
    <Tabs
      items={PROFILE_MENU}
      marginTop={isColumn ? theme.space.sm : theme.space.xl}
      activeTab={activeTab}
      onSelect={onSelect}
    />
    {isColumn && <ProfileTab isColumn={isColumn} />}
    <Styled.CustomText isColumn={isColumn}>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.sm}
        fontHeight={theme.fonts.height.header.sm}
        fontWeight={theme.fonts.weight.medium}
      >
        Stock
      </Text>
    </Styled.CustomText>
    <Styled.ListWrapper isColumn={isColumn}>
      <ItemList
        items={PROFILE_CUBE as TInfoCube[]}
        renderItem={({ color, content, header, id }: TInfoCube) => (
          <InfoCube header={header} content={content} color={color} key={id} />
        )}
      />
    </Styled.ListWrapper>
  </Styled.Wrapper>
)
