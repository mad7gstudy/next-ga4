import { Metadata } from 'next'

type Props = {
    params: {
        category: string,
        article: string
    }
}

// キャッシュ1日
export const revalidate = 31536000

const Article = async (props: Props) => {
    return (
        <>
            <div>{props.params.category} / {props.params.article}</div>
        </>
    )
}

export default Article
