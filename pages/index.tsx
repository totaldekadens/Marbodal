import Article from "@/components/Article";
import Article2 from "@/components/Article2";
import Article3 from "@/components/Article3";
import Chosen from "@/components/Chosen";
import Hero from "@/components/Hero";
import Usp from "@/components/Usp";
import { getAccessibleColor, getRGBColor } from "@/utils/colorTheme";
import Head from "next/head";

// Could be an example from backend
const colors = {
  shade0: "#FBF9F6",
  shade1: "#F2E9DB",
  shade2: "#E4D4C4",
  shade3: "#31261D",
  decor1: "#9CA9BD",
  decor2: "#1E44CB",
};

export default function Home() {
  // Colors - Makes it possible to affect the color theme from future backend
  const shade0 = getRGBColor(colors.shade0, "50"); // Lightest
  const shade1 = getRGBColor(colors.shade1, "100");
  const shade2 = getRGBColor(colors.shade2, "200");
  const shade3 = getRGBColor(colors.shade3, "300"); // Darkest

  const decorColor1 = getRGBColor(colors.decor1, "decor1"); // Lines
  const decorColor2 = getRGBColor(colors.decor2, "decor2"); // Icons

  return (
    <>
      <Head>
        <style>
          :root
          {`{${shade0} ${shade1} ${shade2} ${shade3} ${decorColor1} ${decorColor2} }`}
        </style>
      </Head>
      <main className={`flex min-h-screen w-full flex-col items-center`}>
        <Hero />
        <Usp />
        <Article />
        <Chosen />
        <Article2 />
        <Article3 />
      </main>
    </>
  );
}
