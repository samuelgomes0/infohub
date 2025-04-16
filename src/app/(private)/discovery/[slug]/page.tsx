"use client";

import { useAuth } from "@/contexts/AuthProvider";
import { useLike } from "@/hooks";
import { useParams } from "next/navigation";
import Discovery from "../components";
import DiscoveryDetail from "./components";
import { useWikipediaPage } from "./hooks/useWikiPage";
import { parseWikipediaExtract } from "./utils/parseWikiExtract";

function DiscoveryDetailPage() {
  const { slug } = useParams();
  const { pageData, loading, error } = useWikipediaPage(slug);
  const { isAuthenticated } = useAuth();

  const { title = "", extract = "", pageid } = pageData || {};
  const { isLiked, toggle } = useLike(pageid);
  const sections = extract ? parseWikipediaExtract(extract) : [];

  const handleLikeClick = () => {
    if (isAuthenticated) {
      toggle();
    }
  };

  return (
    <main className="bg-card mx-auto my-8 w-full rounded border p-12 md:w-3/4 lg:w-1/2">
      <DiscoveryDetail.BackButton />

      <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-primary text-4xl font-bold" aria-live="polite">
          {loading ? "Loading..." : title}
        </h1>
        {!loading && pageid && (
          <Discovery.FavoriteButton
            isAuthenticated={isAuthenticated}
            isLiked={isLiked}
            onLikeToggle={handleLikeClick}
          />
        )}
      </header>

      {loading && <DiscoveryDetail.Skeleton />}

      {!loading && sections.length === 0 && (
        <p className="text-muted-foreground leading-relaxed">
          This article has no readable content available.
        </p>
      )}

      {sections.map((section, idx) => (
        <section key={idx} className="mb-8">
          {section.title && (
            <DiscoveryDetail.ArticleTitle text={section.title} />
          )}
          {section.paragraphs.map((p, i) => (
            <DiscoveryDetail.ArticleContent key={i} text={p} />
          ))}
        </section>
      ))}

      {error && (
        <div
          role="alert"
          className="text-destructive bg-destructive/10 mt-4 rounded p-3 text-sm"
        >
          An error occurred while fetching the Wikipedia page:{" "}
          <span className="font-medium">{error.message}</span>
        </div>
      )}
    </main>
  );
}

export default DiscoveryDetailPage;
