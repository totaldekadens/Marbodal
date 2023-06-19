import Article from "@/components/Article";
import Article2 from "@/components/Article2";
import Article3 from "@/components/Article3";
import Chosen from "@/components/Chosen";
import Hero from "@/components/Hero";
import Container from "@/components/Layout/Container";
import Usp from "@/components/Usp";

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full flex-col items-center`}>
      <Hero />
      <Usp />
      <Article />
      <Chosen />
      <Article2 />
      <Article3 />
    </main>
  );
}
