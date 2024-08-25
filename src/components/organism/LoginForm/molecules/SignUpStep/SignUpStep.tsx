import { FC } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { Form, Formik, FormikErrors } from 'formik'
import { FirebaseError } from 'firebase/app'

import { Avatar, Spacer, Text } from '@ui-kit'
import { Flexbox } from '@components/atoms'

import { FirebaseErrorCodes, FirebaseErrorCodesAndMessages, USER_AVATAR_LINK, theme } from '@constants'
import { useAppDispatch } from '@hooks'
import { auth, createBookmarksForNewUsers } from '@api'
import { setAuthStatus, setUser } from '@reducers'
import { EAuthorizationStatus } from '@types'

import { StepWrapper } from '../../atoms'
import { initialValues } from './initialValues'
import { validationSchema } from './validationSchema'
import { ESteps } from '../../constants'
import { TSignUpValues } from './types'
import { SignUpForm } from './molecules'

type TAuthStepProps = {
  setStep: (step: ESteps) => void
  onError: () => void
}

export const SignUpStep: FC<TAuthStepProps> = ({ onError, setStep }) => {
  const dispatch = useAppDispatch()

  const handleSubmit = async (
    { email, password, displayName }: TSignUpValues,
    setErrors: (errors: FormikErrors<TSignUpValues>) => void,
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName,
          photoURL: USER_AVATAR_LINK,
        })

        return user
      })
      .then(user => {
        dispatch(setUser(user))
        dispatch(setAuthStatus(EAuthorizationStatus.AUTH))

        return user.uid
      })
      .then(uid => createBookmarksForNewUsers(uid))
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
        Sign up
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setErrors }) => handleSubmit(values, setErrors)}
        validateOnChange={false}
        validateOnBlur
      >
        <Form style={{ width: '100%' }}>
          <Flexbox justify="center" align="center">
            <Avatar src={USER_AVATAR_LINK} size="lg" />
          </Flexbox>
          <Spacer size={theme.space.sm} samespace />
          <SignUpForm onGoBack={() => setStep(ESteps.Auth)} />
        </Form>
      </Formik>
      <Spacer size={theme.space.xs} sizeMob={theme.space.xl} />
    </StepWrapper>
  )
}
