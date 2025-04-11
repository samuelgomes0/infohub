import SearchBar from "@/components/SearchBar";
import { CompassIcon } from "lucide-react";
import Home from "./_components";

function HomePage() {
  const isAuthenticated = false;

  return (
    <main className="mx-auto flex max-w-sm flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="absolute top-5 right-5">
        {isAuthenticated ? (
          <Home.UserAvatar />
        ) : (
          <Home.Button
            content="Login"
            url="/login"
            className="hover:bg-primary/90 bg-primary h-10"
          />
        )}
      </div>
      <section className="flex flex-col gap-2">
        <Home.Title content="InfoHub" />
        <Home.Description content="Explore curious facts from around the world" />
      </section>
      <SearchBar placeholder="Search for knowledge..." />
      <span className="text-gray-500">or</span>
      <Home.Button
        icon={CompassIcon}
        content="Discover something new!"
        url="/discovery"
      />
    </main>
  );
}

export default HomePage;
