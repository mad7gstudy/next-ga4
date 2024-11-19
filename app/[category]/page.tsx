type Props = {
    params: Promise<{
        category: string,
    }>
}

// // キャッシュ1日
// export const revalidate = 31536000

const Page = async (props: Props) => {
    const category =  (await props.params).category
    return (
        <>
            <div>{category}</div>
        </>
    )
}

export default Page
