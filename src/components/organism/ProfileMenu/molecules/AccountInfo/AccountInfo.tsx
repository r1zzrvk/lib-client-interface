import { Flexbox } from '@components/atoms'
import { FirebaseErrorCodes, FirebaseErrorCodesAndMessages, theme } from '@constants'
import { useAppDispatch, useAppSelector, useBreakpoint } from '@hooks'
import { setUser } from '@reducers'
import { getUserData } from '@selectors'
import { Button, Modal, Spacer, Text } from '@ui-kit'
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
import { AccountInfoForm } from './molecules'
import { Styled } from './styled'
import { EAccountInfoFormFields, TAccountInfoFormValues } from './types'
import { getAccountInfoInitialValues, getEmailConfirmationSubtitle } from './utils'
import { getValidationSchema } from './validationSchema'

export const AccountInfo: FC = () => {
  const { isMob } = useBreakpoint()
  const user = useAppSelector(getUserData)
  const dispatch = useAppDispatch()
  const [isDialogOpened, setIsDialogOpened] = useState(false)

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
    sendEmailVerification(user).then(() => setIsDialogOpened(true))
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
      <Modal isOpen={isDialogOpened} onClose={() => setIsDialogOpened(false)} size="sm" title="Account recovery">
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
            {getEmailConfirmationSubtitle(user.email || '')}
          </Text>
          <Spacer size={theme.space.md} sizeMob={theme.space.md} />
          <Flexbox justify="end" direction={isMob ? 'column' : 'row-reverse'}>
            <Button onClick={() => setIsDialogOpened(false)} isFluid={isMob} size="lg" type="button">
              Got it
            </Button>
          </Flexbox>
        </Styled.Dialog>
      </Modal>
    </>
  )
}
