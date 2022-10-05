import Head from "next/head"
import { FC } from "react"
import '../styles/main.css'

const MyApp: FC = ({ Component, pageProps }: any) =>
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta name="description" content="Library app" />
      <link rel="icon" href="/favicon.ico" />

      <title>Lib</title>
    </Head>
    <Component {...pageProps} />
  </>

export default MyApp
