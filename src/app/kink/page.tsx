import Link from "next/link";

const KinkPage = () => {
  return (
    <section>
      <h1>Kink</h1>
      <p className="prose">
        This will hold my notes on kink, BDSM, and other related topics as I explore solo BDSM and playdates.
      </p>
      <ol>
        <li>
          <Link href="kink/vetting">Vetting Playmates</Link>
        </li>
        <li>
          <Link href="kink/shibari">Shibari</Link>
        </li>
      </ol>
    </section>
  );
};

export default KinkPage;
