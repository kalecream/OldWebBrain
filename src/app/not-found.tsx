import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex" style={{ minHeight: "80vh" }}>
      <div>
        <div className="flex" style={{ width: "100%", justifyContent: "center" }}>
          <Image
            src={
              "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNwMHZrdnR6NXU4bXFmOGp5MmJwZjQ4YmwxY20yOG56ZXNhY25ucSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1xSVq3jCyrYICv5XuC/giphy.webp"
            }
            alt="404"
            width={200}
            height={200}
          />
        </div>
        <h1>This page doesn't exist</h1>
        <p className="prose" style={{ textAlign: "center" }}>
          If you expected to see something here,
          <br /> let me know at <Link href={"mailto:yunghigue@gmail.com"}>yunghigue@gmail.com</Link>.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
