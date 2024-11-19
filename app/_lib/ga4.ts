import { GoogleAnalytics, sendGAEvent, GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";


type Props = {
    pagePath?: string,
    userId?: string,
    status?: string
}

const pageView = (prop: Props) => {
    sendGAEvent('page_view', {
        page_path: prop.pagePath,
        user_id: prop.userId,
        // user_status: prop.status,
    });
}