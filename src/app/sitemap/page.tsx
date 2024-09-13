import { PageRoutes } from "@data/routes";
import Link from "next/link";

const SitemapPage = () => {
  let pages = PageRoutes.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
  return (
    <section role="region" tabIndex={0}>
      <h1>Human Readable Sitemap</h1>
      <p className="prose">This table shows all the pages in this website by last modified time.</p>
      <table>
        <tbody>
          <tr>
            {pages.map((r, i = 1) => (
              <td key={i}>{(i += 1)}</td>
            ))}
          </tr>
          <tr>
            {pages.map((r) => (
              <td key={r.route}>
                <Link href={r.route} target="_blank">
                  {r.route}
                </Link>
              </td>
            ))}
          </tr>
          <tr>
            {pages.map((r, i = 0) => (
              <td key={i + 1}>{r.date.toISOString()}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SitemapPage;
