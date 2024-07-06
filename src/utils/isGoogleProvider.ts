import { TFirebaseUser } from '@types'

const GOOGLE_PROVIDER_ID = 'google.com'

export const isGoogleProvider = (user: TFirebaseUser) => user.providerData[0].providerId === GOOGLE_PROVIDER_ID
