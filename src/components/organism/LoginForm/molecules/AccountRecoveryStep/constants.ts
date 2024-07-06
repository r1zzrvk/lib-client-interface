export const RECOVERY_SUBTITLE =
  'Please enter the email address associated with the account you want to recover. We will send a recover link to that email address. You will also need to set a new password.'

export const getConfirmationSubtitle = (email: string) =>
  `We have sent a link to the specified email address: \n\n ${email}.\n\nPlease follow the link to recover your account.`
