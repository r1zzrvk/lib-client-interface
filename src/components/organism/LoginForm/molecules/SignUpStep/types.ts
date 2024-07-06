export enum ESignUpFormFields {
  displayName = 'displayName',
  email = 'email',
  confirmEmail = 'confirmEmail',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

export type TSignUpValues = {
  [ESignUpFormFields.displayName]: string
  [ESignUpFormFields.email]: string
  [ESignUpFormFields.password]: string
  [ESignUpFormFields.confirmEmail]: string
  [ESignUpFormFields.confirmPassword]: string
}
