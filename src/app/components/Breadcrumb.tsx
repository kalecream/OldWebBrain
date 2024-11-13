"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SiteImage from "@assets/images/ouroburos.svg";
import style from "@styles/modules/nav.module.scss";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumb: React.FC = () => {
  const path = usePathname();

  const pathSegments = path.split("/").filter((segment) => segment);

  const breadcrumbItems: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, " ");

    return { label: label.charAt(0).toUpperCase() + label.slice(1), href };
  });

  return (
    <div aria-label="breadcrumb" style={{ display: "flex" }}>
      {path && path !== "/" && (
        <>
          <Link href="/" className={style["site-name"]}>
            <Image src={SiteImage} alt="logo" width={100} height={100} />
          </Link>
        </>
      )}
      <ol className={styles.breadcrumbList}>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem} style={{ paddingLeft: 0 }}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
