"use client";
import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import style from "./Journal.module.scss";
import button from "@styles/modules/Button.module.scss";

export const Journal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState(0); // 0 for interior-1, 1 for interior-2

  const pages = [
    {
      id: "interior-1",
      content: [
        {
          title: "2024 - Fall",
          content: (
            <div>
              <p>
                The focus of this season is introspection, a backlog that I have neglected and previous goals which were
                not completed.
                <br />
                <br /> Recently, I have been made aware of some negative traits of mine. With cursory thoughts, I see it
                affects my relationship with myself. Working on this will have a positive effect on my relationship with
                everyone else.
              </p>
            </div>
          ),
        },

        {
          title: "2024 - Summer",
          content: (
            <>
              <p>
                I'm still working on last season's goals + want to focus on repairing, low-tech and continued
                sustainability tasks this season.
              </p>
            </>
          ),
        },
      ],
    },
    {
      id: "interior-2",
      content: [
        {
          title: "2024 - Spring",
          content: (
            <>
              <p>
                This spring is a busy time. I am trying to re-orient myself to handle the rest of the year. The quarter
                started strong, then was blown off track by the stings of poverty and burnout. For a few months, I have
                also had my head in the clouds. I have been better about returning to my goals at the end of this season
                becoming more focused on refining my personal productivity systems to prevent stalling again rather than
                powering through to complete my goals while neglecting my real responsibilities. I had the wins of
                diving into reading again, loving, strengthening community ties and a stronger sense of self.
              </p>
            </>
          ),
        },
        {
          title: "2023 - Winter",
          content: (
            <div>
              <p>A paradigm shift.</p>
              <p>
                This is when I started this page. At the time, I was exploring individualism vs caring for myself as a
                member of a community. This might re-appear as a goal-point after I read Frantz Fanon's Wretched of the
                Earth. This is also when I had some awakenings about everyday life and lost most of my heroes.
              </p>{" "}
              <p>
                {" "}
                It ended with my giving up religion. I have oscillated between being a Christian revert & apostate for
                many years. The bombing of Bethlehem on Christmas Day with little out-cry from Western Church leaders
                was the final straw for me. It does not make sense for me to practice a religion that is so far removed
                from its roots / holy sites. This was not the first time I noticed that what is generally practiced is
                an abstract version of Christianity, but it was the occasion that disgusted me the most. The other
                Abrahamic religions do not appeal to me.
              </p>
            </div>
          ),
        },
      ],
    },
  ];

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleNext = () => setActivePage(1);
  const handlePrev = () => setActivePage(0);

  const shouldShowPrev = activePage > 0;
  const shouldShowNext = activePage < pages.length - 1;

  return (
    <>
      <div
        className={`${style.journal} ${style["journal-cover"]} ${isOpen ? style["is-open"] : ""}`}
        id="open-journal"
        onClick={handleOpen}
      >
        <h2 className={style["journal-title"]}>Archive</h2>
      </div>

      {isOpen && (
        <div className={`${style["is-open"]} ${isOpen ? style["is-open"] : ""}`}>
          <div className={`${style["modal-frame"]}`} id="modal">
            <span className={`${style["icon-close"]}`} id="close" onClick={handleClose}>
              <FaTimes />
            </span>
            <div className={style.wrap}>
              <div id="carousel">
                {shouldShowPrev && (
                  <span
                    className={`${style["nav-arrow"]} ${style["prev"]} ${shouldShowPrev ? style["show"] : ""}`}
                    onClick={handlePrev}
                  >
                    <FaChevronLeft size={24} className={button.icon} />
                  </span>
                )}

                {shouldShowNext && (
                  <span
                    className={`${style["nav-arrow"]} ${style["nav-arrow-right"]} ${shouldShowNext ? style["show"] : ""}`}
                    onClick={handleNext}
                  >
                    <FaChevronRight />
                  </span>
                )}

                <div className={`${style["journal-pages"]}`}>
                  {pages.map((pageSet, index) => (
                    <div
                      key={pageSet.id}
                      className={`${style["journal-pages-interior"]} ${pageSet.id} ${activePage === index ? style["active"] : ""}`}
                    >
                      {pageSet.content.map((page, pageIndex) => (
                        <div key={pageIndex} className={`${style["journal-page"]} ${style["page"]}`}>
                          <h1>{page.title}</h1>
                          {page.content}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
