import React, { useEffect, useMemo, useState } from "react";
import { Header, Footer } from "@components/navigation";
import TagManager from "react-gtm-module";
import { MetaProps } from "../../types/layout";
import Head from "next/head";
import dynamic from "next/dynamic";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  title?: string;
  description?: string;
};

export const WEBSITE_HOST_URL = "https://www.sabrinamedwinter.com";

const Preloader = dynamic(
  () => import("../../components/preloader/preloader"),
  {
    ssr: false,
  }
);

export const Page = ({
  children,
  title,
  description,
  customMeta,
}: LayoutProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    TagManager.initialize({ gtmId: "UA-148483444-1" });

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <>
      {loading ? (
          <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
            <Head>
              <title>{title ? (`SM | ${title}`) : "SM"}</title>
              <meta property="og:title" content={title ? (`SM | ${title}`) : "SM"} key="title" />
            
            {description ? (
              <meta name="description" content={description} />
            ) : (
              <meta
                name="description"
                content="Unlocking the digital realm with a fusion of Jamaican web development prowess and captivating 3D artistry."
              />
            )}
          </Head>
          <Header />

          <main>
            <>{children}</>
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default Page;
