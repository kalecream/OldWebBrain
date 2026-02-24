"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Directory from "@data/directory";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ThemeSwitch from "@components/Navigation/ThemeSwitch";
import { FaRss } from "react-icons/fa";
import Bar from "@components/Navigation/NavBar.module.scss";

export function Old_Navbar() {
  return (
    <header id="header">
      <nav id="nav">
        <Breadcrumb />
        <div id="nav-section">
          {Directory.length > 0 &&
            Directory.map((directory, index) => (
              <Link key={index} className="directory-link" href={directory.links}>
                {directory.title}
              </Link>
            ))}
          <Link
            href="/feed.xml"
            title="RSS Feed"
            style={{
              display: "flex",
              placeItems: "center",
              marginTop: "-0.25rem",
            }}
          >
            <FaRss />
          </Link>
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}

const NAV_LINKS = [
  { href: "/now", label: "Now" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${Bar["site-header"]}${scrolled ? " " + Bar["site-header--scrolled"] : ""}`}
        ref={menuRef}
      >
        <Breadcrumb />

        <nav aria-label="Navigation">
          <ul className={Bar.header__nav}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={` ${Bar["header__nav-link"]}${label === "Summon" ? " " + Bar["header__nav-link--cta"] : ""}`}
                  {...(external ? { rel: "me" } : {})}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={` ${Bar["header__burger"]}${menuOpen ? " " + Bar["header__burger--open"] : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={Bar["header__burger-bar"]} />
          <span className={Bar["header__burger-bar"]} />
          <span className={Bar["header__burger-bar"]} />
        </button>
      </header>

      <div
        className={`${Bar["header__mobile-menu"]}${menuOpen ? " " + Bar["header__mobile-menu--open"] : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={Bar.header__mobile_nav}>
            {NAV_LINKS.map(({ href, label }, i) => (
              <>
                {i > 0 && i < NAV_LINKS.length && (
                  <li key={`div-${i}`} aria-hidden="true">
                    <div className={Bar.header__mobile_divider} />
                  </li>
                )}
                <li key={label}>
                  <Link
                    href={href}
                    className={`${Bar["header__mobile-link"]}${label === "Summon" ? " " + Bar["header__mobile-link--cta"] : ""}`}
                    {...(external ? { rel: "me" } : {})}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              </>
            ))}
          </ul>
          <Link
            href="/feed.xml"
            title="RSS Feed"
            style={{
              display: "flex",
              placeItems: "center",
              marginTop: "-0.25rem",
              padding: "0 0.5rem",
            }}
          >
            <FaRss />
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </>
  );
}

export default Navbar;