
import Page from "../../containers/layout/page";

import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import { MetaProps } from '../../types/layout';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";




type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const CustomArticle = styled.article`
  width: 100%;
  
  margin: 0 auto;
  margin-left: 300px;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (min-width: 750px) {
    padding: 0 2rem;
    max-width: 40rem;
  }

  @media (min-width: 1000px) {
    max-width: 65rem;
  }

  & h1, h2, h3, h4, h5, h6 {
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }

  & ol, ul {
    list-style-position: inside;

    & ol li, ul li {
      text-indent: 2rem;
    }

    & li {
    text-indent: 1rem;}
  }

  & p {
    text-align: justify;
    line-height: 1.8;
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



// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
};

const TableOfContents = styled.div`
  width: 275px;
  min-width: 250px;
  max-height: calc(100vh - 4rem);
  padding: 1rem;
  align-self: flex-start;
  position: fixed;
  top: 5rem;
  overflow: auto;
  top: 20%;

  & ul li {
    margin-bottom: 0.5rem;
    list-style: none;
  }
`;


const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title}`,
    description: frontMatter.description,
    image: `${frontMatter.image}`,
    date: `${frontMatter.date}`,
    type: 'article',
  };

  const [headings, setHeadings] = useState<any[]>([]);

  useEffect(() => {
    const headings = document.querySelectorAll(' h1, h2, h3, h4, h5, h6');
    const headingList = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      level: heading.tagName
    }));
    setHeadings(headingList);
  }, []);

  return (
    <Page customMeta={customMeta}>
      <TableOfContents>
        <ul>
          {headings.map((heading) =>
              (
            <li key={heading.id}>
              <Link legacyBehavior href={`#${heading.id}`} >
                <a>
                  {heading.text}
                  </a>
              </Link>
            </li>
          ))}
        </ul>
      </TableOfContents>
      <CustomArticle>
        <h1>
          {frontMatter.title}
        </h1>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
          {format(parseISO(frontMatter.date? frontMatter.date : ''), 'MMMM dd, yyyy')}
        </p>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </CustomArticle>
    </Page>
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
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
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
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;