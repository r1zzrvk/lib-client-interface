/* eslint-disable import/no-default-export */
import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { config } from '@fortawesome/fontawesome-svg-core'

import { PagePreloader } from '@ui-kit'

import { store } from '@store'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/main.css'

config.autoAddCss = false

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: FC = ({ Component, pageProps }: any) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Lib | Book searching app</title>
        <meta
          name="description"
          content="Find your next read with ease. Search for books by title, author, genre or keyword. Start your journey today and dive into a world of literature."
        />
        <meta name="keywords" content="books, book, lists, searching, library, read, collections, bookshelves" />

        <meta property="og:title" content="Lib | Book searching app" />
        <meta property="og:site_name" content="Lib" />

        <meta property="og:url" content="https://lib-booksearch.vercel.app/" />
        <meta property="og:url" content="https://lib-booksearch.vercel.app/books" />
        <meta property="og:url" content="https://lib-booksearch.vercel.app/login" />
        <meta property="og:url" content="https://lib-booksearch.vercel.app/lists" />
        <meta property="og:url" content="https://lib-booksearch.vercel.app/profile" />

        <meta
          property="og:description"
          content="Find your next read with ease. Search for books by title, author, genre or keyword. Start your journey today and dive into a world of literature."
        />
        <meta property="og:image" content="/previewBanner.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
      </Head>
      {isLoading ? <PagePreloader /> : <Component {...pageProps} />}
    </Provider>
  )
}

export default MyApp
