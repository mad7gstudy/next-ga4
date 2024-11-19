import { GoogleAnalytics, sendGAEvent, GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";


type Props = {
    pagePath?: string,
    userId?: string,
    status?: string
}

const pageView = (prop: Props) => {
    sendGAEvent('page_view', {
        page_path: prop.pagePath,
        u: prop.userId,
        s: prop.status
    });
}

export { pageView } 