import { EPersonalInfoFormFields, TPersonalInfoFormValues } from './types'

export const personalInfoFormInitialValues: TPersonalInfoFormValues = {
  [EPersonalInfoFormFields.displayName]: '',
  [EPersonalInfoFormFields.photoURL]: '',
  [EPersonalInfoFormFields.lastSignInTime]: '',
  [EPersonalInfoFormFields.creationTime]: '',
}
