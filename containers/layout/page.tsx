import { useEffect } from "react";
import { Navigation, Footer } from "../../components/global";
import TagManager from "react-gtm-module";

import { MetaProps } from "../../types/layout";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  title?: string;
  description?: string;
};

export const WEBSITE_HOST_URL = "https://www.kalecream.com";

export const Page = ({
  children,
  title,
  description,
  customMeta,
}: LayoutProps) => {
  const siteTitle = title ? "KaleCream | " + title : "KaleCream";
  useEffect(() => {
    TagManager.initialize({ gtmId: "UA-148483444-1" });
  }, []);

  if (description === undefined) {
    description =
      "KaleCream is a generalist from Kingston, Jamaica who has a blog about web-dev, self-development and other things.";
  }

  return (
    <body>
      <header>
        <title>{siteTitle}</title>
        {customMeta ? (
          <meta name="description" content={customMeta.description} />
        ) : (
          description && <meta name="description" content={description} />
        )}
        <Navigation />
      </header>

      <main>
        <>{children}</>
      </main>
      <Footer />
    </body>
  );
};

export default Page;
