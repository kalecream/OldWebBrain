
import { MediaProfiles } from "@components/navigation/socialmedia";
import Link from "next/link";
import style from './footer.module.scss';

export const SocialMediaList= () => {
  return (
    <div className={style["social-media-list"]}>
      {MediaProfiles.map((media) => {

        const Icon = media.icon;

        return (
          <Link
            href={media.url}
            aria-label="social media link"
            className={style["social-media"]}
            target="_blank"
            rel="noopener"
            key={media.name}
          >
          <Icon name={media.name} />
          </Link>
        );
      })}
    </div>
  );
};

export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <SocialMediaList />
      <div> sabrina medwinter &copy; {new Date().getFullYear()}</div>
    </footer>
  );
};
