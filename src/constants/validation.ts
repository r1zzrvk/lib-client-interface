/* eslint-disable quotes */
export const EMAIL_REGEX = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

export const MAX_SYMBOLS = 256
export const MIN_PASSWORD_SYMBOLS = 8
export const DISPLAY_NAME_REQUIRED = 'Name cannot be empty'
export const EMAIL_ERROR = 'Type a correct email. Example: User@mail.com'
export const EMAIL_REQUIRED = 'Email cannot be empty'
export const EMAILS_NO_MATCH = "Emails don't match"
export const NEW_EMAIL_IS_CURRENT_EMAIL = 'New email should be different from the current email'
export const NEW_PASSWORD_IS_CURRENT_PASSWORD = 'New password should be different from the current password'
export const FIELD_IS_TOO_LONG = `Too long. Max number of characters is ${MAX_SYMBOLS}`
export const PASSWORD_REQUIRED = 'Password cannot be empty'
export const CONFIRMATION_REQUIRED = 'Confirmation cannot be empty'
export const PASSWORD_IS_TOO_SHORT = `Minimum number of characters is ${MIN_PASSWORD_SYMBOLS}`
export const PASSWORDS_NO_MATCH = "Passwords don't match"
export const AVATAR_URL_REQUIRED = 'Avatar URL cannot be empty'
