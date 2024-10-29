import { MediaProfiles } from "@components/navigation/socialmedia";
import Link from "next/link";
import style from "@styles/modules/footer.module.scss";

export const SocialMediaList = () => {
  return (
    <div className={style["social-media-list"] + ` flex space-around`}>
      {MediaProfiles.map((media) => {
        const Icon = media.icon;

        return (
          <Link
            href={media.url}
            aria-label="social media link"
            className={style["social-media"] + ` `}
            target="_blank"
            key={media.name}
            rel="me"
          >
            <Icon name={media.name} style={{scale: "1.5", margin: "0 1rem"}} />
          </Link>
        );
      })}
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex row" style={{ flexWrap: "wrap" }}>
        <Link href={"/sitemap"}>Sitemap</Link>
        <Link href={"/colophon"}>Colophon</Link>
        <Link href={"https://github.com/kalecream/OldWebBrain"}>Source</Link>
      </div>
      <div className="flex">
        <small>sabrina medwinter &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
