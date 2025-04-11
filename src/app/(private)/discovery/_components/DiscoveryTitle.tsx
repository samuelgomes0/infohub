interface DiscoveryTitleProps {
  content: string;
}

function DiscoveryTitle({ content }: DiscoveryTitleProps) {
  return <h1 className="text-4xl font-bold">{content}</h1>;
}

export default DiscoveryTitle;
