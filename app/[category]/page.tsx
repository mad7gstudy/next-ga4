'use client'

import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { generateRandomString } from "../_lib/gen";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

type Props = {
  params: Promise<{
    category: string
    gtm_debug: string
  }>
}

const Page = (props: Props) => {
  const params = useSearchParams()
  const gtmDebug = params.get("gtm_debug")
  const id = generateRandomString()

  const [category, setCategory] = useState<String>("")
  useEffect(() => {
    const getParam = async () => {
      setCategory((await props.params).category)
    }
    getParam()
  }, [])
  const c = () => {
    sendGAEvent('event', 'custom_event_from_category', { user_id: `user_${id}`, nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` })
    alert('sendGAEvent called.')
  }

  return (
    <>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} dataLayer={{ user_id: `user_${id}`, nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` }} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? ""} debugMode={true} /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <Link href={`/?gtm_debug=${gtmDebug}`}>
          <div>{category}</div>
        </Link>
        <button onClick={c}>sendGAEvent</button>
      </Suspense>
    </>
  )
}

export default Page
