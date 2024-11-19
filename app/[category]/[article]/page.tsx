'use client'

import { sendGAEvent } from "@next/third-parties/google"

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

    const c = () => {
        sendGAEvent('event', 'custom_event_from_category_article', { u: "user0002", s: "status2" })
        alert('sendGAEvent called.')
    }
    
    return (
        <>
            <div>{category} / {article}</div>
            <button onClick={c}>sendGAEvent</button>
        </>
    )
}

export default Page
