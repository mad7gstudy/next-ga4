'use client'

import { useUser } from "@/app/_context/userContext"
import { generateRandomString } from "@/app/_lib/gen"
import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useRef, useState } from "react"

type Props = {
  params: Promise<{
    category: string
    article: string
    gtm_debug: string
  }>
}

// // キャッシュ1日
// export const revalidate = 31536000

const Page = (props: Props) => {
  const params = useSearchParams()
  const gtmDebug = params.get("gtm_debug")
  const id = generateRandomString()

  const userIdInputRef = useRef<HTMLInputElement>(null);
  const userStateInputRef = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState<String>("")
  const [article, setArticle] = useState<String>("")

  const { user, setUser } = useUser()
  console.log(user)

  useEffect(() => {
    const getParam = async () => {
      setCategory((await props.params).category)
      setArticle((await props.params).article)
    }
    getParam()
  }, [])


  const c = () => {
    sendGAEvent('event', 'low_data_download_event', { user_id: `${userIdInputRef.current!.value}`, nsl_user_id: `${userIdInputRef.current!.value}`, nsl_user_status: `${userStateInputRef.current!.value}` })
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
          ローデータダウンロードをGA4送信
        </button>
        <Link href={`/?gtm_debug=${gtmDebug}`}>
          <div>{category} / {article}</div>
        </Link>
      </Suspense>
    </>
  )
}

export default Page
