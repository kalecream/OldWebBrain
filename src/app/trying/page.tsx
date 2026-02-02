import Image from "next/image";

export const GalleryOfTryingPage = () => {
  return (
    <section>
      <h1>Gallery Of Trying</h1>
      <p className="prose blur">
        I'm trying a different approach to my yearly goals by breaking them into monthly goals, jumbling them all
        together and playing bingo. I hope there are many BINGOs in my future.
      </p>
      <div className="flex row">
        <div>
          <Image src="https://i.imgur.com/EtAgNve.png" alt="" width={500} height={500} />
          <figcaption>January 2025</figcaption>
        </div>
      </div>
    </section>
  );
};

export default GalleryOfTryingPage;
