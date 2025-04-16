import { Card } from "@/components/ui/card";
import { alovaInstance } from "@/services";
import { useRequest } from "alova/client";
import { useMemo } from "react";
import Discovery from ".";
import { useDiscoveryContext } from "../context";
import { DiscoveryCardProps } from "../interfaces";

interface WikipediaPage {
  pageid: number;
  title: string;
  extract: string;
}

interface WikipediaResponse {
  query: {
    pages: {
      [key: string]: WikipediaPage;
    };
  };
}

function CardSkeleton() {
  return <Card className="bg-card h-56 animate-pulse" />;
}

function DiscoveryContent() {
  const { searchQuery } = useDiscoveryContext();

  const { data, loading, error } = useRequest(
    alovaInstance.Get<WikipediaResponse>("", {
      params: {
        action: "query",
        format: "json",
        origin: "*",
        generator: "search",
        gsrsearch: "curiosities",
        gsrlimit: 16,
        prop: "extracts",
        exintro: true,
        explaintext: true,
      },
    }),
    {
      immediate: true,
    },
  );

  const rawCards: DiscoveryCardProps[] = useMemo(() => {
    return data?.query?.pages
      ? Object.values(data.query.pages).map((page) => ({
          id: page.pageid,
          title: page.title,
          content: page.extract,
          buttonLink: `/discovery/${page.pageid}`,
        }))
      : [];
  }, [data]);

  const filteredCards = useMemo(() => {
    return rawCards.filter(
      ({ title, content }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [rawCards, searchQuery]);

  return (
    <section className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2">
      {loading ? (
        Array.from({ length: 16 }, (_, index) => <CardSkeleton key={index} />)
      ) : error ? (
        <Discovery.NoResultsMessage
          title="Failed to load data"
          description="Please check your connection and try again."
        />
      ) : filteredCards.length > 0 ? (
        filteredCards.map(({ id, title, content, buttonLink }) => (
          <Discovery.Card
            key={id}
            id={id}
            title={title}
            content={content}
            buttonLink={buttonLink}
          />
        ))
      ) : (
        <Discovery.NoResultsMessage
          title="No results found"
          description="Try a different search term."
        />
      )}
    </section>
  );
}

export default DiscoveryContent;
