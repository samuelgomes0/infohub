import Discovery from ".";
import { useDiscoveryContext } from "../_context";
import { DiscoveryCardProps } from "../_interfaces";
import { filterCards } from "../_utils";

const discoveryCardsData: DiscoveryCardProps[] = [
  {
    id: 1,
    title: "Getting Started",
    content: "Learn the basics of getting started with our platform.",
    buttonLink: "/guides/getting-started",
  },
  {
    id: 2,
    title: "Intermediate Guide",
    content: "Dive deeper into more advanced topics and techniques.",
    buttonLink: "/guides/intermediate",
  },
  {
    id: 3,
    title: "Advanced Techniques",
    content: "Master the most advanced techniques and strategies.",
    buttonLink: "/guides/advanced",
  },
  {
    id: 4,
    title: "Best Practices",
    content: "Explore industry best practices and guidelines.",
    buttonLink: "/resources/best-practices",
  },
  {
    id: 5,
    title: "Design Principles",
    content: "Understand the core principles of effective design.",
    buttonLink: "/design/principles",
  },
  {
    id: 6,
    title: "Content Creation",
    content: "Learn how to create engaging and valuable content.",
    buttonLink: "/marketing/content-creation",
  },
  {
    id: 7,
    title: "Accessibility",
    content: "Make your app inclusive with accessibility best practices.",
    buttonLink: "/guides/accessibility",
  },
  {
    id: 8,
    title: "Performance Optimization",
    content: "Tips to improve your app's speed and responsiveness.",
    buttonLink: "/performance/optimization",
  },
  {
    id: 9,
    title: "Security Essentials",
    content: "Protect your application with key security strategies.",
    buttonLink: "/security/essentials",
  },
  {
    id: 10,
    title: "Deploying to Production",
    content: "A step-by-step guide to launch your project live.",
    buttonLink: "/deployment/production",
  },
];

function DiscoveryContent() {
  const { searchQuery } = useDiscoveryContext();
  const filteredCards = filterCards(discoveryCardsData, searchQuery);

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
        <div className="col-span-2 py-8 text-center">
          <h2 className="text-xl font-semibold">No results found</h2>
          <p className="text-gray-500">Try a different search term.</p>
        </div>
      )}
    </section>
  );
}

export default DiscoveryContent;
