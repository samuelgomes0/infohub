import Discovery from ".";
import { useDiscoveryContext } from "../_context";
import { DiscoveryCardProps } from "../_interfaces";

const discoveryCardsData: DiscoveryCardProps[] = [
  {
    title: "Getting Started",
    content: "Learn the basics of getting started with our platform.",
    buttonLink: "/guides/getting-started",
  },
  {
    title: "Intermediate Guide",
    content: "Dive deeper into more advanced topics and techniques.",
    buttonLink: "/guides/intermediate",
  },
  {
    title: "Advanced Techniques",
    content: "Master the most advanced techniques and strategies.",
    buttonLink: "/guides/advanced",
  },
  {
    title: "Best Practices",
    content: "Explore industry best practices and guidelines.",
    buttonLink: "/resources/best-practices",
  },
  {
    title: "Design Principles",
    content: "Understand the core principles of effective design.",
    buttonLink: "/design/principles",
  },
  {
    title: "Content Creation",
    content: "Learn how to create engaging and valuable content.",
    buttonLink: "/marketing/content-creation",
  },
  {
    title: "Accessibility",
    content: "Make your app inclusive with accessibility best practices.",
    buttonLink: "/guides/accessibility",
  },
  {
    title: "Performance Optimization",
    content: "Tips to improve your app's speed and responsiveness.",
    buttonLink: "/performance/optimization",
  },
  {
    title: "Security Essentials",
    content: "Protect your application with key security strategies.",
    buttonLink: "/security/essentials",
  },
  {
    title: "Deploying to Production",
    content: "A step-by-step guide to launch your project live.",
    buttonLink: "/deployment/production",
  },
];

function DiscoveryContent() {
  const { searchQuery } = useDiscoveryContext();

  const filteredCards = discoveryCardsData.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="grid grid-cols-2 gap-6 py-8">
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <Discovery.Card
            key={index}
            title={card.title}
            content={card.content}
            buttonLink={card.buttonLink}
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
