"use client";
import Link from "next/link";
import style from "@styles/modules/nav.module.scss";
import Directory from "@data/directory";
import Breadcrumb from "./Breadcrumb";
import ThemeSwitch from "@components/navigation/theme-toggle";
import { FaRss } from "react-icons/fa6";

export function Navbar() {
  return (
    <header id="header">
      <nav id="nav">
        <Breadcrumb />
        <div className="nav_section">
          {Directory.length > 0 &&
            Directory.map((directory, index) => (
              <div key={index}>
                <Link className={style["directory-link"]} href={directory.links}>
                  {directory.title}
                </Link>
              </div>
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
