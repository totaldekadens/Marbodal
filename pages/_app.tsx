import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant, Inter } from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

// Fonts
const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${cormorant.variable} font-sans bg-custom-100`}
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
