import { CompassIcon } from "lucide-react";
import Home from "./_components";

function HomePage() {
  return (
    <div className="flex max-w-sm flex-col gap-8 text-center">
      <Home.Title content="Welcome to the Information Hub" />
      <Home.QuoteCard quote="Knowledge is power." author="Francis Bacon" />
      <Home.Button icon={CompassIcon} content="Explore" />
    </div>
  );
}

export default HomePage;
