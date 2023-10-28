import { FC } from 'react'
import { PROFILE_CUBE, PROFILE_MENU, theme } from '@constants'
import { Spacer, Tabs, Text } from '@ui-kit'
import { PaddingContainer } from '@components/atoms'
import { ProfileTab, ItemList, InfoCube, ProfileBanner } from '@components/molecules'
import { useBreakpoint } from '@hooks'
import { TInfoCube } from '@types'
import { Styled } from './styled'

type TProfileMenuProps = {
  activeTab: string
  onSelect: (id: string) => void
  isColumn: boolean
}

export const ProfileMenu: FC<TProfileMenuProps> = ({ activeTab, onSelect, isColumn }) => {
  const { isMob } = useBreakpoint()
  return (
    <Styled.Wrapper>
      {isMob && (
        <PaddingContainer padding={theme.space.sm}>
          <Text
            color={theme.colors.grey}
            fontSizeMob={theme.fonts.size.header.xs}
            fontHeightMob={theme.fonts.height.header.xs}
            fontWeightMob={theme.fonts.weight.medium}
            marginBottomMob={theme.space.sm}
          >
            Profile
          </Text>
        </PaddingContainer>
      )}
      <ProfileBanner variant="horizontal" />
      <Spacer sizeMob={theme.space.sm} />
      <Tabs items={PROFILE_MENU} marginTop={isColumn ? theme.space.md : 0} activeTab={activeTab} onSelect={onSelect} />
      {isColumn && <ProfileTab isColumn={isColumn} />}
      <Styled.CustomText isColumn={isColumn}>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.header.sm}
          fontHeight={theme.fonts.height.header.sm}
          fontWeight={theme.fonts.weight.medium}
          fontSizeMob={theme.fonts.size.header.xs}
          fontHeightMob={theme.fonts.height.header.xs}
          marginBottomMob={theme.space.sm}
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
}
