import { FirebaseError } from 'firebase/app'
import {
  AuthErrorCodes,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  updateEmail,
  updatePassword,
  verifyBeforeUpdateEmail,
} from 'firebase/auth'
import { Form, Formik, FormikErrors, FormikState } from 'formik'
import { FC, useState } from 'react'

import { Spacer, Text } from '@ui-kit'

import { FirebaseErrorCodes, FirebaseErrorCodesAndMessages, theme } from '@constants'
import { useAppDispatch, useAppSelector, useDialog } from '@hooks'
import { setUser } from '@reducers'
import { getUserData } from '@selectors'

import { AccountInfoForm } from './molecules'
import { EAccountInfoFormFields, TAccountInfoFormValues } from './types'
import { getAccountInfoInitialValues, getEmailConfirmationSubtitle } from './utils'
import { getValidationSchema } from './validationSchema'

export const AccountInfo: FC = () => {
  const user = useAppSelector(getUserData)
  const dispatch = useAppDispatch()
  const { dialog: Dialog, close, show } = useDialog()

  const [editingFields, setEditingFields] = useState<{
    email: boolean
    password: boolean
  }>({
    [EAccountInfoFormFields.email]: false,
    [EAccountInfoFormFields.password]: false,
  })

  const handleSubmit = (
    { confirmNewEmail, confirmNewPassword, oldPassword }: TAccountInfoFormValues,
    setErrors: (errors: FormikErrors<TAccountInfoFormValues>) => void,
    resetForm: (nextState?: Partial<FormikState<TAccountInfoFormValues>> | undefined) => void,
  ) => {
    if (user && confirmNewEmail) {
      updateEmail(user, confirmNewEmail)
        .then(() => {
          dispatch(
            setUser({
              ...user,
              email: confirmNewEmail,
            }),
          )
        })
        .then(() => verifyBeforeUpdateEmail(user, confirmNewEmail))
        .catch((e: FirebaseError) => {
          if (FirebaseErrorCodesAndMessages[e.code]) {
            setErrors({
              oldPassword: FirebaseErrorCodesAndMessages[e.code],
              newPassword: FirebaseErrorCodesAndMessages[e.code],
            })

            return
          }

          if (FirebaseErrorCodes[e.code]) {
            setErrors({
              oldPassword: FirebaseErrorCodesAndMessages[e.code],
              newPassword: FirebaseErrorCodesAndMessages[e.code],
            })
          }
        })

      return
    }

    if (user && confirmNewPassword && oldPassword && user.email) {
      const credential = EmailAuthProvider.credential(user.email, oldPassword)

      reauthenticateWithCredential(user, credential)
        .then(() => updatePassword(user, confirmNewPassword))
        .then(() => {
          resetForm()
          setEditingFields({
            email: false,
            password: false,
          })
        })
        .catch((e: FirebaseError) => {
          if (e.code === AuthErrorCodes.INVALID_PASSWORD) {
            setErrors({
              oldPassword: 'Incorrect old password',
            })

            return
          }

          if (FirebaseErrorCodesAndMessages[e.code]) {
            setErrors({
              oldPassword: FirebaseErrorCodesAndMessages[e.code],
              newPassword: FirebaseErrorCodesAndMessages[e.code],
            })

            return
          }

          if (FirebaseErrorCodes[e.code]) {
            setErrors({
              oldPassword: FirebaseErrorCodesAndMessages[e.code],
              newPassword: FirebaseErrorCodesAndMessages[e.code],
            })
          }
        })
    }
  }

  if (!user) {
    return null
  }

  const handleConfirmEmail = () => {
    sendEmailVerification(user).then(() => show())
  }

  return (
    <>
      <Spacer sizeMob={theme.space.md} size={theme.space.md} />
      <Text
        color={theme.colors.main}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.sm}
        marginBottomMob={theme.space.sm}
      >
        Your account details are kept here. You can change your email address or password. You can also verify your
        email address so that you can recover your account if you lose your password.
      </Text>
      <Formik
        initialValues={getAccountInfoInitialValues(user)}
        validationSchema={getValidationSchema(editingFields)}
        onSubmit={(values, { setErrors, resetForm }) => handleSubmit(values, setErrors, resetForm)}
        validateOnChange={false}
      >
        <Form>
          <AccountInfoForm
            user={user}
            editingFields={editingFields}
            setEditing={value => setEditingFields(value)}
            onSubmit={handleSubmit}
            onConfirmEmail={handleConfirmEmail}
          />
        </Form>
      </Formik>
      <Dialog
        title="Email confirmation"
        subtitle={getEmailConfirmationSubtitle(user.email || '')}
        submitButtonText="Got it"
        onSubmit={close}
      />
    </>
  )
}
