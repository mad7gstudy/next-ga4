'use client'

import { sendGAEvent } from "@next/third-parties/google";
import { pageView } from "../_lib/ga4"
import { usePathname } from "next/navigation";

type Props = {
    params: Promise<{
        category: string,
    }>
}

// type Props = {
//     params: {
//         category: string,
//     }
// }

// // キャッシュ1日
// export const revalidate = 31536000

const Page = async (props: Props) => {
// const Page = (props: Props) => {
    const category =  (await props.params).category
    // const category =  props.params.category

    // pageView({
    //     pagePath: url,
    //     userId: "user0001",
    //     status: "status1"
    // })

    const c = () => {
        sendGAEvent('event', 'custom_event_from_category', { u: "user0001", s: "status1" })
        alert('sendGAEvent called.')
    }
    
    return (
        <>
            <div>{category}</div>
            <button onClick={c}>sendGAEvent</button>
        </>
    )
}

export default Page
