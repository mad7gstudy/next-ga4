'use client'

import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google";
import { pageView } from "../_lib/ga4"
import { usePathname } from "next/navigation";
import { generateRandomString } from "../_lib/gen";

type Props = {
    params: Promise<{
        category: string,
    }>
}

const Page = async (props: Props) => {
    const category = (await props.params).category
    const c = () => {
        sendGAEvent('event', 'custom_event_from_category', { u: "user0001", s: "status1" })
        alert('sendGAEvent called.')
    }

    return (
        <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} dataLayer={{ nsl_user_id: `user_${generateRandomString()}`, nsl_user_status: `status_${generateRandomString()}` }} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? ""} debugMode={true} />
            <div>{category}</div>
            <button onClick={c}>sendGAEvent</button>
        </>
    )
}

export default Page
