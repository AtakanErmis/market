import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@components/header";
import Footer from "@components/footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>Market</title>
    </Head>
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </div>
);

export default Layout;
