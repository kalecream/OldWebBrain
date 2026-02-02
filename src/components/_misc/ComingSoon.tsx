import Link from "next/link";

export const ComingSoon = () => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <section style={{ minHeight: "90vh", lineHeight: "1" }}>
        <h1>Coming Soon!</h1>
      </section>
      <Link href={"/"}>⟵ back</Link>
    </div>
  );
};
