import HeroName from "@components/hero/heroName/heroName";
import Link from "next/link";

export const ComingSoon = () => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <section style={{ minHeight: "50vh", lineHeight: "1" }}>
        <HeroName name={"Coming Soon"} />
      </section>
      <Link href={"/"}>⟵ back</Link>
    </div>
  );
};
