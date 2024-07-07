import { deleteUser, updateProfile } from 'firebase/auth'
import { Form, Formik } from 'formik'
import { FC, useState } from 'react'

import { Flexbox } from '@components/atoms'
import { Button, Modal, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { useAppDispatch, useAppSelector, useBreakpoint } from '@hooks'
import { setUser } from '@reducers'
import { getUserData } from '@selectors'
import { isGoogleProvider } from '@utils'

import { PersonalInfoForm } from './mocelules'
import { Styled } from './styled'
import { TPersonalInfoFormValues } from './types'
import { getPersonalInitialValues } from './utils'
import { validationSchema } from './validationSchema'

export const PersonalInfo: FC = () => {
  const user = useAppSelector(getUserData)
  const { isMob } = useBreakpoint()
  const [isDialogOpened, setIsDialogOpened] = useState(false)
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
      deleteUser(user).then(() => setIsDialogOpened(false))
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
            onDeleteClick={() => setIsDialogOpened(true)}
            onSubmitClick={handleSubmit}
            isGoogleProvider={isGoogleProvider(user)}
          />
        </Form>
      </Formik>
      <Modal isOpen={isDialogOpened} onClose={() => setIsDialogOpened(false)} size="sm" title="Are you sure?">
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
            This action cannot be undone
          </Text>
          <Spacer size={theme.space.md} sizeMob={theme.space.md} />
          <Flexbox justify="end" direction={isMob ? 'column' : 'row-reverse'}>
            <Button onClick={() => handleDelete()} isFluid={isMob} size="lg">
              Delete
            </Button>
            <Button onClick={() => setIsDialogOpened(false)} isFluid={isMob} size="sm" isGhost>
              Сancel
            </Button>
          </Flexbox>
        </Styled.Dialog>
      </Modal>
    </>
  )
}
