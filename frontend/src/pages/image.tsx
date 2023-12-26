import { NextPage } from 'next'
import Iamge from 'next/image'
// 画像ファイルをインポート
import Cover from '/public/images/cover.png'

const ImageSample: NextPage<void> = () => {
  return (
    <>
      <p>Iamgeコンポーネントで表示中</p>
      <Iamge src='http://books.google.com/books/content?id=Wx1dLwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' width={150} height={200}  alt="書影" />
    </>
  )
}

export default ImageSample
