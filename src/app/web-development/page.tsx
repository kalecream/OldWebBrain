import Image from 'next/image';
import WebProjects from "@components/projects/WebProjects";
import { WebDevelopementQuote } from "./WebDevelopementQuote";
import WebDevImage from '@public/img/Services/Automation.svg';

export const WebDevelopementPage = () => {
    return (
        <>
            <section>
                <h1>Web Development</h1>
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
