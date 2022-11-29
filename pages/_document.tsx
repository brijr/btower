import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";

export default function Document() {
  return (
    <Html className="p-6 md:px-24 selection:bg-blue-700 selection:text-white dark:selection:text-black dark:selection:bg-[orange]">
      <Head>
        {/* import inter and libre baskerville */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Libre+Baskerville:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
