export enum EPersonalInfoFormFields {
  displayName = 'displayName',
  photoURL = 'photoURL',
  lastSignInTime = 'lastSignInTime',
  creationTime = 'creationTime',
}

export type TPersonalInfoFormValues = {
  [EPersonalInfoFormFields.displayName]: string
  [EPersonalInfoFormFields.photoURL]: string
  [EPersonalInfoFormFields.lastSignInTime]: string
  [EPersonalInfoFormFields.creationTime]: string
}
