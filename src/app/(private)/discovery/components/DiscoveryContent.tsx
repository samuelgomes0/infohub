import { Card } from "@/components/ui/card";
import { alovaInstance } from "@/services";
import { useRequest } from "alova/client";
import Discovery from ".";
import { useDiscoveryContext } from "../context";
import { DiscoveryCardProps } from "../interfaces";

function DiscoveryContent() {
  const { searchQuery } = useDiscoveryContext();

  const { data, loading } = useRequest(
    alovaInstance.Get("", {
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
    [],
  );

  const rawCards: DiscoveryCardProps[] = data?.query?.pages
    ? Object.values(data.query.pages).map((page: any) => ({
        id: page.pageid,
        title: page.title,
        content: page.extract,
        buttonLink: `/discovery/${page.pageid}`,
      }))
    : [];

  const filteredCards = rawCards.filter(
    ({ title, content }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="grid grid-cols-2 gap-6 py-8 max-sm:grid-cols-1">
      {loading ? (
        <>
          {Array.from({ length: 16 }, (_, index) => (
            <Card key={index} className="bg-card h-56 animate-pulse"></Card>
          ))}
        </>
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
