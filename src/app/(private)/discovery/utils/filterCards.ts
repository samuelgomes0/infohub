import { DiscoveryCardProps } from "../interfaces";

function filterCards(
  cards: DiscoveryCardProps[],
  searchQuery: string,
): DiscoveryCardProps[] {
  if (!searchQuery?.trim()) return cards;

  const lowerQuery = searchQuery.toLowerCase();

  return cards.filter(({ title, content }) => {
    return (
      title.toLowerCase().includes(lowerQuery) ||
      content.toLowerCase().includes(lowerQuery)
    );
  });
}

export default filterCards;
