import { useEffect, useState, useRef } from "react";

export function useHeadsObserver() {
  const observer = useRef<any>();
  const [activeId, setActiveId] = useState<any>("");

  useEffect(() => {
    const handleObsever = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-20% 0% -35% 0px",
    });

    const elements = document.querySelectorAll("h2, h3");
    elements.forEach((elem) => observer.current.observe(elem));

    return () => observer.current?.disconnect();
  }, []);

  return { activeId };
}
