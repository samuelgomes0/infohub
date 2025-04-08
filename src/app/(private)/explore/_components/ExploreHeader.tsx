import Explore from ".";

function ExploreHeader() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <Explore.Title content="Explore" />
        <Explore.SearchBar placeholderContent="Search for anything..." />
      </div>
      <Explore.FilterBar />
    </header>
  );
}

export default ExploreHeader;
