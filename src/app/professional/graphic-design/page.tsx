import DesignProjects from "@app/professional/graphic-design/DesignProjects";
import Link from "next/link";

export const WebDevelopementPage = () => {
    return (
        <>
            <section>
                <h1><Link href="/professional">~Services</Link>/Web Development</h1>
            </section>
            <section>
                <DesignProjects />
            </section>
        </>
    );
};

export default WebDevelopementPage;
