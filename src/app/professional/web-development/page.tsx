
import WebProjects from "@app/professional/web-development/WebProjects";
import Link from "next/link";
// import { WebDevelopementQuote } from "./WebDevelopementQuote";

export const WebDevelopementPage = () => {
    return (
        <>
            <section>
                <h1><Link href="/professional">~Services</Link>/Development</h1>
            </section>
            <section>
                <WebProjects />
            </section>
            {/* <section>
                <WebDevelopementQuote />
            </section> */}
        </>
    );
};

export default WebDevelopementPage;
