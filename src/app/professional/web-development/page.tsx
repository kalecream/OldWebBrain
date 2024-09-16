import WebProjects from "@app/professional/web-development/WebProjects";
import Link from "next/link";
// import { WebDevelopementQuote } from "./WebDevelopementQuote";

export const WebDevelopementPage = () => {
<<<<<<< HEAD
  return (
    <>
      <section>
        <h1>Development</h1>
      </section>
      <section>
        <WebProjects />
      </section>
      {/* <section>
=======
    return (
        <>
            <section>
                <h1>Development</h1>
            </section>
            <section>
                <WebProjects />
                <Link href="/professional" style={{color: 'var(--secondary)', marginBottom: '2rem'}}>Back to Services</Link>
            </section>
            {/* <section>
>>>>>>> master
                <WebDevelopementQuote />
            </section> */}
    </>
  );
};

export default WebDevelopementPage;
