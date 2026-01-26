import Link from "next/link";
import {  FaGithub, FaTelegram } from "react-icons/fa6";
import style from "@styles/modules/footer.module.scss";

export const MediaProfiles = [
  {
    name: "Github",
    url: "https://www.github.com/kalecream",
    icon: FaGithub,
  },
  {
    name: "Telegram",
    url: "https://t.me/yunghigue",
    icon: FaTelegram,
  }
];

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
            <Icon name={media.name} style={{ scale: "1.3", margin: "0 1rem" }} />
          </Link>
        );
      })}
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex">
        <small>Yung Higue &copy; 2018 - {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
