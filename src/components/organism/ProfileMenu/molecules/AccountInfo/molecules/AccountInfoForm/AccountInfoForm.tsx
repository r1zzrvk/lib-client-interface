import { FormikErrors, FormikState, useFormikContext } from 'formik'
import { Dispatch, FC, SetStateAction, useState } from 'react'

import { Input, Spacer, Text } from '@ui-kit'

import { theme } from '@constants'
import { TFirebaseUser } from '@types'

import { EAccountInfoFormFields, TAccountInfoFormValues } from '../../types'
import { ButtonBlock } from '../ButtonBlock'
import { EmailConfirmation } from '../EmailConfirmation'

type TAccountInfoFormProps = {
  user: TFirebaseUser
  editingFields: {
    email: boolean
    password: boolean
  }
  setEditing: Dispatch<
    SetStateAction<{
      email: boolean
      password: boolean
    }>
  >
  onSubmit: (
    values: TAccountInfoFormValues,
    setErrors: (errors: FormikErrors<TAccountInfoFormValues>) => void,
    resetForm: (nextState?: Partial<FormikState<TAccountInfoFormValues>> | undefined) => void,
  ) => void
  onConfirmEmail: () => void
}

export const AccountInfoForm: FC<TAccountInfoFormProps> = ({
  user,
  onSubmit,
  editingFields,
  setEditing,
  onConfirmEmail,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false)
  const { values, setFieldValue, errors, validateForm, resetForm, setErrors } =
    useFormikContext<TAccountInfoFormValues>()
  const { email, password, confirmNewEmail, newEmail, newPassword, confirmNewPassword, oldPassword } = values

  const handleCancel = () => {
    resetForm()
    setEditing({
      email: false,
      password: false,
    })
  }

  const handleEdit = (field: EAccountInfoFormFields, state: boolean) => {
    resetForm()
    setEditing({
      email: field === EAccountInfoFormFields.email ? state : false,
      password: field === EAccountInfoFormFields.password ? state : false,
    })
  }

  const handleSubmit = () => {
    validateForm().then(formikErrors => {
      if (Object.values(formikErrors).length === 0) {
        onSubmit(values, setErrors, resetForm)
      }
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
        Your email
      </Text>
      <Input
        value={email}
        name={EAccountInfoFormFields.email}
        type="text"
        placeholder="Email"
        onChange={({ target }) => setFieldValue(EAccountInfoFormFields.email, target.value)}
        icon="at_solid"
        error={errors[EAccountInfoFormFields.email]}
        buttonIcon="edit_solid"
        onClick={() => handleEdit(EAccountInfoFormFields.email, true)}
        hasButton={!editingFields[EAccountInfoFormFields.email]}
        disabled
        fluid
        hasIcon
      />
      <EmailConfirmation
        isEditing={editingFields[EAccountInfoFormFields.email]}
        isConfirmed={user.emailVerified}
        onConfirmEmail={onConfirmEmail}
      />
      {editingFields[EAccountInfoFormFields.email] && (
        <>
          <Spacer size={theme.space.sm} samespace />
          <Input
            value={newEmail}
            name={EAccountInfoFormFields.newEmail}
            type="text"
            placeholder="New email"
            onClear={() => setFieldValue(EAccountInfoFormFields.newEmail, '')}
            onChange={({ target }) => setFieldValue(EAccountInfoFormFields.newEmail, target.value)}
            icon="at_solid"
            isClearable={!!email}
            error={errors[EAccountInfoFormFields.newEmail]}
            fluid
            hasIcon
          />
          <Spacer size={theme.space.sm} samespace />
          <Input
            value={confirmNewEmail}
            name={EAccountInfoFormFields.confirmNewEmail}
            type="text"
            placeholder="Confirm new email"
            onClear={() => setFieldValue(EAccountInfoFormFields.confirmNewEmail, '')}
            onChange={({ target }) => setFieldValue(EAccountInfoFormFields.confirmNewEmail, target.value)}
            icon="at_solid"
            isClearable={!!email}
            error={errors[EAccountInfoFormFields.confirmNewEmail]}
            fluid
            hasIcon
          />
          <Spacer size={theme.space.md} samespace />
          <ButtonBlock onCancel={handleCancel} onSubmit={handleSubmit} />
        </>
      )}
      <Spacer size={theme.space.sm} samespace />
      <Text
        color={theme.colors.grey_light}
        fontSizeMob={theme.fonts.size.regular.md}
        fontHeightMob={theme.fonts.height.regular.md}
        marginBottom={theme.space.xs3}
        marginBottomMob={theme.space.xs3}
      >
        {editingFields[EAccountInfoFormFields.password]
          ? 'Enter your current password to set a new one.'
          : 'Your password is hidden for security reasons, but you can change it if you need to.'}
      </Text>
      {editingFields[EAccountInfoFormFields.password] || (
        <Input
          value={password}
          name={EAccountInfoFormFields.password}
          type="password"
          placeholder="Password"
          onChange={({ target }) => setFieldValue(EAccountInfoFormFields.password, target.value)}
          icon="lock_solid"
          error={errors[EAccountInfoFormFields.password]}
          disabled
          buttonIcon="edit_solid"
          onClick={() => handleEdit(EAccountInfoFormFields.password, true)}
          hasButton={!editingFields[EAccountInfoFormFields.password]}
          fluid
          hasIcon
        />
      )}
      {editingFields[EAccountInfoFormFields.password] && (
        <>
          <Input
            value={oldPassword}
            name={EAccountInfoFormFields.oldPassword}
            type={isOldPasswordVisible ? 'text' : 'password'}
            placeholder="Old password"
            onClear={() => setFieldValue(EAccountInfoFormFields.oldPassword, '')}
            onChange={({ target }) => setFieldValue(EAccountInfoFormFields.oldPassword, target.value)}
            onClick={() => setIsOldPasswordVisible(prev => !prev)}
            buttonIcon={isOldPasswordVisible ? 'slashEye_solid' : 'eye_solid'}
            icon="lock_solid"
            isClearable={!!oldPassword}
            error={errors[EAccountInfoFormFields.oldPassword]}
            fluid
            hasIcon
            hasButton
          />
          <Spacer size={theme.space.sm} samespace />
          <Input
            value={newPassword}
            name={EAccountInfoFormFields.newPassword}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="New password"
            onClear={() => setFieldValue(EAccountInfoFormFields.newPassword, '')}
            onChange={({ target }) => setFieldValue(EAccountInfoFormFields.newPassword, target.value)}
            onClick={() => setIsPasswordVisible(prev => !prev)}
            buttonIcon={isPasswordVisible ? 'slashEye_solid' : 'eye_solid'}
            icon="lock_solid"
            isClearable={!!newPassword}
            error={errors[EAccountInfoFormFields.newPassword]}
            fluid
            hasIcon
            hasButton
          />
          <Spacer size={theme.space.sm} samespace />
          <Input
            value={confirmNewPassword}
            name={EAccountInfoFormFields.confirmNewPassword}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm new password"
            onClear={() => setFieldValue(EAccountInfoFormFields.confirmNewPassword, '')}
            onChange={({ target }) => setFieldValue(EAccountInfoFormFields.confirmNewPassword, target.value)}
            onClick={() => setIsPasswordVisible(prev => !prev)}
            buttonIcon={isPasswordVisible ? 'slashEye_solid' : 'eye_solid'}
            icon="lock_solid"
            isClearable={!!confirmNewPassword}
            error={errors[EAccountInfoFormFields.confirmNewPassword]}
            fluid
            hasIcon
            hasButton
          />
          <Spacer size={theme.space.md} samespace />
          <ButtonBlock onCancel={handleCancel} onSubmit={handleSubmit} />
        </>
      )}
      <Spacer size={theme.space.lg} samespace />
    </div>
  )
}
