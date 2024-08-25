import { FirebaseError } from 'firebase/app'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Form, Formik, FormikErrors } from 'formik'
import { FC } from 'react'

import { Spacer, Text } from '@ui-kit'

import { auth } from '@api'
import { FirebaseErrorCodes, FirebaseErrorCodesAndMessages, theme } from '@constants'
import { useDialog } from '@hooks'

import { StepWrapper } from '../../atoms'
import { ESteps } from '../../constants'
import { accountRecoveryFormInitialValues } from './initialValues'
import { AccountRecoveryForm } from './molecules'
import { TAccountRecoveryFormValues } from './types'
import { validationSchema } from './validation'

type TAccountRecoveryStepProps = {
  setStep: (step: ESteps) => void
  onError: () => void
}

export const AccountRecoveryStep: FC<TAccountRecoveryStepProps> = ({ onError, setStep }) => {
  const { dialog: Dialog, close, show } = useDialog()

  const handleSubmit = (
    { email }: TAccountRecoveryFormValues,
    setErrors: (errors: FormikErrors<TAccountRecoveryFormValues>) => void,
  ) => {
    sendPasswordResetEmail(auth, email)
      .then(() => show())
      .catch((e: FirebaseError) => {
        if (FirebaseErrorCodesAndMessages[e.code]) {
          setErrors({
            email: FirebaseErrorCodesAndMessages[e.code],
          })

          return
        }

        if (FirebaseErrorCodes[e.code]) {
          setErrors({
            email: FirebaseErrorCodesAndMessages[e.code],
          })

          return
        }

        onError()
      })
  }

  const handleClose = () => {
    close()
    setStep(ESteps.Auth)
  }

  return (
    <StepWrapper>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.header.lg}
        fontSizeMob={theme.fonts.size.header.md}
        fontHeightMob={theme.fonts.height.header.md}
        fontWeightMob={theme.fonts.weight.medium}
        marginBottom={theme.space.md}
        marginBottomMob={theme.space.md}
      >
        Account recovery
      </Text>
      <Formik
        onSubmit={(values, { setErrors }) => handleSubmit(values, setErrors)}
        initialValues={accountRecoveryFormInitialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur
      >
        <Form>
          <AccountRecoveryForm onGoBack={() => setStep(ESteps.Auth)} Dialog={Dialog} onDialogClose={handleClose} />
        </Form>
      </Formik>
      <Spacer size={theme.space.xs} sizeMob={theme.space.xl} />
    </StepWrapper>
  )
}
