import SearchBar from "@/components/SearchBar";
import Explore from ".";

function ExploreHeader() {
  return (
    <header>
      <div className="mb-4 flex items-center justify-between">
        <Explore.Title content="Explore" />
        <SearchBar placeholder="Search for anything..." />
      </div>
      <Explore.FilterBar />
    </header>
  );
}

export default ExploreHeader;
