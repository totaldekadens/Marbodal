import Article from "@/components/Article";
import Chosen from "@/components/Chosen";
import Hero from "@/components/Hero";
import Usp from "@/components/Usp";

export default function Home() {
  return (
    <main className={`flex min-h-screen w-full flex-col items-center`}>
      <Hero />
      <Usp />
      <Article />
      <Chosen />
    </main>
  );
}
