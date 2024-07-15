import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Link, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'

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
        <Link color={theme.colors.blue} hoverColor={theme.colors.grey_light} onClick={onConfirmEmail} asButton>
          Confirm
        </Link>
        <Spacer size={theme.space.xs3} samespace />
      </Flexbox>
    </>
  )

  return isEditing || component
}
