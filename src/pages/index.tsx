import styled from "styled-components";
import dynamic from "next/dynamic";
import headHOC from "@/utils/headHOC";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";

import { getRandomCocktail } from "@/pages/api/index";

import Slide from "@/components/Slide";

const BannerSection = dynamic(() => import("@/templates/home/BannerSection"));

const ProductsSection = dynamic(
  () => import("@/templates/home/ProductsSection")
);

interface Props {
  token: string | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req, resolvedUrl, res } = context;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["data"], getRandomCocktail);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

function Home(props: Props) {
  const { data } = useQuery(["data"], getRandomCocktail, {
    staleTime: 10 * 1000,
  });

  return (
    <Main>
      {/* <Landing /> */}

      <Slide />
      <BannerSection />
      <ProductsSection />
    </Main>
  );
}

export default headHOC(Home, "home");

const Main = styled.main`
  position: relative;
  padding-top: 100vh;
`;
