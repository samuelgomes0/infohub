interface DiscoveryDetailHeaderProps {
  text: string;
}

function DiscoveryDetailHeader({ text }: DiscoveryDetailHeaderProps) {
  return <h1 className="text-primary text-4xl font-bold">{text}</h1>;
}

export default DiscoveryDetailHeader;
