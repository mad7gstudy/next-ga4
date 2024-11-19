// 'use client'

import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google";
import { pageView } from "../_lib/ga4"
import { usePathname } from "next/navigation";
import { generateRandomString } from "../_lib/gen";
import Link from "next/link";

type Props = {
  params: Promise<{
    category: string,
  }>
}

const Page = async (props: Props) => {
  const category = (await props.params).category
  const id = generateRandomString()
  const c = () => {
    sendGAEvent('event', 'custom_event_from_category', { nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` })
    alert('sendGAEvent called.')
  }

  return (
    <>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} dataLayer={{ user_id: `user_${id}`, nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` }} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? ""} debugMode={true} /> */}
      <Link href={"/"}>
      <div>{category}</div>
      </Link>
      <button onClick={c}>sendGAEvent</button>
    </>
  )
}

export default Page
