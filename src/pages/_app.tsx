import Head from 'next/head'
import { FC } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { LayoutTemplate } from '@templates'
import { CLIENT_ID } from '@constants'
import '../styles/main.css'
import '../styles/scroll.css'


const MyApp: FC = ({ Component, pageProps }: any) => (
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Library app" />
      <link rel="icon" href="/favicon.ico" />

      <title>Library | Book searching app</title>
    </Head>
    <LayoutTemplate>
      <Component {...pageProps} />
    </LayoutTemplate>
  </GoogleOAuthProvider>
)

export default MyApp
