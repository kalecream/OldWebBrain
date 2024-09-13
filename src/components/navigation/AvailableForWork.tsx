import { useState } from "react";
import styles from "./AvailableForWork.module.scss";
import { useRouter } from "next/router";

export const AvailableForWork = () => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles["work-button"]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push("/services")}
    >
      <span>{hovered ? "Commission Me!" : "Available For Work"}</span>
    </button>
  );
};

export default AvailableForWork;
