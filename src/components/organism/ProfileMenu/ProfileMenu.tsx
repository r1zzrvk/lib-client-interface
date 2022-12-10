import { FC } from 'react'
import { PROFILE_CUBE, PROFILE_MENU, theme, userData } from '@constants'
import { InfoCube, ItemList, Tabs, Text } from '@components'
import { TInfoCube } from '@types'
import { ProfileBanner } from './molecules'
import { Styled } from './styled'

export const ProfileMenu: FC = () => (
  <Styled.Wrapper>
    <ProfileBanner user={userData} />
    <Tabs items={PROFILE_MENU} />
    <Text
      color={theme.colors.grey}
      fontSize={theme.fonts.size.header.sm}
      fontHeight={theme.fonts.height.header.sm}
      fontWeight={theme.fonts.weight.medium}
    >
      Stock
    </Text>
    <Styled.ListWrapper>
      <ItemList
        items={PROFILE_CUBE as TInfoCube[]}
        renderItem={({ color, content, header, id }: TInfoCube) => (
          <InfoCube header={header} content={content} color={color} key={id} />
        )}
      />
    </Styled.ListWrapper>
  </Styled.Wrapper>
)
