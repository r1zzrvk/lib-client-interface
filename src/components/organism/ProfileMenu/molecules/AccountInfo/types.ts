export enum EAccountInfoFormFields {
  email = 'email',
  newEmail = 'newEmail',
  confirmNewEmail = 'confirmNewEmail',
  password = 'password',
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
  confirmNewPassword = 'confirmNewPassword',
}

export type TAccountInfoFormValues = {
  [EAccountInfoFormFields.email]: string
  [EAccountInfoFormFields.newEmail]: string
  [EAccountInfoFormFields.confirmNewEmail]: string
  [EAccountInfoFormFields.password]: string
  [EAccountInfoFormFields.oldPassword]: string
  [EAccountInfoFormFields.newPassword]: string
  [EAccountInfoFormFields.confirmNewPassword]: string
}
