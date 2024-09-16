
import WebProjects from "@app/professional/web-development/WebProjects";
import Link from "next/link";
// import { WebDevelopementQuote } from "./WebDevelopementQuote";

export const WebDevelopementPage = () => {
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
                <WebDevelopementQuote />
            </section> */}
        </>
    );
};

export default WebDevelopementPage;
