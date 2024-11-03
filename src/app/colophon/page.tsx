import Link from "next/link";

const ColophonPage = () => {
  return (
    <section className="paragraph" style={{ gap: "4rem" }}>
      <div>
        <h1>Colophon</h1>
        <div className="prose">
          <p>A colophon is a publishing term that describes how a book was made. This is that, but for a website. </p>
          <p>
            This website is made using React Typescript on the Next.js 14 framework, stored on Github and deployed using
            Vercel. The fonts used are{" "}
            <Link href="https://archive.org/details/adobegaramondpro">Adobe Garamond Pro</Link> for the body text and{" "}
            <Link href="https://www.creativefabrica.com/product/cattedrale/ref/777922">Cattedrale</Link> as an accent
            font.
          </p>
        </div>
      </div>

      <div className="prose">
        <h2>Acknowledgement</h2>
        <p className="prose">
          The theme within this website is based on the Caribbean folklore of the{" "}
          <Link href={"https://www.wikiwand.com/en/Soucouyant"}>Soucouyant</Link> also known as the Ole Higue. She is
          the Caribbean's version of a Vampire, a Werewolf and is combined with some West African witch mythos.
          Throughout the site, I may mingle the theme with some folklore details from rivermummas and other femme
          mythological figures.
        </p>
      </div>

      <div className="prose">
        <h2>Credits</h2>
        <p>
          I don't think I could have made my vision come to life without standing on the shoulders of the coders who
          came before me. For individuals, I will attempt to find their donation links to post alongside their credit.
        </p>
        <ul>
          <li>
            <Link
              href={"https://www.rpnation.com/threads/fifteen-years-later-the-vampire-diaries-the-originals-rp.240860/"}
              target="_blank"
            >
              Vampire Post Divider
            </Link>{" "}
            found on a roleplaying forum discussing The Vampire Diaries/The Originals.
          </li>
          <li>
            <s>
              <Link href={"https://codepen.io/sosuke/pen/Pjoqqp"} target="_blank">
                CSS Filter Generator
              </Link>{" "}
              to change colors from Black to a specific Hex. This <i>was</i> used to change the blog title when hovering
              (on non-index pages.) because the website title used to be an SVG.
            </s>
          </li>
          <li>
            <Link href="https://www.codepel.com/animation/javascript-text-scramble-effect/">
            Text Scramble Effect
            </Link>
            
          </li>
          <li>
            Cool 3D <Link href="https://csspro.com/css-3d-buttons/">Button 13</Link> for the Index Hero. Taken from
            CSSPro.com and apparently inspired by Balder's Gate 3.
          </li>
          <li>
            <Link href="https://www.svgrepo.com/svg/133672/blood-drop">Blood Drop SVG</Link> as list markers from
            SVGRepo.com
          </li>
          <li>
            <Link href="https://www.smashingmagazine.com/2008/09/the-hr-contest-results-download-your-fresh-hr-line-now/">
              HR Line
            </Link>{" "}
            from Smashing Magazine.
          </li>
          <li>
            <Link href="https://www.cursor.cc/?action=icon&file_id=213942">Devil's Red Hand from Cursor.cc</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/watch?v=58U1zMUn8o0&t=188s">Vampire Killer Whip From Castlevania</Link>{" "}
            Blender3D Tutorial and{" "}
            <Link href="https://app.gumroad.com/d/913baa425c39ede0220692d5f019df29">downloadable 3D model link</Link>
          </li>
          <li>
            <Link href="https://giphy.com/cryptorastas">Jamaican GIFs</Link> taken from @cryptorastas on Giphy.
          </li>
          <li>
            <Link href="https://codepen.io/simeydotme/pen/PrQKgo">Pokemon Holo Hover Cards</Link> and{" "}
            <Link href="https://codepen.io/markmiro/pen/wbqMPa">3D Card Hover Effect</Link> from Codepen.
          </li>
          <li>
            <Link href="https://giphy.com/stickers/vampire-milk-juice-1xSVq3jCyrYICv5XuC">Vampire Goth Sticker</Link>
            from GIPHY for 404 page.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ColophonPage;
