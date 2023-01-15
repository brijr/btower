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

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Bridger Tower is a designer and developer living in Salt Lake City, Utah. He Specializes in front-end web development, software & app design, and product marketing & branding."
      />

      <meta property="og:url" content="https://btower.dev" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Bridger Tower / Designer and Developer"
      />
      <meta
        property="og:description"
        content="Bridger Tower is a designer and developer living in Salt Lake City, Utah. He Specializes in front-end web development, software & app design, and product marketing & branding."
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1623775027611-4d02c1b1e0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="btower.dev" />
      <meta property="twitter:url" content="https://btower.dev" />
      <meta
        name="twitter:title"
        content="Bridger Tower / Designer and Developer"
      />
      <meta
        name="twitter:description"
        content="Bridger Tower is a designer and developer living in Salt Lake City, Utah. He Specializes in front-end web development, software & app design, and product marketing & branding."
      />
      <meta
        name="twitter:image"
        content="https://images.unsplash.com/photo-1623775027611-4d02c1b1e0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      />
      <link rel="icon" type="image/png" href="/static/favicon.png" />
    </>
  );
}
