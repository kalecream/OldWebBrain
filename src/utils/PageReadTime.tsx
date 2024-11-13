"use client";
import { FC, useEffect, useState } from "react";

type Props = {
  readingSpeedWPM?: number;
};

export const PageReadTime: FC<Props> = ({ readingSpeedWPM = 200 }) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const text = document.body.innerText || "";
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;

    const time = Math.ceil(wordCount / readingSpeedWPM);
    setReadingTime(time);
  }, [readingSpeedWPM]);

  return <span className="text-center">{readingTime} min read</span>;
};
