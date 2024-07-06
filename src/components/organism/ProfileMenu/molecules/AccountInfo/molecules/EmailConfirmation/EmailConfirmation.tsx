import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { Spacer, Text } from '@ui-kit'
import { FC } from 'react'

type TEmailConfirmationProps = {
  isEditing: boolean
  isConfirmed: boolean
  onConfirmEmail: () => void
}

export const EmailConfirmation: FC<TEmailConfirmationProps> = ({ isEditing, isConfirmed, onConfirmEmail }) => {
  const component = isConfirmed ? (
    <>
      <Spacer size={theme.space.xs3} samespace />
      <Text
        color={theme.colors.success}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.xs3}
        marginBottomMob={theme.space.xs3}
      >
        Email confirmed
      </Text>
    </>
  ) : (
    <>
      <Spacer size={theme.space.xs3} samespace />
      <Flexbox gap={theme.space.xs3}>
        <Text
          color={theme.colors.grey_light}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
          marginBottom={theme.space.xs3}
          marginBottomMob={theme.space.xs3}
        >
          Email is not confirmed yet.
        </Text>
        <Text
          color={theme.colors.blue}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
          marginBottom={theme.space.xs3}
          marginBottomMob={theme.space.xs3}
          asLink
          onClick={onConfirmEmail}
        >
          Confirm
        </Text>
      </Flexbox>
    </>
  )

  return isEditing || component
}
