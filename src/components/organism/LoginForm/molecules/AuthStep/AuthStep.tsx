import { FC } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Form, Formik, FormikErrors } from 'formik'
import { FirebaseError } from 'firebase/app'

import { Spacer, Text } from '@ui-kit'

import { FirebaseErrorCodes, FirebaseErrorCodesAndMessages, theme } from '@constants'
import { useAppDispatch } from '@hooks'
import { auth, createBookmarksForNewUsers, googleProvider } from '@api'
import { setAuthStatus, setUser } from '@reducers'
import { EAuthorizationStatus } from '@types'

import { StepWrapper } from '../../atoms'
import { AuthForm } from './molecules'
import { authFormInitialValues } from './initialValues'
import { validationSchema } from './validationSchema'
import { ESteps } from '../../constants'
import { TAuthFormValues } from './types'

type TAuthStepProps = {
  setStep: (step: ESteps) => void
  onError: () => void
}

export const AuthStep: FC<TAuthStepProps> = ({ onError, setStep }) => {
  const dispatch = useAppDispatch()

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        dispatch(setUser(user))
        dispatch(setAuthStatus(EAuthorizationStatus.AUTH))

        return user
      })
      .then(({ uid }) => createBookmarksForNewUsers(uid))
      .catch(() => {
        onError()
        dispatch(setAuthStatus(EAuthorizationStatus.NO_AUTH))
      })
  }

  const handleSubmit = async (
    { email, password }: TAuthFormValues,
    setErrors: (errors: FormikErrors<TAuthFormValues>) => void,
  ) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser(user))
        dispatch(setAuthStatus(EAuthorizationStatus.AUTH))

        return user
      })
      .then(({ uid }) => createBookmarksForNewUsers(uid))
      .catch((e: FirebaseError) => {
        if (FirebaseErrorCodesAndMessages[e.code]) {
          setErrors({
            email: FirebaseErrorCodesAndMessages[e.code],
          })

          return
        }

        if (FirebaseErrorCodes[e.code]) {
          setErrors({
            email: FirebaseErrorCodes[e.code],
          })

          return
        }
        onError()
        dispatch(setAuthStatus(EAuthorizationStatus.NO_AUTH))
      })
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
        Login
      </Text>
      <Formik
        initialValues={authFormInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setErrors }) => handleSubmit(values, setErrors)}
        validateOnBlur
        validateOnChange={false}
      >
        <Form style={{ width: '100%' }}>
          <AuthForm
            onSignWithGoogle={loginWithGoogle}
            onSignUp={() => setStep(ESteps.SignUp)}
            onForgotPassword={() => setStep(ESteps.AccRecovery)}
          />
        </Form>
      </Formik>
      <Spacer size={theme.space.xs} sizeMob={theme.space.xl} />
    </StepWrapper>
  )
}
