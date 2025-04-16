import SearchBar from "@/components/SearchBar";
import Discovery from ".";
import { useDiscoveryContext } from "../context";

function DiscoveryHeader() {
  const { setSearchQuery } = useDiscoveryContext();

  return (
    <header className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:gap-8">
        <Discovery.Title content="Discovery" />
        <SearchBar
          placeholder="Search for anything..."
          onChange={setSearchQuery}
          aria-label="Search articles"
        />
      </div>
    </header>
  );
}

export default DiscoveryHeader;
