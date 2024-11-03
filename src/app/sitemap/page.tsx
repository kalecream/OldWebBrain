import { PageRoutes } from "@data/routes";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

const SitemapPage = () => {
  let pages = PageRoutes.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
  return (
    <section role="region" tabIndex={0}>
      <h1>Readable Sitemap</h1>
      <p>
        {pages.map((r) => (
          <div key={r.route}>
            <Link href={r.route} target="_blank">
              {r.route}
            </Link>{" "}
            → {formatDistanceToNow(new Date(r.date))} ago <br />
          </div>
        ))}
      </p>
    </section>
  );
};

export default SitemapPage;
