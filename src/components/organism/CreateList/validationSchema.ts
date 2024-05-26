import { object, string } from 'yup'
import { EListFormFields } from './types'
import { FIELD_IS_TOO_LONG, LIST_TITLE_IS_REQUIRED, MAX_SYMBOLS } from './constants'

export const validationSchema = object().shape({
  [EListFormFields.title]: string().required(LIST_TITLE_IS_REQUIRED).max(MAX_SYMBOLS, FIELD_IS_TOO_LONG),
  [EListFormFields.description]: string().max(MAX_SYMBOLS, FIELD_IS_TOO_LONG),
})
