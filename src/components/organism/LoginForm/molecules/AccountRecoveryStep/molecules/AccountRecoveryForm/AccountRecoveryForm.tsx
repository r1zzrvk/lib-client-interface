import { useFormikContext } from 'formik'
import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Button, Input, Spacer, TDialogWindowProps, Text } from '@ui-kit'

import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

import { RECOVERY_SUBTITLE, getConfirmationSubtitle } from '../../constants'
import { EAccountRecoveryFormFields, TAccountRecoveryFormValues } from '../../types'

type TAccountRecoveryFormProps = {
  onDialogClose: () => void
  onGoBack: () => void
  Dialog: FC<Omit<TDialogWindowProps, 'isOpened' | 'onClose'>>
}

export const AccountRecoveryForm: FC<TAccountRecoveryFormProps> = ({ onGoBack, onDialogClose, Dialog }) => {
  const { isMob } = useBreakpoint()
  const { values, setFieldValue, errors } = useFormikContext<TAccountRecoveryFormValues>()
  const { email } = values

  return (
    <>
      <Flexbox align="flex-start" direction="column">
        <Text
          color={theme.colors.main}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
          marginBottom={theme.space.sm}
          marginBottomMob={theme.space.sm}
        >
          {RECOVERY_SUBTITLE}
        </Text>
        <Input
          value={email}
          name={EAccountRecoveryFormFields.email}
          type="text"
          placeholder="Email"
          onClear={() => setFieldValue(EAccountRecoveryFormFields.email, '')}
          onChange={({ target }) => setFieldValue(EAccountRecoveryFormFields.email, target.value)}
          icon="at_solid"
          isClearable={!!email}
          error={errors[EAccountRecoveryFormFields.email]}
          fluid={isMob}
          hasIcon
        />
        <Spacer size={theme.space.sm} samespace />
        <Button type="submit" isFluid>
          Send a link
        </Button>
        <Button onClick={onGoBack} type="button" isGhost isFluid>
          Go back
        </Button>
      </Flexbox>
      <Dialog
        title="Account recovery"
        subtitle={getConfirmationSubtitle(email)}
        submitButtonText="Got it"
        onSubmit={onDialogClose}
      />
    </>
  )
}
