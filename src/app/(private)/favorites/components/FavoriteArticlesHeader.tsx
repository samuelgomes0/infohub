"use client";

import SearchBar from "@/components/SearchBar";
import { useDiscoveryContext } from "../../discovery/context";
import FavoritedArticlesTitle from "./FavoriteArticlesTitle";

function FavoriteArticlesHeader() {
  const { setSearchQuery } = useDiscoveryContext();

  return (
    <header className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:gap-8">
        <FavoritedArticlesTitle content="Favorite Articles" />
        <SearchBar
          placeholder="Search for your favorites..."
          onChange={setSearchQuery}
          aria-label="Search favorite articles"
        />
      </div>
    </header>
  );
}

export default FavoriteArticlesHeader;
