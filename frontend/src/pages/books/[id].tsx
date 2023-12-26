import * as next from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type BookProps = {
  id: string | undefined
}

const Book: next.NextPage<BookProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    return <>Loading....</>
  }

  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>This page was generated using Static Site Generation (SSG).</p>
        <p>{`This URL of page was /books/${id}`}</p>
      </main>
    </>
  )
}

export const getStaticPaths: next.GetStaticPaths = async () => {
  const paths = [
    { params: { id: '1' }},
    { params: { id: '2' }},
    { params: { id: '3' }}
  ]
  return { paths, fallback: false }
}

// パラメータの型を定義
interface BookParams extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: next.GetStaticProps<BookProps, BookParams> = async (context) => {
  return {
    props: { id: context.params!['id'] }
  }
}

export default Book
