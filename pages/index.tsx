import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 bg-gray-800">
      <Head>
        <title>Bridger Tower | B98</title>
        <meta name="description" content="Bridger Tower | Front End Developer and Designer from Salt Lake City, Utah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          I am a creator and a builder. I am from Salt Lake City, Utah. I am
          passionate about design, development and marketing and I seek to
          bridge the gaps between them. I believe the combination and
          collaboration of design, dev, and marketing leads to powerful
          products, impactful websites, and further innovation.
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
