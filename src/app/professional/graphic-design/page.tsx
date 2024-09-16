import DesignProjects from "@app/professional/graphic-design/DesignProjects";
import Link from "next/link";

export const WebDevelopementPage = () => {
    return (
        <>
            <section>
                <h1>Design</h1>
            </section>
            <section>
                <DesignProjects />
                <Link href="/professional" style={{color: 'var(--secondary)', marginBottom: '2rem'}}>Back to Services</Link>
            </section>
        </>
    );
};

export default WebDevelopementPage;
