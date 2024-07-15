import { deleteUser, updateProfile } from 'firebase/auth'
import { Form, Formik } from 'formik'
import { FC } from 'react'

import { Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { useAppDispatch, useAppSelector, useDialog } from '@hooks'
import { setUser } from '@reducers'
import { getUserData } from '@selectors'
import { isGoogleProvider } from '@utils'

import { PersonalInfoForm } from './mocelules'
import { TPersonalInfoFormValues } from './types'
import { getPersonalInitialValues } from './utils'
import { validationSchema } from './validationSchema'

export const PersonalInfo: FC = () => {
  const user = useAppSelector(getUserData)
  const { dialog: Dialog, close, show } = useDialog()
  const dispatch = useAppDispatch()

  if (!user) {
    return null
  }

  const handleSubmit = ({ displayName, photoURL }: TPersonalInfoFormValues) => {
    updateProfile(user, { displayName, photoURL }).then(() => {
      dispatch(
        setUser({
          ...user,
          displayName,
          photoURL,
        }),
      )
    })
  }

  const handleDelete = () => {
    if (user) {
      deleteUser(user).then(() => close())
    }
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
        In this section, you can view, edit, or delete your personal information.
        <br />
        We value your privacy and give you complete control over your data.
      </Text>
      <Formik
        initialValues={getPersonalInitialValues(user)}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        <Form>
          <PersonalInfoForm
            onDeleteClick={show}
            onSubmitClick={handleSubmit}
            isGoogleProvider={isGoogleProvider(user)}
          />
        </Form>
      </Formik>
      <Dialog
        title="Are you sure?"
        subtitle="This action cannot be undone"
        cancelButtonText="Сancel"
        submitButtonText="Delete"
        onCancel={close}
        onSubmit={handleDelete}
      />
    </>
  )
}
