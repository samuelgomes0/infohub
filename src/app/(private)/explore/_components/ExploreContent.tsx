import { ExploreCardProps } from "@/app/interfaces";
import Explore from ".";

const exploreCardsData: ExploreCardProps[] = [
  {
    title: "Getting Started",
    content: "Learn the basics of getting started with our platform.",
    buttonText: "Learn more",
    buttonLink: "/guides/getting-started",
  },
  {
    title: "Intermediate Guide",
    content: "Dive deeper into more advanced topics and techniques.",
    buttonText: "Learn more",
    buttonLink: "/guides/intermediate",
  },
  {
    title: "Advanced Techniques",
    content: "Master the most advanced techniques and strategies.",
    buttonText: "Learn more",
    buttonLink: "/guides/advanced",
  },
  {
    title: "Best Practices",
    content: "Explore industry best practices and guidelines.",
    buttonText: "Learn more",
    buttonLink: "/resources/best-practices",
  },
  {
    title: "Design Principles",
    content: "Understand the core principles of effective design.",
    buttonText: "Learn more",
    buttonLink: "/design/principles",
  },
  {
    title: "Content Creation",
    content: "Learn how to create engaging and valuable content.",
    buttonText: "Learn more",
    buttonLink: "/marketing/content-creation",
  },
  {
    title: "Accessibility",
    content: "Make your app inclusive with accessibility best practices.",
    buttonText: "Learn more",
    buttonLink: "/guides/accessibility",
  },
  {
    title: "Performance Optimization",
    content: "Tips to improve your app's speed and responsiveness.",
    buttonText: "Learn more",
    buttonLink: "/performance/optimization",
  },
  {
    title: "Security Essentials",
    content: "Protect your application with key security strategies.",
    buttonText: "Learn more",
    buttonLink: "/security/essentials",
  },
  {
    title: "Deploying to Production",
    content: "A step-by-step guide to launch your project live.",
    buttonText: "Learn more",
    buttonLink: "/deployment/production",
  },
];

function ExploreContent() {
  return (
    <section className="grid grid-cols-2 gap-6">
      {exploreCardsData.map((card, index) => (
        <Explore.Card
          key={index}
          title={card.title}
          content={card.content}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </section>
  );
}

export default ExploreContent;
