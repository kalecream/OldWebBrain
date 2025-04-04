import React  from 'react';
import { PastJobs } from "./pastWork";
import styles from "./WorkExperience.module.scss";

export const WorkExperience = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      {PastJobs.map((job) => (
        <div key={job.company} className={styles.card}>
          <div className={styles.indicator} />
          <div className={styles.card__body}>
            <h3>{job.company}</h3>
            <p className={styles.card__title}>
              {job.title}{" "}
              <span>
                ({job.location}, {job.type})
              </span>
            </p>
            <small className={styles.card__dates}>
              {job.started} - {job.ended ? job.ended : "Present"}
            </small>
            <ul className={styles.card__points}>
              {job.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
