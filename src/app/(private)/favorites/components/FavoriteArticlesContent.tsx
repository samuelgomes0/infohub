"use client";

import { useEffect, useState } from "react";
import { useDiscoveryContext } from "../../discovery/context";
import { getArticlesMetadata } from "../utils/getArticlesMetadata";
import FavoritedArticleCard from "./FavoriteArticlesCard";
import FavoritedArticlesCardNoFavoritsYetMessage from "./FavoriteArticlesNoFavoritsYetMessage";

interface FavoritedArticle {
  id: string;
  title: string;
  content: string;
}

function FavoriteArticlesContent() {
  const { searchQuery } = useDiscoveryContext();
  const [favoritedArticles, setFavoritedArticles] = useState<
    FavoritedArticle[]
  >([]);

  useEffect(() => {
    const LOCAL_STORAGE_KEY = "wisehub.likedPosts";
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedIds: string[] = stored ? JSON.parse(stored) : [];

    async function fetchFavoritedArticles() {
      const articles = await getArticlesMetadata(parsedIds);
      setFavoritedArticles(articles);
    }

    if (parsedIds.length > 0) {
      fetchFavoritedArticles();
    }
  }, []);

  const filteredCards = favoritedArticles.filter(
    ({ title, content }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="grid grid-cols-2 gap-6 py-8 max-sm:grid-cols-1">
      {favoritedArticles.length === 0 ? (
        <FavoritedArticlesCardNoFavoritsYetMessage
          title="No favorites yet!"
          description="You haven't favorited any articles yet."
        />
      ) : filteredCards.length > 0 ? (
        filteredCards.map(({ id }) => (
          <FavoritedArticleCard key={id} articleId={id} />
        ))
      ) : (
        <FavoritedArticlesCardNoFavoritsYetMessage
          title="No results found"
          description="Try a different search term."
        />
      )}
    </section>
  );
}

export default FavoriteArticlesContent;
