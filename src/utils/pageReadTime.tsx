"use client";
import { useEffect, useState } from 'react';

type Props = {
  readingSpeedWPM?: number;
};

const ReadingTime: React.FC<Props> = ({ readingSpeedWPM = 200 }) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const text = document.body.innerText || '';
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;

    const time = Math.ceil(wordCount / readingSpeedWPM);
    setReadingTime(time);
  }, [readingSpeedWPM]);

  return (
    <div>
      <p className='prose'>Estimated reading time: {readingTime} minute{readingTime > 1 && 's'}</p>
    </div>
  );
};

export default ReadingTime;
