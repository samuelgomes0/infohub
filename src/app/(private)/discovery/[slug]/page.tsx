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

  const { title, extract, pageid } = pageData || {};
  const { isLiked, toggle } = useLike(pageid);
  const sections = extract ? parseWikipediaExtract(extract) : [];

  const handleLikeClick = () => {
    if (!isAuthenticated) return;
    toggle();
  };

  return (
    <main className="bg-card mx-auto my-8 w-full rounded border p-12 py-12 md:w-3/4 lg:w-1/2">
      <DiscoveryDetail.BackButton />

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-primary text-4xl font-bold">{title}</h1>
        {!loading && pageid && (
          <Discovery.FavoriteButton
            isAuthenticated={isAuthenticated}
            isLiked={isLiked}
            onLikeToggle={handleLikeClick}
          />
        )}
      </div>

      {loading && <DiscoveryDetail.Skeleton />}

      {!loading && sections.length === 0 && (
        <p className="text-muted-foreground leading-relaxed"></p>
      )}

      {sections.map((section, idx) => (
        <section key={idx}>
          {section.title && (
            <DiscoveryDetail.ArticleTitle text={section.title} />
          )}
          {section.paragraphs.map((p, i) => (
            <DiscoveryDetail.ArticleContent key={i} text={p} />
          ))}
        </section>
      ))}

      {error && (
        <p className="text-destructive mt-4 text-sm">
          Ocorreu um erro ao buscar a página da Wikipédia: {error.message}
        </p>
      )}
    </main>
  );
}

export default DiscoveryDetailPage;
