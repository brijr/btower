// CSS import
import "../styles/globals.css";
import { motion, useScroll } from "framer-motion";

// Next JS Imports
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// Component Imports
import Footer from "../components/Footer";
import Script from "next/script";

// Font Import
import { Inter } from "@next/font/google";

// Font Setup
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();

  return (
    <main className={inter.className}>
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
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="p-6 md:px-24 selection:bg-blue-700 selection:text-white dark:selection:text-black dark:selection:bg-[orange]">
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </div>
    </main>
  );
}
