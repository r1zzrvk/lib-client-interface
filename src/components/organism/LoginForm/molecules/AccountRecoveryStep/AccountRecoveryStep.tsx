import { FirebaseError } from 'firebase/app'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Form, Formik, FormikErrors } from 'formik'
import { FC, useState } from 'react'

import { Spacer, Text } from '@ui-kit'

import { FirebaseErrorCodes, FirebaseErrorCodesAndMessages, theme } from '@constants'
import { auth } from '@api'

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
  const [isDialogOpened, setIsDialogOpened] = useState(false)

  const handleSubmit = (
    { email }: TAccountRecoveryFormValues,
    setErrors: (errors: FormikErrors<TAccountRecoveryFormValues>) => void,
  ) => {
    sendPasswordResetEmail(auth, email)
      .then(() => setIsDialogOpened(true))
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
    setIsDialogOpened(false)
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
          <AccountRecoveryForm
            onGoBack={() => setStep(ESteps.Auth)}
            isDialogOpened={isDialogOpened}
            onDialogClose={handleClose}
          />
        </Form>
      </Formik>
      <Spacer size={theme.space.xs} sizeMob={theme.space.xl} />
    </StepWrapper>
  )
}
