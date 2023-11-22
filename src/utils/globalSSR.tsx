import { GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";
import { URL_LIST, URL_LOGIN } from "@/constants/urls";

const Auth = (handler: any) => {
  return async (context: GetServerSidePropsContext) => {
    const { req, resolvedUrl, query } = context;
    const cookie = getCookie("token", { req });

    const queryStr: any = query.orderId ? query.orderId : "";

    let block = false;
    URL_LIST(queryStr).map((e) => {
      if (e.path == resolvedUrl && e.authority > 0 && !cookie) block = true;
    });

    if (block) {
      return {
        redirect: {
          destination: `${URL_LOGIN.path}`,
          permanent: false,
        },
      };
    } else {
      return await handler(!!cookie, context);
    }
  };
};

export const AuthSSR = (handler: any) => Auth(handler);
