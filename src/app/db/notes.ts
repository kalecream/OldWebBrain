import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "src/notes");

const getNotesRecursively = (dir, basePath = "") => {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  return files.flatMap((file) => {
    const filePath = path.join(dir, file.name);
    const relativePath = path.join(basePath, file.name);

    if (file.isDirectory()) {
      return getNotesRecursively(filePath, relativePath);
    } else if (file.name.endsWith(".mdx") || file.name.endsWith(".md")) {
      const slug = relativePath.replace(/\.mdx?$/, "").replace(/\\/g, "/");
      const content = fs.readFileSync(filePath, "utf-8");
      const { data, content: body } = matter(content);
      const links = extractWikiLinks(body);
      const tags = data.tags || [];
      return { slug, data, body, path: relativePath, links, tags };
    }
    return [];
  });
};

export const getAllNotes = () => getNotesRecursively(NOTES_DIR);

export const parseWikiLinks = (content) => {
  return content.replace(/\[\[(.*?)\]\]/g, (match, title) => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    return `<a href="/notes/${slug}" class="wiki-link">${title}</a>`;
  });
};

export const extractWikiLinks = (content) => {
  const matches = [...content.matchAll(/\[\[(.*?)\]\]/g)];
  return matches.map((match) => match[1].toLowerCase().replace(/\s+/g, "-"));
};
