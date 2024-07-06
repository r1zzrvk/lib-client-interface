import { Flexbox } from '@components/atoms'
import { theme } from '@constants'
import { Button, Input, Spacer, Text } from '@ui-kit'
import { useFormikContext } from 'formik'
import { FC, useState } from 'react'
import { EPersonalInfoFormFields, TPersonalInfoFormValues } from '../../types'

type TPersonalInfoFormProps = {
  isGoogleProvider: boolean
  onDeleteClick: () => void
  onSubmitClick: (values: TPersonalInfoFormValues) => void
}

export const PersonalInfoForm: FC<TPersonalInfoFormProps> = ({ isGoogleProvider, onDeleteClick, onSubmitClick }) => {
  const { values, setFieldValue, errors, resetForm } = useFormikContext<TPersonalInfoFormValues>()
  const { displayName, photoURL, creationTime, lastSignInTime } = values
  const [editingFields, setEditingFields] = useState({
    [EPersonalInfoFormFields.displayName]: false,
    [EPersonalInfoFormFields.photoURL]: false,
  })
  const isEditing = Object.values(editingFields).some(item => item === true)
  const isErrors = Object.values(errors).length !== 0

  const handleEdit = (field: EPersonalInfoFormFields, state: boolean) => {
    setEditingFields({
      ...editingFields,
      [field]: state,
    })
  }

  const handleCancelEditing = () => {
    setEditingFields({
      displayName: false,
      photoURL: false,
    })
    resetForm()
  }

  const handleSubmit = () => {
    onSubmitClick(values)
    setEditingFields({
      displayName: false,
      photoURL: false,
    })
  }

  return (
    <div>
      <Text
        color={theme.colors.grey_light}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.xs3}
        marginBottomMob={theme.space.xs3}
      >
        Your name
      </Text>
      <Input
        value={displayName}
        name={EPersonalInfoFormFields.displayName}
        type="text"
        placeholder="Name"
        onClear={() => setFieldValue(EPersonalInfoFormFields.displayName, '')}
        onChange={({ target }) => setFieldValue(EPersonalInfoFormFields.displayName, target.value)}
        icon="user_solid"
        isClearable={!!displayName && editingFields[EPersonalInfoFormFields.displayName]}
        error={errors[EPersonalInfoFormFields.displayName]}
        disabled={!editingFields[EPersonalInfoFormFields.displayName]}
        buttonIcon="edit_solid"
        onClick={() => handleEdit(EPersonalInfoFormFields.displayName, true)}
        hasButton={!editingFields[EPersonalInfoFormFields.displayName]}
        fluid
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Text
        color={theme.colors.grey_light}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.xs3}
        marginBottomMob={theme.space.xs3}
      >
        Avatar link
      </Text>
      <Input
        value={photoURL}
        name={EPersonalInfoFormFields.photoURL}
        type="text"
        placeholder="Avatar URL"
        onClear={() => setFieldValue(EPersonalInfoFormFields.photoURL, '')}
        onChange={({ target }) => setFieldValue(EPersonalInfoFormFields.photoURL, target.value)}
        icon="image_solid"
        isClearable={!!photoURL && editingFields[EPersonalInfoFormFields.photoURL]}
        error={errors[EPersonalInfoFormFields.photoURL]}
        disabled={!editingFields[EPersonalInfoFormFields.photoURL]}
        buttonIcon="edit_solid"
        onClick={() => handleEdit(EPersonalInfoFormFields.photoURL, true)}
        hasButton={!editingFields[EPersonalInfoFormFields.photoURL]}
        fluid
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Text
        color={theme.colors.grey_light}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.xs3}
        marginBottomMob={theme.space.xs3}
      >
        Last login
      </Text>
      <Input
        value={lastSignInTime}
        name={EPersonalInfoFormFields.lastSignInTime}
        type="text"
        placeholder="Last login"
        onChange={() => ''}
        icon="calendar_solid"
        disabled
        fluid
        hasIcon
      />
      <Spacer size={theme.space.sm} samespace />
      <Text
        color={theme.colors.grey_light}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.xs3}
        marginBottomMob={theme.space.xs3}
      >
        Account creation date
      </Text>
      <Input
        value={creationTime}
        name={EPersonalInfoFormFields.creationTime}
        type="text"
        placeholder="Creation date"
        onChange={() => ''}
        icon="calendar_solid"
        disabled
        fluid
        hasIcon
      />
      <Spacer size={theme.space.lg} samespace />
      <Flexbox justify={isEditing ? 'end' : 'center'}>
        {isEditing && (
          <>
            <Button size="md" type="button" onClick={handleCancelEditing} isGhost>
              Cancel
            </Button>
            <Button size="lg" type="button" onClick={handleSubmit} disabled={isErrors}>
              Update
            </Button>
          </>
        )}
        {!isEditing && !isGoogleProvider && (
          <Button onClick={onDeleteClick} type="button" isGhost>
            Delete account
          </Button>
        )}
      </Flexbox>
    </div>
  )
}
