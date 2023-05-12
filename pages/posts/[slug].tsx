import Page from "../../containers/layout/page";

import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { MetaProps } from "../../types/layout";
import { PostType } from "../../types/post";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Caption } from "../../components/global";

import { useHeadsObserver } from "../../hooks/useObserver";
import getReadTime from "../../lib/read-time";

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const BlogPage = styled(Page)`
  display: block;
`;

const CustomArticle = styled.article`
  width: 90%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  & h1,
  h2,
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    margin: 2rem 0;
  }

  & ol,
  ul {
    list-style-position: inside;

    & li {
      text-indent: 0.5rem;
      line-height: 1.6;
    }
  }

  & p {
    text-align: justify;
    line-height: 1.4;
  }

  & pre {
    background: #303030;
    color: #f1f1f1;
    padding: 2rem 1rem;
    border-radius: 15px;
    border-top: 4px solid var(--primary);
    -moz-box-shadow: inset 0 0 10px #000;
    box-shadow: inset 0 0 10px #000;
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    word-break: keep-all;
    counter-reset: line;
  }

  & pre span {
    display: block;
    line-height: 1.5rem;
  }

  pre span:before {
    counter-increment: line;
    content: counter(line);
    display: inline-block;
    // border-right: 1px solid #ddd;
    padding: 0 0.5em;
    margin-right: 0.5em;
    color: #888;
  }

  @media (max-width: 320px) {
    max-width: 20rem;
  }

  @media (min-width: 900px) {
    max-width: 50rem;
  }

  @media (min-width: 900px) {
    max-width: 45rem;
    margin-left: 300px;
    padding: 0 2.5rem;
  }

  @media (min-width: 1200px) {
    max-width: 65rem;
    margin-left: 400px;
    margin-top: 5rem;

    & p,
    li {
      font-size: 1rem;
    }
  }
`;

const TableOfContents = styled.aside`
  width: 275px;
  min-width: 250px;
  max-height: calc(100vh - 4rem);

  align-self: flex-start;

  & ul li {
    margin-bottom: 0.5rem;
    font-weight: 300;
  }

  & ul li:hover {
    color: var(--primary);
  }

  & ul li::marker {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
    margin-left: 1rem;
    padding: 0 2rem;
  }

  @media (min-width: 1440px) {
    display: block;
  }

  @media (min-width: 2560px) {
    position: fixed;
    top: 5rem;
    overflow: auto;
    top: 20%;
  }
`;

const CustomH1 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h1 {...rest} />
      </Link>
    );
  }
  return <h1 {...rest} />;
};

const CustomH2 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h2 {...rest} />
      </Link>
    );
  }
  return <h2 {...rest} />;
};

const CustomH3 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h3 {...rest} />
      </Link>
    );
  }
  return <h3 {...rest} />;
};

const CustomH4 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h4 {...rest} />
      </Link>
    );
  }
  return <h4 {...rest} />;
};

const CustomH5 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h5 {...rest} />
      </Link>
    );
  }
  return <h5 {...rest} />;
};

const CustomH6 = ({ id, ...rest }) => {
  if (id) {
    return (
      <Link href={`#${id}`}>
        <h6 {...rest} />
      </Link>
    );
  }
  return <h6 {...rest} />;
};

const CustomImage = ({ src, ...rest }) => {
  return (
    <Image alt="" src={src} {...rest} unoptimized={true} unselectable="on" />
  );
};

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  CustomImage,
  Link,
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
};

const getClassName = (level: string) => {
  switch (level) {
    case "H2":
      return "head2";
    case "H3":
      return "head3";
    default:
      return "head2";
  }
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title}`,
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    date: `${frontMatter.date}`,
    type: "article",
  };

  const [headings, setHeadings] = useState<any[]>([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const headings = document.querySelectorAll(" h2, h3");
    const headingList = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      level: heading.tagName,
    }));
    setHeadings(headingList);
  }, []);

  return (
    <BlogPage customMeta={customMeta}>
      {/* Nest the smaller headers inside the larger headers to denote hierarchy */}
      <TableOfContents>
        <ul>
          {headings.map((heading) => {
            const activeHeader =
              document.querySelector(`#${heading.id}`) ?? headings[0].id;
            return (
              <li
                key={heading.id}
                className={getClassName(heading.level)}
                onClick={(e) => {
                  e.preventDefault();
                  activeHeader.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                style={{
                  fontWeight: activeId === heading.id ? "bold" : "normal",
                }}
              >
                {heading.text}
              </li>
            );
          })}
        </ul>
      </TableOfContents>
      <CustomArticle>
        <Caption>
          {format(
            parseISO(frontMatter.date ? frontMatter.date : ""),
            "MMMM dd, yyyy"
          )}
        </Caption>
        <h1
          style={{
            lineHeight: "1.2",
          }}
        >
          {frontMatter.title}
        </h1>
        <Caption style={{ marginLeft: "1rem" }}>
          {getReadTime(source.compiledSource)} minute read
        </Caption>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </CustomArticle>
    </BlogPage>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
