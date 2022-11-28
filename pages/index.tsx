import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="p-4 bg-gray-800">
      <Head>
        <title>Bridger Tower | B98</title>
        <meta
          name="description"
          content="Bridger Tower | Front End Developer and Designer from Salt Lake City, Utah"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bridger Tower</h1>

        <h2>Lorem Ipsum Dolor</h2>

        <h3>Frontend Developer and Designer</h3>

        <h4>This is a heading four</h4>

        <h5>This is a heading five</h5>

        <p>
          I am a creator and a builder. I am from Salt Lake City, Utah. I am
          passionate about design, development and marketing and I seek to
          bridge the gaps between them. I believe the combination and
          collaboration of design, dev, and marketing leads to powerful
          products, impactful websites, and further innovation.
        </p>
      </main>
      <Footer />
    </div>
  );
}
