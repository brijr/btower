import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html className="p-6 md:px-24 selection:bg-blue-700 selection:text-white dark:selection:text-black dark:selection:bg-[orange]">
      <Head>
        {/* import inter and libre baskerville */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Libre+Baskerville:ital@1&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;1,300&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
