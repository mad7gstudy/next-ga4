'use client'

import { pageView } from "../_lib/ga4"
import { usePathname } from "next/navigation";

// type Props = {
//     params: Promise<{
//         category: string,
//     }>
// }

type Props = {
    params: {
        category: string,
    }
}

// // キャッシュ1日
// export const revalidate = 31536000

// const Page = async (props: Props) => {
const Page = (props: Props) => {
    // const category =  (await props.params).category
    const category =  props.params.category
    const url = usePathname()

    pageView({
        pagePath: url,
        userId: "user0001",
        status: "status1"
    })
    
    return (
        <>
            <div>{category}</div>
        </>
    )
}

export default Page
