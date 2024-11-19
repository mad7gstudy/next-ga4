'use client'

import { generateRandomString } from "@/app/_lib/gen"
import { GoogleAnalytics, GoogleTagManager, sendGAEvent } from "@next/third-parties/google"
import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
  params: Promise<{
    category: string,
    article: string
  }>
}

// // キャッシュ1日
// export const revalidate = 31536000

const Page = (props: Props) => {
  const [id, setId] = useState<String>("")
  const [category, setCategory] = useState<String>("")
  const [article, setArticle] = useState<String>("")
  useEffect(() => {
    const getParam = async () => {
      setCategory((await props.params).category)
      setArticle((await props.params).article)
    }
    getParam()
    setId(generateRandomString())
  }, [])


  const c = () => {
    sendGAEvent('event', 'custom_event_from_category_article', { nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` })
    alert('sendGAEvent called.')
  }

  return (
    <>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} dataLayer={{ user_id: `user_${id}`, nsl_user_id: `user_${id}`, nsl_user_status: `status_${id}` }} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID ?? ""} debugMode={true} /> */}
      <Link href={"/"} >
        <div>{category} / {article}</div>
      </Link>
      <button onClick={c}>sendGAEvent</button>
    </>
  )
}

export default Page
