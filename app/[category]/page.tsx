import { Metadata } from 'next'

type Props = {
  params: { category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const revalidate = 31536000

const ArticleListByCategory = async ({ params, searchParams }: Props) => {
  return (
    <>
        <div>{params.category}</div>
    </>
  )
}

export default ArticleListByCategory
