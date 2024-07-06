import { object, string } from 'yup'
import { FIELD_IS_TOO_LONG, MAX_SYMBOLS } from '@constants'
import { EListFormFields } from './types'
import { LIST_TITLE_IS_REQUIRED } from './constants'

export const validationSchema = object().shape({
  [EListFormFields.title]: string().required(LIST_TITLE_IS_REQUIRED).max(MAX_SYMBOLS, FIELD_IS_TOO_LONG),
  [EListFormFields.description]: string().max(MAX_SYMBOLS, FIELD_IS_TOO_LONG),
})
