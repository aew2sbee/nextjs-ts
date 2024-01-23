import * as next from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

type SSGProps = {
  message: string
}

const Main: next.NextPage<SSGProps> = (props) => {
  // const { message } = props
  // const router = useRouter();

  return (
    <>
      <Head>
        <title>Next/Link Tag</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      fetcher



        {/* <button onClick={() => router.push("/ssg")}>Go to SSG Page</button> */}
        {/* <button onClick={() => router.reload()}>reload</button> */}
        {/* <Link href="/ssg">Go to SSG Page</Link> */}
        {/* <Link
          href={{
            pathname: '/ssg',
            query: { keyword: 'hello' }
          }}
        >
          Go to SSG Page with query
        </Link> */}
        {/* <Link href="/ssg">
          <button>Jump to SSG Page</button>
        </Link> */}
      </main>
    </>
  )
}

export default Main
