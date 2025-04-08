import { CompassIcon } from "lucide-react";
import Home from "./_components";

function HomePage() {
  return (
    <main className="mx-auto flex max-w-sm flex-col items-center justify-center gap-8 text-center">
      <section className="flex flex-col gap-2">
        <Home.Title content="InfoHub" />
        <Home.Description content="Explore curious facts from around the world" />
      </section>
      <Home.SearchBar placeholder="Search for knowledge..." />
      <span className="text-gray-500">or</span>
      <Home.Button icon={CompassIcon} content="Discover something new!" />
    </main>
  );
}

export default HomePage;
