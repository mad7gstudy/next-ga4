'use client'

import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { generateRandomString } from "../_lib/gen";
import Link from "next/link";
import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { useUser } from "../_context/userContext";

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

  const userIdInputRef = useRef<HTMLInputElement>(null);
  const userStateInputRef = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState<String>("")
  const { user, setUser } = useUser()
  console.log(user)


  useEffect(() => {
    const getParam = async () => {
      setCategory((await props.params).category)
    }
    getParam()
  }, [])
  const c = () => {
    sendGAEvent('event', 'survey_empty_file_download_event', { user_id: `${user.id}`, nsl_user_id: `${user.id}`, nsl_user_status: `${user.state}` })
    alert('sendGAEvent called.')
  }

  return (
    <>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} dataLayer={{ user_id: `user_${id}`, nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` }} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? ""} debugMode={true} /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>userId: {user.id}</label>
          <label>state: {user.state}</label>
        </div>
        <button
          onClick={c}
          style={{ marginLeft: '10px', padding: '5px 10px' }}
        >
          調査票ダウンロードイベントをGA4送信
        </button>
        <Link href={`/?gtm_debug=${gtmDebug}`}>
          <div>url: {`/${category}`}</div>
        </Link>
      </Suspense>
    </>
  )
}

export default Page
