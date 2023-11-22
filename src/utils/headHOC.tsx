import Head from "next/head";

import Layout from "@/components/Layout";

interface ISeoInfo {
  title: string;
  ogTitle: string;
  description: string;
  url: string;
  image: string;
}

const headHOC = (Component: any, customLayoutType?: "home") => {
  const HOC = (props: any) => {
    const seoInfo: ISeoInfo = props.seoInfo ?? {};
    const defaultTitle = "HATEBEINGSOBER";
    const ogDefaultTitle = "HATEBEINGSOBER | SING SING DRiNK";
    const defaultUrl = "";
    const defaultImage = "";
    const defaultDescription = "Cool kids never die";

    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut_icon" href="/favicon.ico" />
          <title>{seoInfo.title ?? defaultTitle}</title>
          <meta name="description" content={defaultDescription} />

          <meta property="og:locale" content="ko_KR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={seoInfo.ogTitle ?? ogDefaultTitle}
          />
          <meta property="og:url" content={seoInfo.url ?? defaultUrl} />
          <meta property="og:site_name" content={defaultTitle} />
          <meta property="og:description" content={defaultDescription} />
          <meta property="og:image" content={seoInfo.image ?? defaultImage} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={seoInfo.title ?? defaultTitle} />
          <meta
            name="twitter:description"
            content={seoInfo.description ?? defaultDescription}
          />
          <meta name="twitter:image" content={defaultImage} />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          {/* <-- Google --> */}
          <meta
            name="google-signin-client_id"
            content={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          />
        </Head>
        {!customLayoutType && <Component {...props} />}
        {customLayoutType == "home" && (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      </>
    );
  };
  return HOC;
};

export default headHOC;
