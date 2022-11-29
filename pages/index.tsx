// Next Imports
import Head from "next/head";

// Component Imports 
import Intro from "../components/Intro";

// Image Imports
import venn from "../public/venn.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bridger Tower | B98</title>
        <meta
          name="description"
          content="Bridger Tower | Front End Developer and Designer from Salt Lake City, Utah"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
      </main>
    </div>
  );
}
