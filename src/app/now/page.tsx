"use client";
import Link from "next/link";
import { Journal } from "./Journal";
import style from "./now.module.scss";
import Divider from "@components/Divider/Divider";

const NowPage = () => {
  return (
    <div className={style.container}>
      <div className={style.current}>
        <p>
          The idea of a now page came from{" "}
          <Link target="_blank" href={"https://sive.rs/now3"}>
            Derek Sivers
          </Link>
          .
        </p>
        <h2 className={style.heading}>Current - 2026-01-29</h2>
        <p>
          I'm studying Spanish,{" "}
          <Link target="_blank" href="https://lichess.org/@/anirbxs">
            Chess
          </Link>{" "}
          & for the CompTIA+ cert. I'm trying to get more public projects & do a professional rebrand this
          quadrimester. I'm also working on my fitness - starting with <Link href="/fitness">in Calisthenics and my running pace.</Link>.
          The main focus is on increasing my income and creating standard operating practices (SOPs) in my personal and
          professional life so I can be more present with my family and friends later on in the year.
        </p>
        <Divider />
        <ul className={`${style.goal} ${style.goalList}`}>
          <li data-id="progress">Chess 1000 ELO on Lichess Rapid</li>
          <li data-id="progress">Completed YH Business Operating Manual</li>
        </ul>
      </div>
      <Journal />
    </div>
  );
};

export default NowPage;
