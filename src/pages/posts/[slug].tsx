import Page from "@containers/layout/page";

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
import { postFilePaths, POSTS_PATH } from "@utils/mdxUtils";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
// import { CH } from "@code-hike/mdx/components";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import { useHeadsObserver } from "@hooks/useObserver";
import getReadTime from "@utils/read-time";

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const BlogPage = styled(Page)`
  display: block;
`;

const TableOfContents = styled.aside`
  padding: 1rem;
  border-radius: 15px;

  align-self: flex-start;

  & ul li {
    margin-bottom: 0.5rem;
    font-weight: 300;
    padding: 0;
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
    width: 360px;
    position: fixed;
    left: 0;
    top: 40%;
    padding: 0 2rem;
  }
`;

const RelatedArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3rem;
  break-inside: avoid;
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
  // CH,
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
    image: `${frontMatter.coverImage}`,
    date: `${frontMatter.date}`,
    type: "article",
  };

  const [headings, setHeadings] = useState<any[]>([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3");
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
      <article>
        <div className="article--header">
          <div className="article--image">
            <Image
                      height={0}
                        width={0}
                        loader={({ src }) => src}
                        sizes="100vw"
                        style={{ width: '400px', height: 'auto' }}
                        src={frontMatter.coverImage} 
                      alt={ frontMatter.alt ? frontMatter.alt : '' }
                      className="blog--article__image"
                    />
            {/* <img src={frontMatter.coverImage} alt="" width={400} /> */}
          </div>

          <div className="article--information">
            <h1 className="article--heading">{frontMatter.title}</h1>

            <p className="article--description">{frontMatter.description}</p>

            <div className="article--details">
              {frontMatter.date && (
                <p className="article--created">
                  {" "}
                  {format(
                    parseISO(frontMatter.date ? frontMatter.date : ""),
                    "MMMM dd, yyyy"
                  )}
                </p>
              )}
              <p className="article--readtime">
                {getReadTime(source.compiledSource)} min read
              </p>
            </div>
          </div>
        </div>

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

        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </BlogPage>
  );
};

 // const { remarkCodeHike } = require("@code-hike/mdx");
  // [
        //   remarkCodeHike,
        //   {
        //     lineNumbers: true,
        //     showCopyButton: true,
        //     theme: "one-dark-pro",
        //     staticMediaQuery: "not screen, (max-width: 768px)",
        //     autoImport: false,
        //     autoLink: true,
        //   },
        // ],

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
 

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
      
      ],
      rehypePlugins: [
        rehypeSlug,
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
