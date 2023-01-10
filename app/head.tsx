import Script from "next/script";

export default function Head() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5K5X5N8BWJ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-5K5X5N8BWJ', {
                  page_path: window.location.pathname,
                  });
                  `,
        }}
      />
      <title>Bridger Tower / Designer and Developer</title>
      <link rel="icon" type="image/png" href="/static/favicon.png"></link>
    </>
  );
}
