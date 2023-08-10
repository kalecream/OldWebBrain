import { useEffect } from "react";
import { Navigation, Footer } from "../../components/global";
import TagManager from "react-gtm-module";
import { MetaProps } from "../../types/layout";
import Head from "next/head";
  
type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  title?: string;
  description?: string;
};

export const WEBSITE_HOST_URL = "https://www.sabrinamedwinter.com";


export const Page = ({
  children,
  title,
  description,
  customMeta,
}: LayoutProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "UA-148483444-1" });
  }, []);

  if (description === undefined) {
    description =
      "Sabrina is a webdev and 3D artist from Kingston, Jamaica.";
  }

  return (
    <>
      <header>
        <Navigation />
      </header>
      
      <main>
        <>{children}</>
      </main>

      <Footer />
    </>
  );
};

export default Page;
