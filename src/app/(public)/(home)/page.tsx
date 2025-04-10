import { CompassIcon } from "lucide-react";
import Home from "./_components";

function HomePage() {
  return (
    <main className="mx-auto flex max-w-sm flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="absolute top-4 right-4">
        <Home.Button
          content="Login"
          url="/login"
          className="hover:bg-primary/90 bg-primary h-10"
        />
      </div>
      <section className="flex flex-col gap-2">
        <Home.Title content="InfoHub" />
        <Home.Description content="Explore curious facts from around the world" />
      </section>
      <Home.SearchBar placeholder="Search for knowledge..." />
      <span className="text-gray-500">or</span>
      <Home.Button
        icon={CompassIcon}
        content="Discover something new!"
        url="/explore"
      />
    </main>
  );
}

export default HomePage;
