import SearchBar from "@/components/SearchBar";
import { useDiscoveryContext } from "../_context";
import Discovery from ".";

function DiscoveryHeader() {
  const { setSearchQuery } = useDiscoveryContext();

  return (
    <header>
      <div className="mb-4 flex items-center justify-between">
        <Discovery.Title content="Discovery" />
        <SearchBar
          placeholder="Search for anything..."
          onChange={setSearchQuery}
        />
      </div>
      <Discovery.FilterBar />
    </header>
  );
}

export default DiscoveryHeader;
