import TopBanner from "../TopBanner";
import Nav from "../Nav";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBanner />
      <Nav />
      {children}
    </>
  );
}
