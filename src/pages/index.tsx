import Head from 'next/head'
import { FC } from 'react'
import { Header } from '../components/UI/Header'

const Home: FC = () => (
  <>
    <div>
      <Head>
        <title>Lib</title>
        < meta name="description" content="Library app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div></>
)

export default Home