type Props = {
    params: Promise<{
        category: string,
        article: string
    }>
}

// // キャッシュ1日
// export const revalidate = 31536000

const Page = async (props: Props) => {
    const category =  (await props.params).category
    const article =  (await props.params).article
    return (
        <>
            <div>{category} / {article}</div>
        </>
    )
}

export default Page
