import Head from 'next/head'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '@store'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/main.css'

config.autoAddCss = false

const MyApp: FC = ({ Component, pageProps }: any) => (
  <Provider store={store}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
      <meta name="description" content="Library app" />
      <link rel="icon" href="/favicon.ico" />

      <title>Library | Book searching app</title>
    </Head>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
