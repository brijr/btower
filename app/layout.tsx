// CSS and Animation imports
import "../styles/globals.css";
import "../styles/animations.css";

// Component Imports
import Footer from "../components/Footer";
import Cover from "../components/Cover";

// Font Import
import { Inter } from "@next/font/google";

// Font Setup
const inter = Inter({ subsets: ["latin"] });

// Export of Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cover />
        <div className="p-6 md:px-24 selection:bg-blue-700 selection:text-white dark:selection:text-black dark:selection:bg-[orange]">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
