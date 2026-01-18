import Link from "next/link";
import { ServiceCard } from "./ServiceCard";

const ProfessionalPage = () => {
  return (
    <section>
      <p className="prose center" style={{ margin: "0 auto" }}>
        View the portfolio for each section below.
      </p>
      <ServiceCard />
    </section>
  );
};

export default ProfessionalPage;