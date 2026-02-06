import Link from "next/link";
import style from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex">
        <small>Yung Higue &copy; 2018 - {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
