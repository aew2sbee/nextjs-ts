import * as next from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ISRProps = {
  message: string
}

const ENV: next.NextPage = (props) => {
  console.log('ENV -> process.env.TEST', process.env.TEST)
  console.log('ENV -> process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>下記に`process.env.TEST`を表示しております。</p>
        <p>{process.env.TEST}</p>
        <p>下記に`process.env.NEXT_PUBLIC_TEST`を表示しております。</p>
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </>
  )
}

export const getStaticProps: next.GetStaticProps = async (context) => {
  console.log('getStaticProps -> process.env.TEST', process.env.TEST)
  console.log('getStaticProps -> process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)
  return { props: {} }
}

export default ENV
