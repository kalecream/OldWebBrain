import Hero from "@components/hero/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index | Sab Medwinter",
};

export default function Page() {
  return (
    <>
      <Hero />
    </>
  );
}
