export enum EListFormFields {
  title = 'title',
  description = 'description',
  isPinned = 'isPinned',
}

export type TListFormValues = {
  [EListFormFields.title]: string
  [EListFormFields.description]: string
  [EListFormFields.isPinned]: boolean
}
