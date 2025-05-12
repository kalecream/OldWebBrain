/* eslint-disable react/react-in-jsx-scope */
"use client";
import Link from "next/link";
import nowData from "./nowData";
import style from "./now.module.scss";

const NowPage = () => {
  return (
    <>
      <section>
        <h1>Now.</h1>
        <div className="prose">
          <p className="blur">
            The idea of a now page came from <Link href={"https://sive.rs/now3"}>Derek Sivers</Link>.
          </p>
        </div>
      </section>
      <section>
        {nowData.map((year, index) => (
          <details key={index} className={style.collapse}>
            <summary className={style.year}>
              <h1>{year.year}</h1>
              <p>
                <i>{year.summary}</i>
              </p>
            </summary>
            <div className={`prose `}>
              {year.seasons.map((season, index) => (
                <details open key={index} className={style.collapse}>
                  <summary className={style.year}>
                    <h2>
                      {year.year}-{season.season}
                    </h2>
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
      </section>
    </>
  );
};

export default NowPage;
