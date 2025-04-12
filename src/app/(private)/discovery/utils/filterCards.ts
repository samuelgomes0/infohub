import { DiscoveryCardProps } from "../interfaces";

function filterCards(
  cards: DiscoveryCardProps[],
  searchQuery: string,
): DiscoveryCardProps[] {
  return cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );
}

export default filterCards;
