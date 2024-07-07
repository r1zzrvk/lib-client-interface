import { useFormikContext } from 'formik'
import { FC } from 'react'

import { Flexbox } from '@components/atoms'
import { Button, Input, Modal, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { useBreakpoint } from '@hooks'

import { EAccountRecoveryFormFields, TAccountRecoveryFormValues } from '../../types'
import { RECOVERY_SUBTITLE, getConfirmationSubtitle } from '../../constants'
import { Styled } from './styled'

type TAccountRecoveryFormProps = {
  isDialogOpened: boolean
  onDialogClose: () => void
  onGoBack: () => void
}

export const AccountRecoveryForm: FC<TAccountRecoveryFormProps> = ({ onGoBack, onDialogClose, isDialogOpened }) => {
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
      <Modal isOpen={isDialogOpened} onClose={onDialogClose} size="sm" title="Account recovery">
        <Styled.Dialog>
          <Text
            color={theme.colors.main}
            fontSize={theme.fonts.size.header.sm}
            fontWeight={theme.fonts.weight.regular}
            fontHeight={theme.fonts.height.header.sm}
            fontSizeMob={theme.fonts.size.header.xs}
            fontHeightMob={theme.fonts.height.header.xs}
            fontWeightMob={theme.fonts.weight.regular}
          >
            {getConfirmationSubtitle(email)}
          </Text>
          <Spacer size={theme.space.md} sizeMob={theme.space.md} />
          <Flexbox justify="end" direction={isMob ? 'column' : 'row-reverse'}>
            <Button onClick={onDialogClose} isFluid={isMob} size="lg" type="button">
              Got it
            </Button>
          </Flexbox>
        </Styled.Dialog>
      </Modal>
    </>
  )
}
