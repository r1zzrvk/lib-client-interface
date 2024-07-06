export enum EAuthFormFields {
  email = 'email',
  password = 'password',
}

export type TAuthFormValues = {
  [EAuthFormFields.email]: string
  [EAuthFormFields.password]: string
}
