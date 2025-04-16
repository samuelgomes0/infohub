"use client";

import { useEffect, useMemo, useState } from "react";
import { useDiscoveryContext } from "../../discovery/context";
import { getArticlesMetadata } from "../utils/getArticlesMetadata";
import FavoritedArticleCard from "./FavoriteArticlesCard";
import FavoritedArticlesCardNoFavoritesYetMessage from "./FavoriteArticlesNoFavoritsYetMessage";

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

    if (parsedIds.length === 0) return;

    const fetchFavoritedArticles = async () => {
      try {
        const articles = await getArticlesMetadata(parsedIds);
        setFavoritedArticles(articles);
      } catch (error) {
        console.error("Failed to load favorited articles:", error);
      }
    };

    fetchFavoritedArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return favoritedArticles;

    return favoritedArticles.filter(
      ({ title, content }) =>
        title.toLowerCase().includes(query) ||
        content.toLowerCase().includes(query),
    );
  }, [favoritedArticles, searchQuery]);

  const hasFavorites = favoritedArticles.length > 0;
  const hasFilteredResults = filteredArticles.length > 0;

  return (
    <section className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2">
      {!hasFavorites ? (
        <FavoritedArticlesCardNoFavoritesYetMessage
          title="No favorites yet!"
          description="You haven't favorited any articles yet."
        />
      ) : hasFilteredResults ? (
        filteredArticles.map(({ id }) => (
          <FavoritedArticleCard key={id} articleId={parseInt(id)} />
        ))
      ) : (
        <FavoritedArticlesCardNoFavoritesYetMessage
          title="No results found"
          description="Try a different search term."
        />
      )}
    </section>
  );
}

export default FavoriteArticlesContent;
