import { alovaInstance } from "@/services";
import { useRequest } from "alova/client";
import Discovery from ".";
import { useDiscoveryContext } from "../context";
import { DiscoveryCardProps } from "../interfaces";
import { filterCards } from "../utils";

const discoveryCardsData: DiscoveryCardProps[] = [
  {
    id: 1,
    title: "Getting Started",
    content: "Learn the basics of getting started with our platform.",
    buttonLink: "/discovery/getting-started",
  },
  {
    id: 2,
    title: "Intermediate Guide",
    content: "Dive deeper into more advanced topics and techniques.",
    buttonLink: "/discovery/intermediate",
  },
  {
    id: 3,
    title: "Advanced Techniques",
    content: "Master the most advanced techniques and strategies.",
    buttonLink: "/discovery/advanced",
  },
  {
    id: 4,
    title: "Best Practices",
    content: "Explore industry best practices and guidelines.",
    buttonLink: "/discovery/best-practices",
  },
  {
    id: 5,
    title: "Design Principles",
    content: "Understand the core principles of effective design.",
    buttonLink: "/discovery/principles",
  },
  {
    id: 6,
    title: "Content Creation",
    content: "Learn how to create engaging and valuable content.",
    buttonLink: "/discovery/content-creation",
  },
  {
    id: 7,
    title: "Accessibility",
    content: "Make your app inclusive with accessibility best practices.",
    buttonLink: "/discovery/accessibility",
  },
  {
    id: 8,
    title: "Performance Optimization",
    content: "Tips to improve your app's speed and responsiveness.",
    buttonLink: "/discovery/optimization",
  },
  {
    id: 9,
    title: "Security Essentials",
    content: "Protect your application with key security strategies.",
    buttonLink: "/discovery/essentials",
  },
  {
    id: 10,
    title: "Deploying to Production",
    content: "A step-by-step guide to launch your project live.",
    buttonLink: "/discovery/production",
  },
];

function DiscoveryContent() {
  const { searchQuery } = useDiscoveryContext();
  const filteredCards = filterCards(discoveryCardsData, searchQuery);

  const { data } = useRequest(
    alovaInstance.Get("", {
      params: {
        action: "query",
        list: "search",
        srsearch: "interesting facts",
        format: "json",
        origin: "*",
      },
    }),
  );

  console.log(data);

  return (
    <section className="grid grid-cols-2 gap-6 py-8">
      {filteredCards.length > 0 ? (
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
