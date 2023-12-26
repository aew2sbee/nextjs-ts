import * as next from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SSGProps = {
  message: string
}

const SSG: next.NextPage<SSGProps> = (props) => {
  const { message } = props
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <button onClick={() => router.reload()}>reload</button> */}
        <button onClick={() => router.back()}>back</button>
        <p>This page was generated using Static Site Generation (SSG).</p>
        <p>{message}</p>
      </main> 
    </>
  )
}

export const getStaticProps: next.GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `[${timestamp}] : The getStaticProps was executed`
  console.log(message)
  return {
    props: { message }
  }
}

export default SSG
