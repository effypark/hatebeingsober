import { ReactElement, ReactNode, useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { NextPage } from "next";
import { theme } from "../styles/theme";
import { wrapper } from "@/store/store";
import GlobalStyle from "@/styles/globalStyle";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout ?? ((page) => page);

  console.log(
    `%c
██╗  ██╗ █████╗ ████████╗███████╗  
██║  ██║██╔══██╗╚══██╔══╝██╔════╝  
███████║███████║   ██║   █████╗    
██╔══██║██╔══██║   ██║   ██╔══╝    
██║  ██║██║  ██║   ██║   ███████╗  
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝  

██████╗ ███████╗██╗███╗   ██╗ ██████╗ 
██╔══██╗██╔════╝██║████╗  ██║██╔════╝ 
██████╔╝█████╗  ██║██╔██╗ ██║██║  ███╗
██╔══██╗██╔══╝  ██║██║╚██╗██║██║   ██║
██████╔╝███████╗██║██║ ╚████║╚██████╔╝
╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 


███████╗ ██████╗ ██████╗ ███████╗██████╗ 
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
███████╗██║   ██║██████╔╝█████╗  ██████╔╝
╚════██║██║   ██║██╔══██╗██╔══╝  ██╔══██╗
███████║╚██████╔╝██████╔╝███████╗██║  ██║
╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝
`,
    "color:#E06469"
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(App);
