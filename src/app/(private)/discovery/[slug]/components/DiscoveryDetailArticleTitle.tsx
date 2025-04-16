interface DiscoveryDetailHeaderProps {
  text: string;
}

function DiscoveryDetailArticleTitle({ text }: DiscoveryDetailHeaderProps) {
  return <h1 className="text-primary mt-8 mb-4 text-4xl font-bold">{text}</h1>;
}

export default DiscoveryDetailArticleTitle;
