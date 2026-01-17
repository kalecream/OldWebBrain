import { SocialMediaList } from "@components/navigation";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <section style={{ minHeight: "100vh", textAlign: "center", gap: "3rem" }}>
        <div>
          <p>The best way is to e-mail me at</p>
          <span style={{ lineHeight: "1.2", color: "var(--secondary)", fontFamily: "Roman", fontSize: "3rem" }}>
            <Link href="mailto:yunghigue@gmail.com">
              yunghigue
              <wbr />
              @gmail.com
            </Link>
          </span>
        </div>
        <div>
          <SocialMediaList />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
