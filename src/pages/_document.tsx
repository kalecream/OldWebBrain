import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link 
          rel="preload" 
          href="/assets/images/light-grey-terrazzo.webp" 
          as="image"
          fetchPriority="high"
        />
         <link 
          rel="preload" 
          href="/assets/images/stars.gif" 
          as="image"
          fetchPriority="high"
        />
      </Head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
