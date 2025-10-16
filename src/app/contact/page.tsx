import { SocialMediaList } from "@components/navigation";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <section style={{ minHeight: "100vh", textAlign: "center", gap: "3rem" }}>
        <div>
          <p>The best way to get me is to e-mail me at</p>
          <h1 style={{ lineHeight: "1.2" }}>
            <Link href="mailto:yunghigue@gmail.com">
              yunghigue
              <wbr />
              @gmail.com
            </Link>
          </h1>
        </div>
        <div>
          <SocialMediaList />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
