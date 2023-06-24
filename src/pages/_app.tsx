import Head from 'next/head'
import { FC } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CLIENT_ID } from '@constants'
import '../styles/main.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
// import { store } from '../redux/store/store'

const MyApp: FC = ({ Component, pageProps }: any) => (
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0"/>
      <meta name="description" content="Library app" />
      <link rel="icon" href="/favicon.ico" />

      <title>Library | Book searching app</title>
    </Head>
        <Component {...pageProps} />
  </GoogleOAuthProvider>
)

export default MyApp
