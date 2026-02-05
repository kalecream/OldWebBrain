import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createElement } from "react";
import { CodeBlock } from "@components/BlogComponents/CodeBlock";

function CustomLink(props) {
  const href = props.href;

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
    const slug = slugify(children);
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

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  p: paragraph,
  a: CustomLink,
  pre: CustomPre,
  code: CodeBlock,
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
