"use client";
import Image from "next/image";
import Link from "next/link";
import style from "@styles/modules/nav.module.scss";
import { usePathname } from "next/navigation";
import Directory from "@data/directory";
import { FaRss } from "react-icons/fa6";
import SiteImage from "@public/og_logo.png";

export function Navbar() {
  const path = usePathname();
  console.log(path);
  console.log("test");
  return (
    <header id="header" className={path && path == "/" ? `` : `glassmorphic`}>
      <nav id="nav">
        {path && path !== "/" && (
          <>
            <Link href="/" className={style["site-name"]}>
              {/* <span className={style['site-name']}></span> */}
              <Image src={SiteImage} alt="logo" width={90} height={90} style={{ marginTop: "1rem" }} />
            </Link>
          </>
        )}
        <div className={`${style["directory-list"]} ${style["directory-section"]}`}>
          {Directory.length > 0 &&
            Directory.map((directory, index) => (
              <div className={style["directory-list"]} key={index}>
                <Link
                  className={style["directory-link"]}
                  href={directory.links}
                  style={path === directory.title ? { textDecoration: "underline" } : { textDecoration: "none" }}
                >
                  {directory.title}
                </Link>
              </div>
            ))}
          <div>
            <Link
              href={"/feed.xml"}
              aria-label="social media link"
              className={style["social-media"] + ` `}
              target="_blank"
              rel="me"
            >
              <FaRss />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
