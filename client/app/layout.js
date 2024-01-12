import GlobalNavbar from "@/components/navigation/global";
import { Providers } from "./providers.jsx";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Sports Data",
  description: "A web-based American sports app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <GlobalNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
