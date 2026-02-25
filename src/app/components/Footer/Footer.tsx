import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import s from './Footer.module.scss';
import SiteImage from "@assets/images/ouroburos.svg";

// fun code found at https://codepen.io/z-/pen/zYxdRQy

const NAV = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/kalecream", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/medwinter", icon: <FaLinkedin /> },
];

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={s.footer} role="contentinfo">
      <div className={s.footer__rule} aria-hidden="true">
      </div>

      <div className={s.footer__inner}>
        <div className={s.footer__brand}>
          <Link href="/" className={s.footer__logo} aria-label="Yung Higue — home">
            <span className={s.footer__logoGlyph} aria-hidden="true">
              <Image src={SiteImage} alt="logo" width={40} height={40} loading="eager" />
            </span>
            <span className={s.footer__logoName}>Yung Higue</span>
          </Link>
          <a
            href="mailto:yunghigue@gmail.com"
            className={s.footer__email}
          >
            yunghigue@gmail.com
          </a>
        </div>

        <div className={s.footer__nav} aria-label="Footer navigation" role="nav">
          <p className={s.footer__colLabel}>Navigate</p>
          <ul className={s.footer__navList}>
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={s.footer__navLink}>
                  <span className={s.footer__navArrow} aria-hidden="true">→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.footer__social}>
          <p className={s.footer__colLabel}>Find me</p>
          <ul className={s.footer__socialList}>
            {SOCIAL.map(({ label, href, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className={s.footer__socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <span className={s.footer__socialIcon} aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.footer__status}>
          <p className={s.footer__colLabel}>Status</p>
          <div className={s.footer__available}>
            <span className={s.footer__availableDot} aria-hidden="true" />
            <span>Available for work</span>
          </div>
          <Link href="/contact" className={s.footer__statusCta}>
            Let's talk →
          </Link>
        </div>

      </div>

      <div className={s.footer__bottom}>
        <p className={s.footer__copy}>
          © {year} Yung Higue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;