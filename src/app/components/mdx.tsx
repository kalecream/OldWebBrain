import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { BundledLanguage, BundledTheme } from "shiki";
import { createElement } from "react";
import { MDXCodeBlock as CodeBlock } from "./CodeBlock";
import code from "./CodeBlock.module.scss";

function Table({ data }) {
  let headers = data.headers.map((header, index) => <th key={index}>{header}</th>);
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link className="internal-link" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} {...props} />;
}

interface Props {
  children: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  return ({ children }) => {
    let slug = slugify(children);
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
}

const InlineCode = (props: any) => {
  return <code className={code.inlineCode}>{props.children}</code>;
};

const CustomPre = (props: any) => {
  const child = props.children;

  if (child?.type === "code") {
    const { children, className, ...rest } = child.props;
    return (
      <CodeBlock className={className} meta={rest.meta || ""}>
        {children}
      </CodeBlock>
    );
  }

  return <pre {...props} />;
};

const paragraph = ({ children }) => {
  return <p className="blur">{children}</p>;
};

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: paragraph,
  Image: RoundedImage,
  a: CustomLink,
  pre: CustomPre,
  code: CodeBlock,
  Table,
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
