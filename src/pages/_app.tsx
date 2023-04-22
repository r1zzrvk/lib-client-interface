import Head from 'next/head'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { LayoutTemplate } from '@templates'
import { CLIENT_ID } from '@constants'
import '../styles/main.css'
import { store } from '../redux/store/store'

const MyApp: FC = ({ Component, pageProps }: any) => (
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Library app" />
      <link rel="icon" href="/favicon.ico" />

      <title>Library | Book searching app</title>
    </Head>
    <Provider store={store}>
      <LayoutTemplate>
        <Component {...pageProps} />
      </LayoutTemplate>
    </Provider>
  </GoogleOAuthProvider>
)

export default MyApp
