import Head from 'next/head'
import { Layout } from '../components'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Yet Another Sales App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello, World!
      <Layout/>
    </div>
  )
}

export default Home;