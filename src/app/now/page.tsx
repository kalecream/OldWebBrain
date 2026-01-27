/* eslint-disable react/react-in-jsx-scope */
"use client";
import Link from "next/link";
import { Journal } from "./Journal";
import style from "./now.module.scss";

const NowPage = () => {
  return (
    <div className={style.container}>
      <div className={style.current}>
        <p>
          The idea of a now page came from <Link href={"https://sive.rs/now3"}>Derek Sivers</Link>.
        </p>
        <h2 className={style.heading}>Current</h2>
        <p>I'm studying Spanish, <Link href="https://lichess.org/@/anirbxs">Chess</Link> & for the CompTIA+ cert. I'm trying to get more professional certification and public projects out this quadrimester. I'm also working on my fitness. I'm starting out <Link href="/fitness">in Calisthenics and my running pace.</Link> </p>
        <p>The main focus is on increasing my income and creating standard operating practices (SOPs) in my personal and professional life so I can be more present with my family and friends later on in the year.</p>
      </div>
      <Journal />
      {/* <section className={style.archive}>
          {nowData.map((year, index) => (
            <details key={index} className={style.collapse}>
              <summary className={style.year}>
                <h2>{year.year}</h2>
                <p>
                  <i>{year.summary}</i>
                </p>
              </summary>
              <div className={`prose `}>
                {year.seasons.map((season, index) => (
                  <details open key={index} className={style.collapse}>
                    <summary className={style.year}>
                      <h3>
                        {year.year}-{season.season}
                      </h3>
                    </summary>
                    <p className="blur">{season.summary}</p>
                    {season.goals && (
                      <>
                        <hr />
                        <ul className={`${style.goal}}`}>
                          {season.goals.map((goal, index) => (
                            <li key={index} data-id={goal.status}>
                              {goal.goal}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </details>
                ))}
              </div>
            </details>
          ))}
        </section> */}
    </div>
  );
};

export default NowPage;
