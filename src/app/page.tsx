import Hero from "../../components/Hero/page";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center gap-8 px-4 py-8 sm:px-8 sm:py-12 lg:px-20 lg:py-16 bg-gray-800 text-white">
      <Hero />
    </div>
  );
}
