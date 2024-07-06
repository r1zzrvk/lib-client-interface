import { EAccountInfoFormFields, TAccountInfoFormValues } from './types'

export const accountInfoFormInitialValues: TAccountInfoFormValues = {
  [EAccountInfoFormFields.email]: '',
  [EAccountInfoFormFields.newEmail]: '',
  [EAccountInfoFormFields.confirmNewEmail]: '',
  [EAccountInfoFormFields.password]: '********',
  [EAccountInfoFormFields.oldPassword]: '',
  [EAccountInfoFormFields.newPassword]: '',
  [EAccountInfoFormFields.confirmNewPassword]: '',
}
