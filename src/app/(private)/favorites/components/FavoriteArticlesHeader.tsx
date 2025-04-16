"use client";

import SearchBar from "@/components/SearchBar";
import { useDiscoveryContext } from "../../discovery/context";
import FavoritedArticlesTitle from "./FavoriteArticlesTitle";

function FavoriteArticlesHeader() {
  const { setSearchQuery } = useDiscoveryContext();

  return (
    <header>
      <div className="mb-4 flex items-center justify-between gap-8 max-md:flex-col">
        <FavoritedArticlesTitle content="Favorite Articles" />
        <SearchBar
          placeholder="Search for your favorites..."
          onChange={setSearchQuery}
        />
      </div>
    </header>
  );
}

export default FavoriteArticlesHeader;
