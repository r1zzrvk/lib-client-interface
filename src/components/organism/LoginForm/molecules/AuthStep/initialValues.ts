import { EAuthFormFields, TAuthFormValues } from './types'

export const authFormInitialValues: TAuthFormValues = {
  [EAuthFormFields.email]: '',
  [EAuthFormFields.password]: '',
}
