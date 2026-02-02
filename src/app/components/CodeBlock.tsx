"use client";
import { useState, useEffect, Suspense } from "react";
import { FaCopy, FaCheck, FaFolder } from "react-icons/fa6";
import code from "./CodeBlock.module.scss";

interface MDXCodeBlockProps {
  children: string;
  className?: string;
  meta?: string;
}

export function MDXCodeBlock({ children, className = "", meta = "" }: MDXCodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const lang = className?.replace("language-", "").split(" ")[0] || "txt";
  const filename = meta.match(/filename="([^"]+)"/)?.[1] || meta.match(/file=([^\s]+)/)?.[1] || "";
  const highlightLines =
    meta
      .match(/lines="([^"]+)"/)?.[1]
      ?.split(",")
      .map(Number) || [];

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const { codeToHtml, bundledLanguages } = await import("shiki");

        let finalLang = lang;
        if (!(finalLang in bundledLanguages)) {
          finalLang = "txt";
        }

        const highlighted = await codeToHtml(children, {
          lang: finalLang,
          theme: "dracula-soft",
          transformers: [
            {
              name: "remove-trailing-newline",
              code(node) {
                if (node.children.length > 0 && node.children[node.children.length - 1].type === "text") {
                  const lastChild = node.children[node.children.length - 1] as any;
                  if (lastChild.value && typeof lastChild.value === "string") {
                    lastChild.value = lastChild.value.replace(/\n$/, "");
                  }
                }
                return node;
              },
            },
          ],
        });

        const processedHtml = highlighted.replace(/<pre([^>]*)>([\s\S]*?)<\/pre>/, (match, attrs, content) => {
          const lines = content.split("\n");
          const numberedLines = lines
            .map((line, i) => `<div class="line"><span class="line-content">${line}</span></div>`)
            .join("");
          return `<pre${attrs}><div class="code-lines">${numberedLines}</div></pre>`;
        });

        setHtml(processedHtml);
      } catch (error) {
        console.error("Syntax highlighting error:", error);

        setHtml(`<pre><code class="language-${lang}">${children}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    };

    highlightCode();
  }, [children, lang]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (isLoading) {
    return (
      <Suspense>
        <div className={code["code-block"] + " " + code["code-block--loading"]}>
          {filename && (
            <div className={code["code-header"]}>
              <FaFolder className={code["code-file-icon"]} />
              <span className={code["code-filename"]}>{filename}</span>
            </div>
          )}
          <pre className={code["code-pre"]}>
            <code className={code["code-content"]}>{children}</code>
          </pre>
        </div>
      </Suspense>
    );
  }

  return (
    <Suspense>
      <div className={code["mdx-code-block"] + " " + code["mdx-code-block-loaded"]}>
        {(filename || lang !== "txt") && (
          <div className={code["mdx-code-header"]}>
            <div className={code["mdx-code-header-left"]}>
              {filename ? (
                <>
                  <FaFolder className={code["mdx-copy-icon"]} />
                  <span className={code["mdx-code-filename"]}>{filename}</span>
                </>
              ) : (
                <span className={code["mdx-code-language"]}>{lang}</span>
              )}
            </div>

            <button
              onClick={copyToClipboard}
              className={code["mdx-copy-button"] + (copied ? " " + code["mdx-copy-button-copied"] : "")}
              aria-label={copied ? "Copied!" : "Copy code"}
            >
              {copied ? (
                <>
                  <FaCheck className={code["mdx-copy-icon"]} />
                  <span className={code["mdx-copy-text"]}>Copied</span>
                </>
              ) : (
                <>
                  <FaCopy className={code["mdx-copy-icon"]} />
                  <span className={code["mdx-copy-text"]}>Copy</span>
                </>
              )}
            </button>
          </div>
        )}

        <div
          className={
            code["mdx-code-content"] + (filename || lang !== "txt" ? " " + code["mdx-code-content-with-header"] : "")
          }
        >
          <div className={code["mdx-highlighted-code"]} dangerouslySetInnerHTML={{ __html: html }} />

          {!(filename || lang !== "txt") && (
            <button
              onClick={copyToClipboard}
              className={
                code["mdx-floating-copy-button"] + (copied ? " " + code["mdx-floating-copy-button-copied"] : "")
              }
              aria-label={copied ? "Copied!" : "Copy code"}
            >
              {copied ? <FaCheck className={code["mdx-copy-icon"]} /> : <FaCopy className={code["mdx-copy-icon"]} />}
            </button>
          )}
        </div>
      </div>
    </Suspense>
  );
}
