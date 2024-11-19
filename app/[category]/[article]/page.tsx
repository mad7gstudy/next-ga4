// 'use client'

import { generateRandomString } from "@/app/_lib/gen"
import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google"

type Props = {
  params: Promise<{
    category: string,
    article: string
  }>
}

// // キャッシュ1日
// export const revalidate = 31536000

const Page = async (props: Props) => {
  const category = (await props.params).category
  const article = (await props.params).article

  // const id = generateRandomString()
  // const c = () => {
  //   sendGAEvent('event', 'custom_event_from_category_article', { u: "user0002", s: "status2" })
  //   alert('sendGAEvent called.')
  // }

  return (
    <>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} dataLayer={{ nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` }} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? ""} debugMode={true} /> */}
      <div>{category} / {article}</div>
      {/* <button onClick={c}>sendGAEvent</button> */}
    </>
  )
}

export default Page
