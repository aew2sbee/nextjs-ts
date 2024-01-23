import * as next from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ISRProps = {
  message: string
}

const ISR: next.NextPage<ISRProps> = (props) => {
  const { message } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This page was generated using Static Site Generation (ISR).</p>
        <p>{message}</p>
      </main>
    </>
  )
}

export const getStaticProps: next.GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `[${timestamp}] : The getStaticProps was executed(ISR)`
  console.log(message)
  return {
    props: { message },
    // ページの有効期間を秒単位で指定
    redirect: 10
  }
}

export default ISR
