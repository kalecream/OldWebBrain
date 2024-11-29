import Hero from "@components/hero/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index | Yung Higue",
};

export default function Page() {
  return (
    <>
      <Hero />
    </>
  );
}
